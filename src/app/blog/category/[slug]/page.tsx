import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogPostCard, Pagination } from "@/components/blog";
import {
  getCategoryBySlug,
  getPostsByCategory,
  getCategories,
} from "@/lib/wordpress";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";

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
    const category = await getCategoryBySlug(slug);
    if (!category) return { title: "Category Not Found" };

    const description =
      category.description ||
      `Browse all ${category.name} articles on the Zigron blog.`;

    return {
      title: `${category.name} — Blog`,
      description,
      alternates: { canonical: `/blog/category/${slug}` },
      openGraph: {
        title: `${category.name} — Zigron Blog`,
        description,
        url: `https://zigron.com/blog/category/${slug}`,
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

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}) {
  const { slug } = await params;
  const sp = await searchParams;
  const page = Math.max(1, parseInt(sp.page || "1", 10));

  const category = await getCategoryBySlug(slug).catch(() => null);
  if (!category) notFound();

  let posts = {
    data: [] as Awaited<ReturnType<typeof getPostsByCategory>>["data"],
    totalPages: 1,
    total: 0,
  };
  let allCategories: Awaited<ReturnType<typeof getCategories>> = [];

  try {
    [posts, allCategories] = await Promise.all([
      getPostsByCategory(category.id, page, 9),
      getCategories(),
    ]);
  } catch {
    // WordPress API may be unreachable
  }

  const basePath = `/blog/category/${slug}`;

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
        name: category.name,
        item: `https://zigron.com/blog/category/${slug}`,
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
                    {category.name}
                  </li>
                </ol>
              </nav>

              <Badge variant="primary" dot>
                Category
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
                {category.name}
              </h1>
              {category.description && (
                <p className="text-lg text-gray-400 leading-relaxed">
                  {category.description}
                </p>
              )}
              <p className="text-sm text-gray-500 mt-2">
                {posts.total} {posts.total === 1 ? "article" : "articles"}
              </p>
            </div>
          </Container>
        </Section>

        {/* Category Bar */}
        {allCategories.length > 0 && (
          <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 py-4 sticky top-[80px] z-30">
            <Container>
              <nav
                aria-label="Blog categories"
                className="flex items-center gap-3 overflow-x-auto no-scrollbar"
              >
                <Link
                  href="/blog"
                  className="shrink-0 text-sm font-semibold text-zigron-gray hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-full transition-colors"
                >
                  All Posts
                </Link>
                {allCategories
                  .filter((c) => c.count > 0)
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/blog/category/${cat.slug}`}
                      className={`shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-colors ${
                        cat.slug === slug
                          ? "bg-primary text-white"
                          : "text-zigron-gray hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  ))}
              </nav>
            </Container>
          </div>
        )}

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
                  No posts in this category
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
