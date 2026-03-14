"use client";

import DOMPurify from "isomorphic-dompurify";
import parse, {
  domToReact,
  type HTMLReactParserOptions,
  Element,
  type DOMNode,
} from "html-react-parser";
import Image from "next/image";
import { slugify } from "@/lib/slugify";

function getTextContent(nodes: DOMNode[]): string {
  return nodes
    .map((node) => {
      if ("data" in node && typeof node.data === "string") return node.data;
      if ("children" in node && node.children)
        return getTextContent(node.children as DOMNode[]);
      return "";
    })
    .join("");
}

function preprocessShortcodes(html: string): string {
  // Handle [caption] shortcode (use [\s\S] instead of . with s flag for ES2017 compat)
  let processed = html.replace(
    /\[caption[^\]]*\]([\s\S]*?)\[\/caption\]/g,
    '<figure class="wp-caption">$1</figure>'
  );

  // Remove other unprocessed shortcodes gracefully
  processed = processed.replace(/\[[^\]]+\]/g, "");

  return processed;
}

const parserOptions: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element)) return;

    const { name, attribs, children } = domNode;

    // Style headings with anchor IDs for TOC
    if (name === "h2") {
      const id = slugify(getTextContent(children as DOMNode[]));
      return (
        <h2 id={id} className="text-2xl font-bold text-zigron-black dark:text-white mt-10 mb-4 scroll-mt-24">
          {domToReact(children as DOMNode[], parserOptions)}
        </h2>
      );
    }
    if (name === "h3") {
      const id = slugify(getTextContent(children as DOMNode[]));
      return (
        <h3 id={id} className="text-xl font-bold text-zigron-black dark:text-white mt-8 mb-3 scroll-mt-24">
          {domToReact(children as DOMNode[], parserOptions)}
        </h3>
      );
    }
    if (name === "h4") {
      const id = slugify(getTextContent(children as DOMNode[]));
      return (
        <h4 id={id} className="text-lg font-bold text-zigron-black dark:text-white mt-6 mb-2 scroll-mt-24">
          {domToReact(children as DOMNode[], parserOptions)}
        </h4>
      );
    }

    // Style paragraphs
    if (name === "p") {
      return (
        <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          {domToReact(children as DOMNode[], parserOptions)}
        </p>
      );
    }

    // Style links
    if (name === "a") {
      return (
        <a
          href={attribs.href?.startsWith("javascript:") ? "#" : attribs.href}
          {...(attribs.href?.startsWith("http") && !attribs.href?.includes("zigron.com")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="text-primary hover:text-primary-dark underline underline-offset-2 transition-colors"
        >
          {domToReact(children as DOMNode[], parserOptions)}
        </a>
      );
    }

    // Style blockquotes
    if (name === "blockquote") {
      return (
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 italic text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30 rounded-r-lg pr-4">
          {domToReact(children as DOMNode[], parserOptions)}
        </blockquote>
      );
    }

    // Style code blocks
    if (name === "pre") {
      return (
        <pre className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 overflow-x-auto my-6 text-sm font-mono">
          {domToReact(children as DOMNode[], parserOptions)}
        </pre>
      );
    }

    if (name === "code" && domNode.parent && (domNode.parent as Element).name !== "pre") {
      return (
        <code className="bg-gray-100 dark:bg-gray-800 text-primary px-1.5 py-0.5 rounded text-sm font-mono">
          {domToReact(children as DOMNode[], parserOptions)}
        </code>
      );
    }

    // Replace img with next/image
    if (name === "img" && attribs.src) {
      const width = parseInt(attribs.width, 10) || 800;
      const height = parseInt(attribs.height, 10) || 450;
      return (
        <span className="block my-6">
          <Image
            src={attribs.src}
            alt={attribs.alt || "Blog image"}
            width={width}
            height={height}
            className="rounded-xl w-full h-auto"
            sizes="(max-width: 768px) 100vw, 720px"
          />
        </span>
      );
    }

    // Style figures/captions
    if (name === "figcaption") {
      return (
        <figcaption className="text-sm text-zigron-gray text-center mt-2 italic">
          {domToReact(children as DOMNode[], parserOptions)}
        </figcaption>
      );
    }
  },
};

export function WordPressContent({ html }: { html: string }) {
  const processed = preprocessShortcodes(html);
  const sanitized = DOMPurify.sanitize(processed, {
    ADD_TAGS: ["iframe"],
    ADD_ATTR: ["target", "allow", "allowfullscreen", "frameborder"],
    FORBID_TAGS: ["script", "style", "form", "input", "textarea", "select"],
    FORBID_ATTR: ["onerror", "onload", "onclick", "onmouseover"],
  });

  return <div className="wp-content">{parse(sanitized, parserOptions)}</div>;
}
