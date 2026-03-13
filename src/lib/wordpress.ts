// ============================================================================
// WORDPRESS REST API CLIENT
// ============================================================================

const API_BASE =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ||
  "https://cms.zigron.com/wp-json/wp/v2";

// ============================================================================
// TYPES
// ============================================================================

export interface WPPost {
  id: number;
  slug: string;
  date: string;
  modified: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{ name: string; avatar_urls?: Record<string, string> }>;
    "wp:featuredmedia"?: Array<{
      source_url: string;
      alt_text: string;
      media_details?: {
        width: number;
        height: number;
      };
    }>;
    "wp:term"?: [WPCategory[], WPTag[]];
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  description: string;
}

export interface WPTag {
  id: number;
  name: string;
  slug: string;
  count: number;
}

export interface WPPaginatedResponse<T> {
  data: T[];
  totalPages: number;
  total: number;
}

// ============================================================================
// FETCH HELPERS
// ============================================================================

async function wpFetch<T>(
  endpoint: string
): Promise<{ data: T; headers: Headers }> {
  const url = `${API_BASE}${endpoint}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000); // 30s timeout

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      signal: controller.signal,
    });

    if (!res.ok) {
      throw new Error(`WordPress API error: ${res.status} for ${endpoint}`);
    }

    const data = (await res.json()) as T;
    return { data, headers: res.headers };
  } finally {
    clearTimeout(timeout);
  }
}

async function wpFetchPaginated<T>(
  endpoint: string
): Promise<WPPaginatedResponse<T>> {
  const { data, headers } = await wpFetch<T[]>(endpoint);
  return {
    data,
    totalPages: parseInt(headers.get("X-WP-TotalPages") || "1", 10),
    total: parseInt(headers.get("X-WP-Total") || "0", 10),
  };
}

// ============================================================================
// POST FUNCTIONS
// ============================================================================

export async function getPosts(
  page = 1,
  perPage = 9
): Promise<WPPaginatedResponse<WPPost>> {
  return wpFetchPaginated<WPPost>(
    `/posts?_embed&page=${page}&per_page=${perPage}`
  );
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const { data } = await wpFetch<WPPost[]>(`/posts?slug=${encodeURIComponent(slug)}&_embed`);
  return data[0] || null;
}

export async function getPostsByCategory(
  categoryId: number,
  page = 1,
  perPage = 9
): Promise<WPPaginatedResponse<WPPost>> {
  return wpFetchPaginated<WPPost>(
    `/posts?_embed&categories=${categoryId}&page=${page}&per_page=${perPage}`
  );
}

export async function getPostsByTag(
  tagId: number,
  page = 1,
  perPage = 9
): Promise<WPPaginatedResponse<WPPost>> {
  return wpFetchPaginated<WPPost>(
    `/posts?_embed&tags=${tagId}&page=${page}&per_page=${perPage}`
  );
}

// ============================================================================
// TAXONOMY FUNCTIONS
// ============================================================================

export async function getCategories(): Promise<WPCategory[]> {
  const { data } = await wpFetch<WPCategory[]>("/categories?per_page=100");
  return data;
}

export async function getTags(): Promise<WPTag[]> {
  const { data } = await wpFetch<WPTag[]>("/tags?per_page=100");
  return data;
}

export async function getCategoryBySlug(
  slug: string
): Promise<WPCategory | null> {
  const { data } = await wpFetch<WPCategory[]>(`/categories?slug=${encodeURIComponent(slug)}`);
  return data[0] || null;
}

export async function getTagBySlug(slug: string): Promise<WPTag | null> {
  const { data } = await wpFetch<WPTag[]>(`/tags?slug=${encodeURIComponent(slug)}`);
  return data[0] || null;
}

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export function getFeaturedImageUrl(post: WPPost): string | null {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null;
}

export function getFeaturedImageAlt(post: WPPost): string {
  return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    post.title.rendered
  );
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || "Zigron Team";
}

export function getPostCategories(post: WPPost): WPCategory[] {
  return (post._embedded?.["wp:term"]?.[0] as WPCategory[]) || [];
}

export function getPostTags(post: WPPost): WPTag[] {
  return (post._embedded?.["wp:term"]?.[1] as WPTag[]) || [];
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function estimateReadTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
