import { getAllPosts, getAllTags } from "@/lib/content";
import { SectionHeading } from "@/components/ui/section-heading";
import { FilterableGrid } from "@/components/blog/filterable-grid";

export const metadata = { title: "Projects — Ghadeer Elsalhawy" };

export default function ProjectsIndexPage() {
  const posts = getAllPosts("projects");
  const tags = getAllTags("projects");

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <SectionHeading eyebrow="Projects" title="Things I've built" />
      <div className="mt-12">
        <FilterableGrid posts={posts} tags={tags} basePath="projects" />
      </div>
    </div>
  );
}
