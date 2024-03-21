import { Calendar } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn, formatDate } from "@/lib/utils";
import { Tag } from "./tag";
import Image from "next/image";

interface PostItemProps {
  slug: string;
  title: string;
  description?: string;
  date: string;
  tags?: Array<string>;
}

export function PostItem({
  slug,
  title,
  description,
  date,
  tags,
}: PostItemProps) {
  return (
    <article className="bg-white h-fit rounded-[5px] shadow border border-black border-opacity-10">
      <div className="p-0 relative">
        <Link href="#">
          <Image
            className="w-full max-h-[255px]"
            src="/blog-images/howtobuyView.png"
            alt="Sunset in the mountains"
            width={310}
            height={250}
          />
        </Link>

        <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
          Photos
        </div>
      </div>

      <div className="py-6 px-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <h2 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              <Link href={"/" + slug}>{title}</Link>
            </h2>
          </div>
          <div className="flex gap-2">
            {tags?.map((tag) => (
              <Tag tag={tag} key={tag} />
            ))}
          </div>
        </div>
        <div className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">{description}</div>
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
          href={slug}
          className="flex items-center justify-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500 hover:text-white bg-[#00062F] text-white"
        >
          Read more →
        </Link>
      </div>
    </article>
  );
}