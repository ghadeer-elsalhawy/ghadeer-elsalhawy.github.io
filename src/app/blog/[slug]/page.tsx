import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllSlugs, getPostBySlug, getRelatedPosts } from "@/lib/content";
import { PostMeta } from "@/components/blog/post-card";
import { TagList } from "@/components/ui/tag";
import { RelatedPosts } from "@/components/blog/related-posts";
import { ContactSection } from "@/components/layout/contact-section";

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const post = getPostBySlug("blog", slug);
    return {
      title: `${post.frontmatter.title} — Blog`,
      description: post.frontmatter.description,
    };
  } catch {
    return {};
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post;
  try {
    post = getPostBySlug("blog", slug);
  } catch {
    notFound();
  }
  if (!post) notFound();

  const related = getRelatedPosts("blog", post);

  return (
    <article className="mx-auto max-w-3xl px-5 py-16">
      <header className="mb-10">
        <PostMeta post={post} />
        <h1 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
          {post.frontmatter.title}
        </h1>
        <p className="mt-3 text-[var(--color-ink-soft)]">
          {post.frontmatter.description}
        </p>
        <div className="mt-4">
          <TagList tags={post.frontmatter.tags} />
        </div>
      </header>

      <div className="prose-post">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>

      <RelatedPosts posts={related} basePath="blog" />
      <ContactSection />
    </article>
  );
}
