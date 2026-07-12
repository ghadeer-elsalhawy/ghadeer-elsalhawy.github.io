export type PostFrontmatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  cover?: string;
  draft?: boolean;
  views?: number;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  readingMinutes: number;
};

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
