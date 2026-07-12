import "server-only";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { Post, PostFrontmatter } from "@/lib/post-types";

export type { Post, PostFrontmatter };

function collectionDir(collection: "blog" | "projects") {
  return path.join(process.cwd(), "content", collection);
}

export function getAllSlugs(collection: "blog" | "projects"): string[] {
  const dir = collectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(collection: "blog" | "projects", slug: string): Post {
  const filePath = path.join(collectionDir(collection), `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    frontmatter: {
      title: data.title,
      date: data.date,
      description: data.description ?? "",
      tags: data.tags ?? [],
      cover: data.cover,
      draft: data.draft ?? false,
      views: data.views,
    },
    content,
    readingMinutes: Math.max(1, Math.ceil(stats.minutes)),
  };
}

export function getAllPosts(collection: "blog" | "projects"): Post[] {
  return getAllSlugs(collection)
    .map((slug) => getPostBySlug(collection, slug))
    .filter((p) => !p.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getAllTags(collection: "blog" | "projects"): string[] {
  const posts = getAllPosts(collection);
  const tagSet = new Set<string>();
  posts.forEach((p) => p.frontmatter.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

/** Related posts: ranked by number of shared tags, falls back to most recent. */
export function getRelatedPosts(
  collection: "blog" | "projects",
  current: Post,
  limit = 3
): Post[] {
  const others = getAllPosts(collection).filter((p) => p.slug !== current.slug);

  const scored = others
    .map((p) => {
      const shared = p.frontmatter.tags.filter((t) =>
        current.frontmatter.tags.includes(t)
      ).length;
      return { post: p, shared };
    })
    .sort((a, b) => b.shared - a.shared || (a.post.frontmatter.date < b.post.frontmatter.date ? 1 : -1));

  return scored.slice(0, limit).map((s) => s.post);
}
