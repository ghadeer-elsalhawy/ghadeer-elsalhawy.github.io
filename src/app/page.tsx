import { Hero } from "@/components/home/hero";
import { Skills } from "@/components/home/skills";
import { ContactSection } from "@/components/layout/contact-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PostCard } from "@/components/blog/post-card";
import { getAllPosts } from "@/lib/content";

export default function Home() {
  const latestPosts = getAllPosts("blog").slice(0, 3);

  return (
    <>
      <Hero />
      <Skills />

      {latestPosts.length > 0 && (
        <section className="mx-auto max-w-5xl px-5 py-14">
          <SectionHeading eyebrow="Fresh off the press" title="Latest from the blog" />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {latestPosts.map((p) => (
              <PostCard key={p.slug} post={p} basePath="blog" />
            ))}
          </div>
        </section>
      )}

      <ContactSection />
    </>
  );
}
