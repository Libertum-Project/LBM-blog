import { Calendar } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn, formatDate } from '@/lib/utils';
import { Tag } from './tag';
import Image from 'next/image';

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
  cover?: any;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
  cover,
}: PostItemProps) {
  return (
    <article className="bg-white h-full rounded-[5px] shadow border border-black border-opacity-10 flex flex-col items-stretch justify-between space-y-2">
      <div className="p-0 relative">
        <Link href="#">
          {cover && (
            <Image
              src={cover}
              alt={title}
              placeholder="blur"
              className="h-[15rem]"
            />
          )}
        </Link>
      </div>

      <div className="py-6 px-4 space-y-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              <Link href={'/' + slug}>{title}</Link>
            </h2>
            <div className="text-white text-sm  hover:text-blue-900 transition duration-500 ease-in-out gap-2">
          {tags?.map((tag) => (
            <Tag tag={tag} key={tag} />
          ))}
        </div>
          </div>
        </div>
        <div className="block font-sans text-base font-light leading-relaxed text-inherit antialiased overflow-hidden whitespace-nowrap overflow-ellipsis">
          {description}
        </div>
        <div className="flex justify-between items-center">
          <dl>
            <dt className="sr-only">Published On</dt>
            <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <time dateTime={date}>{formatDate(date)}</time>
            </dd>
          </dl>
        </div>
        <Link
          href={"/" + slug}
          className="flex items-center justify-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-semibold font-space_grotesk py-3 hover:bg-teal-500 hover:text-white bg-[#00062F] text-white space-x-4"
        >
          <p>Read more</p>
          <p>→</p>
        </Link>
      </div>
    </article>
  );
}
