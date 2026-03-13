import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogPostCard, Pagination } from "@/components/blog";
import { getPosts, getCategories } from "@/lib/wordpress";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on IoT, AI, engineering design, and connected product development from the Zigron team.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Zigron",
    description:
      "Insights on IoT, AI, engineering design, and connected product development from the Zigron team.",
    url: "https://zigron.com/blog",
    type: "website",
  },
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page || "1", 10));

  let posts = { data: [] as Awaited<ReturnType<typeof getPosts>>["data"], totalPages: 1, total: 0 };
  let categories: Awaited<ReturnType<typeof getCategories>> = [];

  try {
    [posts, categories] = await Promise.all([
      getPosts(page, 9),
      getCategories(),
    ]);
  } catch {
    // WordPress API may be unreachable — render empty state
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Zigron Blog",
    description: "Insights on IoT, AI, and engineering from Zigron.",
    url: "https://zigron.com/blog",
    publisher: {
      "@type": "Organization",
      name: "Zigron",
      url: "https://zigron.com",
    },
  };

  return (
    <div className="min-h-screen bg-zigron-light selection:bg-zigron-red selection:text-white">
      <Header />

      <main id="main-content">
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero */}
        <Section background="dark" padding="hero">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="primary" dot>
                Blog
              </Badge>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-4 mb-4">
                Insights & Updates
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Engineering perspectives on IoT, AI, and connected product
                development from the team building it.
              </p>
            </div>
          </Container>
        </Section>

        {/* Category Filter Bar */}
        {categories.length > 0 && (
          <div className="bg-white dark:bg-surface-dark border-b border-gray-200 dark:border-gray-800 py-4 sticky top-[80px] z-30">
            <Container>
              <nav
                aria-label="Blog categories"
                className="flex items-center gap-3 overflow-x-auto no-scrollbar"
              >
                <Link
                  href="/blog"
                  className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-colors bg-primary text-white"
                >
                  All Posts
                </Link>
                {categories
                  .filter((c) => c.count > 0)
                  .map((category) => (
                    <Link
                      key={category.id}
                      href={`/blog/category/${category.slug}`}
                      className="shrink-0 text-sm font-semibold text-zigron-gray hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 px-4 py-2 rounded-full transition-colors"
                    >
                      {category.name}
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
                  basePath="/blog"
                />
              </>
            ) : (
              <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-zigron-black dark:text-white mb-2">
                  No posts yet
                </h2>
                <p className="text-zigron-gray">
                  Check back soon for insights from the Zigron team.
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
