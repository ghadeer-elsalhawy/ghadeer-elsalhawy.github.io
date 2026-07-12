"use client";

import { useMemo, useState } from "react";
import { Post } from "@/lib/post-types";
import { PostCard } from "@/components/blog/post-card";

export function FilterableGrid({
  posts,
  tags,
  basePath,
}: {
  posts: Post[];
  tags: string[];
  basePath: "blog" | "projects";
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      active ? posts.filter((p) => p.frontmatter.tags.includes(active)) : posts,
    [active, posts]
  );

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActive(null)}
          className={`tag-stamp cursor-pointer ${
            active === null ? "bg-[var(--color-ink)] text-[var(--color-cream)]" : ""
          }`}
        >
          All
        </button>
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`tag-stamp cursor-pointer ${
              active === t ? "bg-[var(--color-ink)] text-[var(--color-cream)]" : ""
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-[var(--color-ink-soft)]">
          Nothing tagged &ldquo;{active}&rdquo; yet.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} basePath={basePath} />
          ))}
        </div>
      )}
    </div>
  );
}
