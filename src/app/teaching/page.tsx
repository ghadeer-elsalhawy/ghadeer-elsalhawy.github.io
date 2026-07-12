import { GraduationCap, Quote } from "lucide-react";
import { courses, studentFeedback } from "@/data/teaching";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactSection } from "@/components/layout/contact-section";

export const metadata = { title: "Teaching — Ghadeer Elsalhawy" };

export default function TeachingPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading eyebrow="Teaching" title="Some Courses I've Taught" />

      <div className="mt-12 space-y-6">
        {courses.map((course) => {
          const feedback =
            studentFeedback.find((item) => item.course === course.name) ??
            studentFeedback[0];

          return (
            <div
              key={course.name}
              className="paper-card flex flex-col gap-4 p-6 sm:flex-row"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-cream-soft)]">
                <GraduationCap size={20} className="text-[var(--color-gold)]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-display text-lg font-bold">
                    {course.name}
                  </h3>
                  <span className="font-utility text-xs text-[var(--color-ink-soft)]">
                    {course.period}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-ink-soft)]">
                  Instructor: {course.professor}
                </p>

                <blockquote className="mt-4 border-l-2 border-[var(--color-gold)] pl-4">
                  <Quote size={18} className="text-[var(--color-gold)]" />
                  <p className="mt-2 font-display italic text-[var(--color-ink)]">
                    &ldquo;{feedback.quote}&rdquo;
                  </p>
                  <footer className="mt-2 text-xs text-[var(--color-ink-soft)]">
                    — {feedback.studentName}
                  </footer>
                </blockquote>

                {course.screenshots?.length ? (
                  <div className="mt-4 flex flex-col gap-3">
                    {course.screenshots.map((image, index) => (
                      <img
                        key={`${course.name}-${index}`}
                        src={`/images/teaching/${image}`}
                        alt={`${course.name} screenshot ${index + 1}`}
                        className="h-auto w-full rounded-md border border-[var(--color-line)] bg-[var(--color-cream-soft)] object-contain"
                      />
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <ContactSection />
    </div>
  );
}
