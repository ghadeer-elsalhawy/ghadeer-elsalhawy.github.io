import { getAllPosts, getAllTags } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FilterableGrid } from "@/components/blog/filterable-grid";

export const metadata = { title: "Blog & Notes — Ghadeer Elsalhawy" };

export default function BlogIndexPage() {
  const posts = getAllPosts("blog");
  const tags = getAllTags("blog");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading
        title="Blog and Study Notes"
        description="Technical articles about DevOps, Site Reliability Engineering, Cybersecuirty and more."
      />
      <div className="mt-12">
        <FilterableGrid posts={posts} tags={tags} basePath="blog" />
      </div>
    </div>
  );
}
