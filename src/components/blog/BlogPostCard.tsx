import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import {
  type WPPost,
  getFeaturedImageUrl,
  getFeaturedImageAlt,
  getPostCategories,
  getPostTags,
  formatDate,
  estimateReadTime,
  stripHtml,
} from "@/lib/wordpress";
import { Calendar, Clock } from "lucide-react";

export function BlogPostCard({ post }: { post: WPPost }) {
  const imageUrl = getFeaturedImageUrl(post);
  const imageAlt = getFeaturedImageAlt(post);
  const categories = getPostCategories(post);
  const tags = getPostTags(post);
  const primaryCategory = categories[0];
  const readTime = estimateReadTime(post.content.rendered);
  const excerpt = stripHtml(post.excerpt.rendered);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="h-56 relative overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800" />
        )}
        {primaryCategory && (
          <div className="absolute top-4 left-4">
            <Badge variant="primary">{primaryCategory.name}</Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-zigron-gray mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {readTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-zigron-black dark:text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title.rendered}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-zigron-gray leading-relaxed line-clamp-3 mb-4 flex-1">
          {excerpt}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-auto">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag.id} variant="muted">
                {tag.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
