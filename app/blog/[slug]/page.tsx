import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Tag } from '@/components/Tag';
import { formatDate } from '@/lib/format';
import { getAllPosts, getPostBySlug } from '@/lib/posts';

type PostPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug
  }));
}

export function generateMetadata({ params }: PostPageProps): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post not found'
    };
  }

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="site-shell py-10 sm:py-14">
      <div className="mx-auto max-w-[680px]">
        <Link
          href="/blog"
          className="focus-ring inline-flex text-sm font-semibold text-brand-dark hover:text-brand"
        >
          &lt;- Back to blog
        </Link>

        <header className="mt-10">
          <h1 className="font-heading text-4xl leading-tight text-ink sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">/</span>
            <span>{post.readingTime}</span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </header>

        <div className="mdx-content mt-10">
          <MDXRemote source={post.content} />
        </div>
      </div>
    </article>
  );
}
