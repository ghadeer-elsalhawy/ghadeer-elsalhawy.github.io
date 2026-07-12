import { journey } from "@/data/journey";
import { Timeline } from "@/components/journey/timeline";
import { SectionHeading } from "@/components/ui/section-heading";
import { ContactSection } from "@/components/layout/contact-section";

export const metadata = { title: "Journey — Ghadeer Elsalhawy" };

export default function JourneyPage() {
  return (
    <div className="py-16">
      <SectionHeading eyebrow="Journey" title="How I got here" />
      <div className="mt-16">
        <Timeline entries={journey} />
      </div>
      <div className="mt-16">
        <ContactSection />
      </div>
    </div>
  );
}
