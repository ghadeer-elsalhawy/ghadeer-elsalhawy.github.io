import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-6 text-center text-xs text-[var(--color-ink-soft)]">
      <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
    </footer>
  );
}
