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
        className: "no-underline rounded-[5px] p-4 text-white bg-teal-500 hover:bg-[#00062F] font-space_grotesk hover:scale-105",
      })}
      href={`/tags/${slug(tag)}`}
      onClick={onClick}
    >
      {tag} {count ? `(${count})` : null}
    </Link>
  );
}