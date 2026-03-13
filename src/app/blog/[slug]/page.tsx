import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { BlogPostCard, WordPressContent } from "@/components/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft, ChevronRight } from "lucide-react";
import {
  getPosts,
  getPostBySlug,
  getPostsByCategory,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getAuthorName,
  getPostCategories,
  getPostTags,
  formatDate,
  estimateReadTime,
  stripHtml,
} from "@/lib/wordpress";

const OG_FALLBACK_IMAGE = "https://zigron.com/logo.svg";

// ---------------------------------------------------------------------------
// Pre-render recent posts at build time for faster first crawl
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  try {
    const { data } = await getPosts(1, 20);
    return data.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

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
    const post = await getPostBySlug(slug);
    if (!post) return { title: "Post Not Found" };

    const rawExcerpt = stripHtml(post.excerpt.rendered);
    const description = rawExcerpt.length <= 160
      ? rawExcerpt
      : rawExcerpt.slice(0, 160).replace(/\s+\S*$/, "") + "...";
    const image = getFeaturedImageUrl(post) || OG_FALLBACK_IMAGE;
    const categories = getPostCategories(post);

    return {
      title: post.title.rendered,
      description,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: post.title.rendered,
        description,
        url: `https://zigron.com/blog/${slug}`,
        type: "article",
        publishedTime: post.date,
        modifiedTime: post.modified,
        images: [{ url: image, width: 1200, height: 630 }],
        ...(categories.length > 0 && {
          tags: categories.map((c) => c.name),
        }),
      },
      twitter: {
        card: "summary_large_image",
        title: post.title.rendered,
        description,
        images: [image],
      },
    };
  } catch {
    return { title: "Blog | Zigron" };
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) notFound();

  const imageUrl = getFeaturedImageUrl(post);
  const imageAlt = getFeaturedImageAlt(post);
  const author = getAuthorName(post);
  const categories = getPostCategories(post);
  const tags = getPostTags(post);
  const readTime = estimateReadTime(post.content.rendered);
  const wordCount = stripHtml(post.content.rendered).split(/\s+/).length;
  const primaryCategory = categories[0];

  // Fetch related posts from same category
  let relatedPosts: Awaited<ReturnType<typeof getPostsByCategory>>["data"] = [];
  if (primaryCategory) {
    try {
      const related = await getPostsByCategory(primaryCategory.id, 1, 4);
      relatedPosts = related.data.filter((p) => p.id !== post.id).slice(0, 3);
    } catch {
      // Silently fail
    }
  }

  // JSON-LD: Article + BreadcrumbList
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title.rendered,
      description: (() => { const e = stripHtml(post.excerpt.rendered); return e.length <= 160 ? e : e.slice(0, 160).replace(/\s+\S*$/, "") + "..."; })(),
      url: `https://zigron.com/blog/${slug}`,
      datePublished: post.date,
      dateModified: post.modified,
      wordCount,
      author: { "@type": "Person", name: author },
      publisher: {
        "@type": "Organization",
        name: "Zigron",
        url: "https://zigron.com",
        logo: {
          "@type": "ImageObject",
          url: "https://zigron.com/logo.svg",
        },
      },
      image: imageUrl || OG_FALLBACK_IMAGE,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://zigron.com/blog/${slug}`,
      },
      ...(primaryCategory && {
        articleSection: primaryCategory.name,
      }),
      ...(tags.length > 0 && {
        keywords: tags.map((t) => t.name).join(", "),
      }),
    },
    {
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
        ...(primaryCategory
          ? [
              {
                "@type": "ListItem",
                position: 3,
                name: primaryCategory.name,
                item: `https://zigron.com/blog/category/${primaryCategory.slug}`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: post.title.rendered,
                item: `https://zigron.com/blog/${slug}`,
              },
            ]
          : [
              {
                "@type": "ListItem",
                position: 3,
                name: post.title.rendered,
                item: `https://zigron.com/blog/${slug}`,
              },
            ]),
      ],
    },
  ];

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
          <Container size="narrow">
            <div className="text-center">
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
                  {primaryCategory && (
                    <>
                      <li><ChevronRight className="w-3.5 h-3.5" /></li>
                      <li>
                        <Link
                          href={`/blog/category/${primaryCategory.slug}`}
                          className="hover:text-white transition-colors"
                        >
                          {primaryCategory.name}
                        </Link>
                      </li>
                    </>
                  )}
                  <li><ChevronRight className="w-3.5 h-3.5" /></li>
                  <li className="text-gray-500 truncate max-w-[200px]" aria-current="page">
                    {post.title.rendered}
                  </li>
                </ol>
              </nav>

              {/* Category badge */}
              {primaryCategory && (
                <div className="mb-4">
                  <Link href={`/blog/category/${primaryCategory.slug}`}>
                    <Badge variant="primary">{primaryCategory.name}</Badge>
                  </Link>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                {post.title.rendered}
              </h1>

              {/* Meta */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {readTime} min read
                </span>
              </div>
            </div>
          </Container>
        </Section>

        {/* Article Content */}
        <Section>
          <Container size="narrow">
            <article>
              {/* Featured Image */}
              {imageUrl && (
                <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-10 -mt-16 shadow-xl">
                  <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 720px"
                    className="object-cover"
                  />
                </div>
              )}

              {/* WordPress HTML Content */}
              <WordPressContent html={post.content.rendered} />

              {/* Tags */}
              {tags.length > 0 && (
                <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <h3 className="text-sm font-bold text-zigron-gray uppercase tracking-widest mb-3">
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Link
                        key={tag.id}
                        href={`/blog/tag/${tag.slug}`}
                        className="text-sm font-medium text-zigron-gray bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white px-3 py-1.5 rounded-full transition-colors"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>
          </Container>
        </Section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <Section background="surface">
            <Container>
              <h2 className="text-2xl font-bold text-zigron-black dark:text-white mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <BlogPostCard key={related.id} post={related} />
                ))}
              </div>
            </Container>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  );
}
