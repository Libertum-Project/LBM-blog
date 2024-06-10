import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
//import { slug } from 'github-slugger';
import { sortPosts } from '@/lib/utils';

import Hero from './hero/Hero';
//import { Tag } from '@/components/tag';

const Home = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  //  const tags = getAllTags(posts);
  //  const sortedTags = sortTagsByCount(tags);

  return (
    <>
      <Hero />
      <div className="pb-8 md:max-w-[75rem] mx-auto md:mx-auto">
        <div className="grid grid-cols-12 gap-3 mt-8"></div>
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
          <p>NO posts</p>
        )}
        {/* {sortedTags?.map((tag) => (
          <Tag tag={tag} key={tag} count={tags[tag]} />
        ))} */}
      </div>
    </>
  );
};

export default Home;
