import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogPostCard, Pagination } from "@/components/blog";
import { getTagBySlug, getPostsByTag } from "@/lib/wordpress";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// ---------------------------------------------------------------------------
// Dynamic SEO Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  try {
    const tag = await getTagBySlug(slug);
    if (!tag) return { title: "Tag Not Found" };

    return {
      title: `${tag.name} — Blog`,
      description: `Articles tagged with "${tag.name}" on the Zigron blog.`,
      alternates: { canonical: `/blog/tag/${slug}` },
      openGraph: {
        title: `${tag.name} — Zigron Blog`,
        description: `Articles tagged with "${tag.name}" on the Zigron blog.`,
        url: `https://zigron.com/blog/tag/${slug}`,
        type: "website",
        images: [{ url: "https://zigron.com/logo.svg", width: 1200, height: 630 }],
      },
    };
  } catch {
    return { title: "Blog | Zigron" };
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function TagPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page || "1", 10));

  const tag = await getTagBySlug(slug).catch(() => null);
  if (!tag) notFound();

  let posts = {
    data: [] as Awaited<ReturnType<typeof getPostsByTag>>["data"],
    totalPages: 1,
    total: 0,
  };

  try {
    posts = await getPostsByTag(tag.id, page, 9);
  } catch {
    // WordPress API may be unreachable
  }

  const basePath = `/blog/tag/${slug}`;

  // JSON-LD BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://zigron.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://zigron.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tag.name,
        item: `https://zigron.com/blog/tag/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-zigron-light selection:bg-zigron-red selection:text-white">
      <Header />

      <main id="main-content">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <Section background="dark" padding="hero">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center justify-center gap-1.5 text-sm text-gray-400">
                  <li>
                    <Link href="/" className="hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li>
                    <Link href="/blog" className="hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li className="text-gray-500" aria-current="page">
                    {tag.name}
                  </li>
                </ol>
              </nav>

              <Badge variant="muted" dot>
                Tag
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
                {tag.name}
              </h1>
              <p className="text-sm text-gray-500 mt-2">
                {posts.total} {posts.total === 1 ? "article" : "articles"}
              </p>
            </div>
          </Container>
        </Section>

        {/* Posts Grid */}
        <Section>
          <Container>
            {posts.data.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {posts.data.map((post) => (
                    <BlogPostCard key={post.id} post={post} />
                  ))}
                </div>
                <Pagination
                  currentPage={page}
                  totalPages={posts.totalPages}
                  basePath={basePath}
                />
              </>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-zigron-black dark:text-white mb-2">
                  No posts with this tag
                </h2>
                <p className="text-zigron-gray">
                  Check back soon or{" "}
                  <Link href="/blog" className="text-primary hover:underline">
                    browse all posts
                  </Link>
                  .
                </p>
              </div>
            )}
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
