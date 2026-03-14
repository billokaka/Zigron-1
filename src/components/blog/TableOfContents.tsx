"use client";

import { useState, useEffect, useCallback } from "react";
import { List, ChevronDown } from "lucide-react";

export type TocItem = {
  id: string;
  text: string;
  level: 2 | 3 | 4;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Scroll spy via IntersectionObserver
  useEffect(() => {
    const headingEls = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (headingEls.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first heading that is intersecting
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 }
    );

    headingEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // Update URL hash without jump
        window.history.replaceState(null, "", `#${id}`);
        setActiveId(id);
      }
      setMobileOpen(false);
    },
    []
  );

  if (items.length < 2) return null;

  const tocList = (
    <ul className="space-y-1">
      {items.map((item) => {
        const isActive = activeId === item.id;
        const indent =
          item.level === 3 ? "pl-4" : item.level === 4 ? "pl-8" : "";

        return (
          <li key={item.id} className={indent}>
            <a
              href={`#${item.id}`}
              onClick={(e) => handleClick(e, item.id)}
              aria-current={isActive ? "location" : undefined}
              className={`block py-1.5 px-3 text-sm rounded-md border-l-2 transition-colors duration-200 ${
                isActive
                  ? "border-primary text-primary font-medium bg-primary/5"
                  : "border-transparent text-gray-500 dark:text-gray-400 hover:text-zigron-black dark:hover:text-white hover:border-gray-300"
              }`}
            >
              {item.text}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile: collapsible accordion */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          className="flex items-center gap-2 w-full px-4 py-3 text-sm font-medium text-zigron-black dark:text-white bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800 transition-colors hover:bg-gray-100 dark:hover:bg-gray-900"
        >
          <List className="w-4 h-4" />
          Table of Contents
          <ChevronDown
            className={`w-4 h-4 ml-auto transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        {mobileOpen && (
          <nav
            aria-label="Table of contents"
            className="mt-2 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl border border-gray-200 dark:border-gray-800"
          >
            {tocList}
          </nav>
        )}
      </div>

      {/* Desktop: sticky sidebar */}
      <nav
        aria-label="Table of contents"
        className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <p className="text-xs font-bold uppercase tracking-widest text-zigron-gray mb-3 px-3">
          On this page
        </p>
        {tocList}
      </nav>
    </>
  );
}
