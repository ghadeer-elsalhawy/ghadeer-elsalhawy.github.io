import { Post } from "@/lib/post-types";
import { PostCard } from "@/components/blog/post-card";

export function RelatedPosts({
  posts,
  basePath,
}: {
  posts: Post[];
  basePath: "blog" | "projects";
}) {
  if (!posts.length) return null;

  return (
    <section className="mx-auto mt-16 max-w-3xl">
      <h2 className="font-display text-xl font-semibold">
        {basePath === "blog" ? "Similar posts" : "Related projects"}
      </h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} basePath={basePath} />
        ))}
      </div>
    </section>
  );
}
