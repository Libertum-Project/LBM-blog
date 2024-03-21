import { posts } from "#site/content";
import { MDXContent } from "@/components/ui/mdx-components";
import { notFound } from "next/navigation";
import Share from "@/components/Share";

import "@/styles/mdx.css";
import { Metadata } from "next";
// import { siteConfig } from "@/config/site";
import { Tag } from "@/components/tag";
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: post.slug,
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (    
    <article className="container py-6 prose max-w-3xl mx-auto md:max-w-[75rem] pt-32 pb-12 md:justify-between gap-20">
       <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]" style={{ height: '5rem', zIndex: '-1' }} /> 
          <h1 className="mb-4 text-[#0E0E1E] font-space_grotesk font-bold">{post.title}</h1>
      {post.description ? (
        <p className="text-xl mt-0 md:mt-10 text-muted-foreground text-[#0E0E1E]">{post.description}</p>
      ) : null}
      <div className="flex gap-2 mb-2">
        {post.tags?.map((tag) => (
          <Tag tag={tag} key={tag} />
        ))}
      </div>
        <Share description={"this is a basic share page"}/>
      <hr className="my-4" />
      <MDXContent code={post.body} />
    </article>
  );
}