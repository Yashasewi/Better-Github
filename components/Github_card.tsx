import { Circle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Colors } from "@/lib/Colors";
import { CardsProps } from "@/lib/types";
import { truncate } from "@/lib/utils";

export function Github_card({ repo }: CardsProps) {
  const daysAgo = (date: Date) => {
    const today = new Date();
    const created = new Date(date);
    const diffTime = Math.abs(today.getTime() - created.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatNumber = (num: number) => {
    return num > 999 ? (num / 1000).toFixed(1) + "k" : num;
  };

  const language = repo.language;

  return (
    <Card>
      <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
        <div className="space-y-1">
          <CardTitle>{repo.name}</CardTitle>
          <CardDescription>
            {repo.description ? truncate(repo.description) : "No description"}
          </CardDescription>
        </div>
        <Button variant="secondary" className="px-3">
          <Star className="w-4 h-4 mr-2" />
          Star
        </Button>
      </CardHeader>
      <CardContent>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Circle
              className="w-3 h-3 mr-1"
              style={{
                fill: Colors[language ?? "Default"],
                stroke: Colors[language ?? "Default"],
              }}
            />
            {repo.language || "Markdown"}
          </div>
          <div className="flex items-center">
            <Star className="w-3 h-3 mr-1" />
            {formatNumber(repo.stargazers_count)}
          </div>
          <div>
            <span className="text-muted-foreground">Updated</span>
            <span className="ml-1">{daysAgo(repo.updated_at)} days ago</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
