import Link from "next/link";
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
  onClick?: () => void;
}
export function Tag({ tag, current, count, onClick }: TagProps) {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-[5px] text-white bg-teal-500 hover:bg-white hover:text-[#0E0E1E] font-space_grotesk",
      })}
      href={`/tags/${slug(tag)}`}
      onClick={onClick}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}