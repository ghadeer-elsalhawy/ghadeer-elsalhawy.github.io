"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { JourneyEntry } from "@/data/journey";

export function Timeline({ entries }: { entries: JourneyEntry[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.75", "end 0.35"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });

  return (
    <div ref={containerRef} className="relative mx-auto max-w-3xl px-5">
      {/* Track */}
      <div className="absolute left-[15px] top-0 h-full w-[2px] bg-[var(--color-line)] sm:left-[19px]" />
      {/* Fill — the "pen stroke" that draws itself as you scroll */}
      <motion.div
        style={{ scaleY: pathLength }}
        className="absolute left-[15px] top-0 h-full w-[2px] origin-top bg-[var(--color-gold)] sm:left-[19px]"
      />

      <ol className="space-y-12">
        {entries.map((entry, i) => (
          <TimelineItem key={i} entry={entry} index={i} />
        ))}
      </ol>
    </div>
  );
}

function TimelineItem({
  entry,
  index,
}: {
  entry: JourneyEntry;
  index: number;
}) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
        delay: Math.min(index * 0.06, 0.4),
      }}
      className="relative pl-11 sm:pl-14"
    >
      <span className="absolute left-[9px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[var(--color-gold)] bg-[var(--color-cream)] sm:left-[13px]" />
      <div>
        <p className="font-utility text-xs uppercase tracking-[0.15em] text-[var(--color-gold)]">
          {entry.date}
        </p>
        <h3 className="mt-1 font-display text-lg font-semibold">
          {entry.title}
        </h3>
        <p className="text-sm text-[var(--color-ink-soft)]">
          {entry.organization}
        </p>

        <p className="mt-3 text-sm text-justify">{entry.description}</p>

        {entry.image && (
          <div className="relative mt-4 h-[22rem] w-full overflow-hidden rounded-md border border-[var(--color-line)] bg-[var(--color-cream-soft)] sm:h-[26rem]">
            <Image
              src={`/images/journey/${entry.image}`}
              alt={entry.title}
              fill
              sizes="640px"
              className="object-cover"
            />
          </div>
        )}
      </div>
    </motion.li>
  );
}
