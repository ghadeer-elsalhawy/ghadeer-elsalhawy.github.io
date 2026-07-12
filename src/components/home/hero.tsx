import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const socialLinks = [
  {
    href: siteConfig.social.github,
    src: "/images/github.svg",
    alt: "GitHub",
  },
  {
    href: siteConfig.social.linkedin,
    src: "/images/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: `mailto:${siteConfig.email}?subject=Coffee%20Chat%20Invitation`,
    src: "/images/mail.svg",
    alt: "Mail",
  },
  {
    href: siteConfig.social.medium,
    src: "/images/medium.svg",
    alt: "Medium",
  },
];

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-10 px-5 pb-16 pt-14 sm:pt-20 md:flex-row md:gap-14">
      <div className="flex-1 text-center md:text-left">
        <p className="font-utility text-xs uppercase tracking-[0.25em] text-[var(--color-gold)]">
          {siteConfig.title}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight sm:text-5xl">
          Hi, I&rsquo;m {siteConfig.shortName}!
        </h1>
        <p className="mt-5 text-lg text-[var(--color-ink-soft)]">
          {siteConfig.intro}
        </p>

        <div className="mt-7 flex items-center gap-4 sm:justify-start">
          {socialLinks.map((item) => (
            <Link
              key={item.alt}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition hover:opacity-80"
            >
              <div className="relative h-6 w-6 sm:h-7 sm:w-7">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative h-44 w-44 shrink-0 overflow-hidden rounded-full border-4 border-[var(--color-cream-soft)] shadow-xl sm:h-56 sm:w-56">
        <Image
          src="/images/profile.jpg"
          alt={siteConfig.name}
          fill
          sizes="224px"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
