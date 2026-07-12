export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 font-utility text-xs uppercase tracking-[0.2em] text-[var(--color-gold)]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-3 text-[var(--color-ink-soft)]">{description}</p>
      )}
    </div>
  );
}
