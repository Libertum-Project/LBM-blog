import { Hero } from "./hero/Hero";
import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { slug } from "github-slugger";
import { sortPosts } from "@/lib/utils";

const Home = () => {
  const sortedPosts= sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts; 

  console.log("POSTS" + displayPosts)
  return(
    <>
    <Hero />

    <div className="py-12 md:max-w-[75rem] md:mx-auto">
    {displayPosts?.length > 0 ? (
      <ul className="flex flex-col">
        {displayPosts.map((post) => {
          const { slug, date, title, description } = post;
          return (
            <li key={slug} className="max-w-[23rem]">
              <PostItem 
                slug={slug} 
                date={date} 
                title={title} 
                description={description} 
              />
            </li>
          );
        })}
      </ul>
      ) :
        <p>
          NADA QUE VER
        </p>     
      }
    </div>
    </>
  )
}; 

export default Home;