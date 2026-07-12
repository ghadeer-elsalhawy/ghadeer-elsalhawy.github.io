import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { ContactSection } from "@/components/layout/contact-section";

export const metadata = { title: "About — Ghadeer Elsalhawy" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-utility text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">
        About
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold">
        A bit more of the story
      </h1>

      <div className="prose-post mt-8 max-w-none text-justify">
        <p>
          I&rsquo;m a DevOps Engineerwith a growing focus on infrastructure as
          code and the security side of DevOps. I am currently working as a
          University Teaching Assistant, where I am mentoring sophomores into
          exploring their Coding Career.
        </p>
        <p>
          Beyond the black screen, I&rsquo;m a reader (you can find what
          I&rsquo;m currently into on my{" "}
          <a href="https://www.goodreads.com/user/show/58063814-ghadeer">
            Goodreads
          </a>
          ). I am also increasingly interested in sustainability, and I've been
          exploring ways to connect tech with environmental impact, thinking
          about how the same instincts that drive efficient, resilient
          infrastructure (avoiding waste, right-sizing resources, designing for
          long-term health of a system) apply just as much to ecosystems as they
          do to a Kubernetes cluster.
        </p>
      </div>

      <div className="mt-10 flex items-center gap-4">
        <Image
          src="/images/signature-dark.png"
          alt=""
          width={48}
          height={48}
          className="opacity-70"
        />
        <p className="font-display italic text-[var(--color-ink-soft)]">
          {siteConfig.name}
        </p>
      </div>

      <ContactSection />
    </div>
  );
}
