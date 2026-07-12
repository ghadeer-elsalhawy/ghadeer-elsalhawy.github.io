import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/testimonials/testimonial-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactSection } from "@/components/layout/contact-section";

export const metadata = { title: "Testimonials — Ghadeer Elsalhawy" };

export default function TestimonialsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16">
      <SectionHeading
        eyebrow="Testimonials"
        title="Happy Mentees & Colleagues"
        description="A few words from people I've worked with or mentored."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} t={t} />
        ))}
      </div>

      <ContactSection />
    </div>
  );
}
