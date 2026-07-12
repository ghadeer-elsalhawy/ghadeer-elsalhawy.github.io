import Image from "next/image";
import { ExternalLink, Quote } from "lucide-react";
import { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="paper-card flex h-full flex-col p-6">
      <Quote size={20} className="text-[var(--color-gold)]" />
      <p className="mt-3 flex-1 font-display italic leading-relaxed">
        &ldquo;{t.quote}&rdquo;
      </p>

      <div className="mt-5 flex items-center gap-3">
        {t.photo && (
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
            <Image
              src={t.photo}
              alt={t.name}
              fill
              sizes="44px"
              className="object-cover"
            />
          </div>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium">{t.name}</p>
          <p className="truncate text-xs text-[var(--color-ink-soft)]">
            {t.role} · {t.relationship}
          </p>
        </div>
        {t.linkedinUrl && (
          <a
            href={t.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="ml-auto shrink-0 text-[var(--color-ink-soft)] transition hover:text-[var(--color-gold)]"
            aria-label={`${t.name} on LinkedIn`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
  );
}
