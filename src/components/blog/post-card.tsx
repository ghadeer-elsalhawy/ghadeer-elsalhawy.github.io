import Link from "next/link";
import { CalendarDays, Clock3, Eye } from "lucide-react";
import { Post, formatDate } from "@/lib/post-types";
import { TagList } from "@/components/ui/tag";

export function PostMeta({ post }: { post: Post }) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-utility text-xs text-[var(--color-ink-soft)]">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays size={13} /> {formatDate(post.frontmatter.date)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 size={13} /> {post.readingMinutes} min read
      </span>
      {typeof post.frontmatter.views === "number" && (
        <span className="inline-flex items-center gap-1.5">
          <Eye size={13} /> {post.frontmatter.views.toLocaleString()} reads
        </span>
      )}
    </div>
  );
}

export function PostCard({
  post,
  basePath,
}: {
  post: Post;
  basePath: "blog" | "projects";
}) {
  return (
    <Link
      href={`/${basePath}/${post.slug}`}
      className="paper-card group block h-full p-6 transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <PostMeta post={post} />
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-[var(--color-gold)]">
        {post.frontmatter.title}
      </h3>
      <p className="mt-2 text-sm text-[var(--color-ink-soft)] line-clamp-3">
        {post.frontmatter.description}
      </p>
      <div className="mt-4">
        <TagList tags={post.frontmatter.tags} />
      </div>
    </Link>
  );
}
