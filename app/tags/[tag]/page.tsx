import { slug } from 'github-slugger';
import { Metadata } from 'next';
import Link from 'next/link';

import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
import { Tag } from '@/components/tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllTags, getPostsByTagSlug, sortTagsByCount } from '@/lib/utils';

interface TagPageProps {
  params: {
    tag: string;
  };
}

export async function generateMetadata({
  params
}: TagPageProps): Promise<Metadata> {
  const { tag } = params;
  return {
    title: tag,
    description: `Posts on the topic of ${tag}`
  };
}

export const generateStaticParams = () => {
  const tags = getAllTags(posts);
  const paths = Object.keys(tags).map((tag) => ({ tag: slug(tag) }));
  return paths;
};

export default function TagPage({ params }: TagPageProps) {
  const { tag } = params;
  const title = tag.split('-').join(' ');

  const displayPosts = getPostsByTagSlug(posts, tag);
  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-[75rem] pt-24 pb-6 md:py-24">
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]"
        style={{ height: '6rem', zIndex: '-1' }}
      />
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-bold font-space_grotesk text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/tags"
          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 m-[.8px] border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 no-underline p-4 text-white bg-teal-500 border-teal-500 hover:text-teal-500 font-space_grotesk hover:scale-105 uppercase max-h-6"
        >
          <p className="font-space_grotesk text-xs font-semibold hover:scale-105 uppercase">
            All
          </p>
        </Link>
        {sortedTags.map((tag) => (
          <Tag tag={tag} count={tags[tag]} key={tag} />
        ))}
      </div>
      <hr className="my-4" />

      <div className="grid grid-cols-1 md:col-3 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
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
              <p>There is nothing to show</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
