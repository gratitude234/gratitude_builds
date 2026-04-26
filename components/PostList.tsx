'use client';

import { useMemo, useState } from 'react';
import type { PostMeta } from '@/lib/posts';
import { PostCard } from './PostCard';
import { Tag } from './Tag';

type PostListProps = {
  posts: PostMeta[];
  showFilters?: boolean;
};

export function PostList({ posts, showFilters = false }: PostListProps) {
  const [activeTag, setActiveTag] = useState('all');

  const tags = useMemo(() => {
    return Array.from(new Set(posts.flatMap((post) => post.tags))).sort();
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeTag === 'all') {
      return posts;
    }

    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag, posts]);

  return (
    <div>
      {showFilters ? (
        <div className="mb-8 flex flex-wrap gap-2">
          <Tag active={activeTag === 'all'} onClick={() => setActiveTag('all')}>
            all
          </Tag>
          {tags.map((tag) => (
            <Tag
              key={tag}
              active={activeTag === tag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </Tag>
          ))}
        </div>
      ) : null}

      {filteredPosts.length > 0 ? (
        <div>
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="rounded-lg border border-emerald-900/10 bg-white p-5 text-sm text-muted">
          No posts found for this tag.
        </p>
      )}
    </div>
  );
}
