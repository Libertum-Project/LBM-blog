import { posts } from '#site/content';
import { MDXContent } from '@/components/ui/mdx-components';
import { notFound } from 'next/navigation';
import Share from '@/components/Share';
import Image from 'next/image';
import '@/styles/mdx.css';
import { Metadata } from 'next';
// import { siteConfig } from "@/config/site";
import { Tag } from '@/components/tag';
interface PostPageProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostPageProps['params']) {
  const slug = params?.slug?.join('/');
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
  ogSearchParams.set('title', post.title);

  return {
    title: post.title,
    description: post.description,
    // authors: { name: siteConfig.author },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
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
      card: 'summary_large_image',
      creator: 'libertum',
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    },
  };
}

export async function generateStaticParams(): Promise<
  PostPageProps['params'][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <article className="container py-6 prose max-w-3xl mx-auto md:max-w-[84rem] pt-32 pb-12 md:justify-between gap-20">
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]"
        style={{ height: '6rem', zIndex: '-1' }}
      />

      <div className="md:sticky md:top-0 bg-[#ffffff68] backdrop-blur-sm py-3 md:px-[3rem]">
        <h1 className="mb-4 text-[#0E0E1E] font-space_grotesk font-bold">
          {post.title}
        </h1>
        {post.description ? (
          <p className="text-xl mt-0 md:mt-10 text-muted-foreground text-[#0E0E1E]">
            {post.description}
          </p>
        ) : null}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
        <Share
          title={post.title}
          url={`https://blog.libertum.io/${post.slug}`}
        />
      </div>
      <hr className="my-4" />
      <div className="md:px-[3rem]">
        <Image
          src={post.cover}
          width={300}
          height={150}
          alt={post.title}
          className="w-3/4 mx-auto"
        />
        <MDXContent code={post.body} />
      </div>
    </article>
  );
}
