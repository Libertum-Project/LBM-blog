import { Hero } from "./hero/Hero";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { slug } from "github-slugger";
import { sortPosts } from "@/lib/utils";

const Home = () => {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  console.log("POSTS", displayPosts);

  return (
    <>
      <Hero />
      <div className="py-8 md:max-w-[75rem] mx-auto md:mx-auto">
        {displayPosts?.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-3">
            {displayPosts.map((post) => {
              const { slug, date, title, description, cover, tags } = post;
              console.log("cover", cover);

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
    </>
  );
};

export default Home;
