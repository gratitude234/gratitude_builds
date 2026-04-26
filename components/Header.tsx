import Link from 'next/link';

const navItems = [
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' }
];

export function Header() {
  return (
    <header className="border-b border-emerald-900/10 bg-paper/80 backdrop-blur">
      <div className="site-shell flex h-16 items-center justify-between">
        <Link
          href="/"
          className="focus-ring font-heading text-xl font-bold text-ink hover:text-brand-dark"
        >
          gratitude-builds
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold text-gray-700">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring hover:text-brand-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
