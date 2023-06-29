import { Github_card } from "@/components/Github_card";
import { CardsProps } from "@/lib/types";

export default function Cards({ repo }: CardsProps) {
  console.log(repo);
  return (
    <div>
      <Github_card repo={repo} />
    </div>
  );
}
