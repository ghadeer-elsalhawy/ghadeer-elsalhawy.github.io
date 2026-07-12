import { siteConfig } from "@/lib/site-config";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-14">
      <SectionHeading eyebrow="Toolbox" title="What I work with" />
      <div className="mt-10 flex flex-col gap-3">
        {siteConfig.skills.map((group) => (
          <div key={group.category} className="paper-card p-4 sm:p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <h3 className="font-display text-base font-semibold text-[var(--color-ink)] md:w-56">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-[var(--color-line)] bg-[var(--color-cream-soft)] px-3 py-1 text-xs text-[var(--color-ink-soft)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
