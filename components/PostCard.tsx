import Link from 'next/link';
import { formatDate } from '@/lib/format';
import type { PostMeta } from '@/lib/posts';
import { Tag } from './Tag';

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="border-b border-emerald-900/10 py-7 first:pt-0 last:border-b-0">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden="true">/</span>
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-3 font-heading text-2xl leading-tight text-ink">
        <Link
          href={`/blog/${post.slug}`}
          className="focus-ring hover:text-brand-dark"
        >
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 max-w-3xl leading-7 text-gray-700">{post.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
