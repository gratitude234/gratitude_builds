import type { Metadata } from 'next';
import { PostList } from '@/components/PostList';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'All posts from gratitude-builds'
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="site-shell py-12 sm:py-16">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-dark">
          Blog
        </p>
        <h1 className="mt-5 font-heading text-5xl leading-tight text-ink">
          Notes from the build.
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-700">
          Honest posts about shipping products, learning in public, and figuring out
          the craft one day at a time.
        </p>
      </div>

      <div className="mt-12">
        <PostList posts={posts} showFilters />
      </div>
    </div>
  );
}
