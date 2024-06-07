import { Metadata } from 'next';

import { getAllTags, sortTagsByCount } from '@/lib/utils';
import { posts } from '#site/content';
import { Tag } from '@/components/tag';
import { sortPosts } from '@/lib/utils';
import { PostItem } from '@/components/post-item';

export const metadata: Metadata = {
  title: 'Tags',
  description: "Topic I've written about"
};

export default async function TagsPage() {
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <div className="container md:max-[75rem] mx-auto pt-36">
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]"
        style={{ height: '6rem', zIndex: '-1' }}
      />
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold font-space_grotesk text-4xl lg:text-5xl capitalize">
            All posts
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {sortedTags.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
      <hr className="my-4" />

      <div>
        {displayPosts.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-3">
            {displayPosts.map((post) => {
              const { slug, date, title, description, cover, tags } = post;
              console.log('cover', cover);

              return (
                <li key={slug} className="p-3">
                  <PostItem
                    slug={slug}
                    date={date}
                    title={title}
                    description={description}
                    cover={cover}
                    tags={tags}
                  />
                </li>
              );
            })}
          </ul>
        ) : (
          <p>NADA QUE VER</p>
        )}
      </div>
    </div>
  );
}
