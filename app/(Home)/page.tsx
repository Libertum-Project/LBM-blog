import { posts } from '#site/content';
import { PostItem } from '@/components/post-item';
//import { slug } from 'github-slugger';
import { sortPosts } from '@/lib/utils';
import { PaginationComponent } from '@/components/ui/paginationComponent';

import Hero from './hero/Hero';
//import { Tag } from '@/components/tag';

const postsPerPage = 6;
type BlogPostsProps = {
  searchParams: {
    page?: string;
  };
};

const Home = ({ searchParams }: BlogPostsProps) => {
  const currentPage = Number(searchParams.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts.slice(
    postsPerPage * (currentPage - 1),
    postsPerPage * currentPage
  );
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

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
        <PaginationComponent
          totalPages={totalPages}
          className="font-space_grotesk"
        />
      </div>
    </>
  );
};
export default Home;
