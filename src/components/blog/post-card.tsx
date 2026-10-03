import Link from "next/link";
import Image from "next/image";
import { CalendarDays, Clock3, Eye } from "lucide-react";
import { Post, formatDate } from "@/lib/post-types";
import { TagList } from "@/components/ui/tag";
import { GoatCounterViewCount } from "@/components/analytics/goatcounter";

export function PostMeta({
  post,
  viewCountPath,
}: {
  post: Post;
  viewCountPath?: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-utility text-xs text-[var(--color-ink-soft)]">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays size={13} /> {formatDate(post.frontmatter.date)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 size={13} /> {post.readingMinutes} min read
      </span>
      {viewCountPath ? (
        <GoatCounterViewCount path={viewCountPath} />
      ) : typeof post.frontmatter.views === "number" ? (
        <span className="inline-flex items-center gap-1.5">
          <Eye size={13} /> {post.frontmatter.views.toLocaleString()} reads
        </span>
      ) : null}
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
      className="paper-card group block h-full overflow-hidden transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      {post.frontmatter.cover && (
        <div className="relative aspect-video">
          <Image
            src={post.frontmatter.cover}
            alt=""
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <PostMeta
          post={post}
          viewCountPath={basePath === "blog" ? `/blog/${post.slug}` : undefined}
        />
        <h3 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-[var(--color-gold)]">
          {post.frontmatter.title}
        </h3>
        <p className="mt-2 text-sm text-[var(--color-ink-soft)] line-clamp-3">
          {post.frontmatter.description}
        </p>
        <div className="mt-4">
          <TagList tags={post.frontmatter.tags} />
        </div>
      </div>
    </Link>
  );
}
