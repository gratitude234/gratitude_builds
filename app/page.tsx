import Link from 'next/link';
import { PostList } from '@/components/PostList';
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const latestPosts = getAllPosts().slice(0, 5);

  return (
    <div className="site-shell py-12 sm:py-16">
      <section className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark">
          gratitude-builds
        </p>
        <h1 className="mt-5 font-heading text-5xl leading-[1.05] text-ink sm:text-6xl">
          Building in public. One day at a time.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700">
          Self-taught developer. Building real products in Nigeria.
        </p>
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-brand-dark">Latest notes</p>
            <h2 className="mt-2 font-heading text-3xl text-ink">Recent posts</h2>
          </div>
          <Link
            href="/blog"
            className="focus-ring hidden text-sm font-semibold text-brand-dark hover:text-brand sm:inline-flex"
          >
            View all posts -&gt;
          </Link>
        </div>
        <div className="mt-8">
          <PostList posts={latestPosts} />
        </div>
        <Link
          href="/blog"
          className="focus-ring mt-8 inline-flex text-sm font-semibold text-brand-dark hover:text-brand sm:hidden"
        >
          View all posts -&gt;
        </Link>
      </section>
    </div>
  );
}
