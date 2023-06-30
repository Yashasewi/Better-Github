import { Github_card } from "@/components/Github_card";
import { CardsProps } from "@/lib/types";
import Link from "next/link";

export default function Cards({ repo }: CardsProps) {
  // console.log(repo);
  return (
    <div>
      <Link href={repo.html_url}>
        <Github_card repo={repo} />
      </Link>
    </div>
  );
}
