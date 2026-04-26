import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'About gratitude-builds'
};

const links = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'Twitter/X', href: 'https://x.com/' },
  { label: 'LinkedIn', href: 'https://linkedin.com/' }
];

export default function AboutPage() {
  return (
    <div className="site-shell py-12 sm:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark">
          About
        </p>
        <h1 className="mt-5 font-heading text-5xl leading-tight text-ink">
          Self-taught developer building practical products.
        </h1>
        <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
          <p>
            I am the developer behind gratitude-builds, a public notebook for the work,
            lessons, bugs, and small wins that come from learning by shipping.
          </p>
          <p>
            I build web products that solve real problems, with a special interest in
            tools for students, creators, and small teams in Nigeria.
          </p>
          <p>
            My current stack is Next.js, TypeScript, Tailwind CSS, Supabase, and the
            habits that make products easier to maintain after the first exciting week.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="focus-ring rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-brand-dark hover:border-brand hover:text-brand"
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
