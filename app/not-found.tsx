import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="site-shell py-20">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="font-heading text-5xl text-ink">Page not found</h1>
        <p className="mt-4 text-gray-700">
          This note is not in the notebook yet.
        </p>
        <Link
          href="/blog"
          className="focus-ring mt-8 inline-flex text-sm font-semibold text-brand-dark hover:text-brand"
        >
          Go to blog -&gt;
        </Link>
      </div>
    </div>
  );
}
