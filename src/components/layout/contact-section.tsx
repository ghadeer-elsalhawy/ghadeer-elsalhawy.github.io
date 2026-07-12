import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section className="mx-auto my-16 w-[92%] max-w-4xl rounded-2xl bg-[var(--color-panel)] px-6 py-14 text-center text-[var(--color-cream-btn)] sm:px-10">
      <h2 className="font-display text-2xl font-semibold sm:text-3xl">
        Wanna have a{" "}
        <span className="text-[var(--color-gold-soft)]">coffee chat?</span>
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm text-[var(--color-cream-btn)]/85 sm:text-base">
        Let&rsquo;s connect over a 30 minute call to chat about DevOps,
        sustainable tech, collaborating on a project, or just to swap book
        recommendations.
      </p>
      <a
        href={`mailto:${siteConfig.email}?subject=Coffee%20Chat%20Invitation`}
        className="mt-7 inline-block rounded-full border-2 border-[var(--color-cream-btn)] bg-[var(--color-cream-btn)] px-7 py-3 font-medium text-[#2e2e2e] transition hover:bg-transparent hover:text-[var(--color-cream-btn)]"
      >
        Let&rsquo;s have a sip!
      </a>
    </section>
  );
}
