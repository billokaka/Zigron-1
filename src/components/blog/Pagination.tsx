import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath?: string;
}

function getPageUrl(basePath: string, page: number): string {
  if (page === 1) return basePath;
  return `${basePath}?page=${page}`;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath = "/blog",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  // Show at most 5 page numbers centered around current
  const pages: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2 mt-12">
      {currentPage > 1 && (
        <Button
          variant="outline"
          size="sm"
          href={getPageUrl(basePath, currentPage - 1)}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Previous
        </Button>
      )}

      <div className="flex items-center gap-1">
        {start > 1 && (
          <>
            <Button variant="ghost" size="sm" href={getPageUrl(basePath, 1)}>
              1
            </Button>
            {start > 2 && (
              <span className="px-2 text-zigron-gray" aria-hidden="true">...</span>
            )}
          </>
        )}

        {pages.map((page) =>
          page === currentPage ? (
            <Button key={page} variant="primary" size="sm" aria-current="page">
              {page}
            </Button>
          ) : (
            <Button
              key={page}
              variant="ghost"
              size="sm"
              href={getPageUrl(basePath, page)}
            >
              {page}
            </Button>
          )
        )}

        {end < totalPages && (
          <>
            {end < totalPages - 1 && (
              <span className="px-2 text-zigron-gray" aria-hidden="true">...</span>
            )}
            <Button
              variant="ghost"
              size="sm"
              href={getPageUrl(basePath, totalPages)}
            >
              {totalPages}
            </Button>
          </>
        )}
      </div>

      {currentPage < totalPages && (
        <Button
          variant="outline"
          size="sm"
          href={getPageUrl(basePath, currentPage + 1)}
        >
          Next
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      )}
    </nav>
  );
}
