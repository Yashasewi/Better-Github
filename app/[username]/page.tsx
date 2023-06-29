import Cards from "@/components/Cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import Container from "@/components/ui/container";
import Link from "next/link";
import { UserData, params, repo } from "@/lib/types";

async function getUserData(username: string): Promise<UserData> {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

async function getRepoData(username: string): Promise<repo[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function UserNamePage({ params }: params) {
  const data = await getUserData(params.username);

  // console.log(data);

  const repoData = await getRepoData(params.username);
  // console.log(repoData);
  console.log(repoData[1]);
  console.log(repoData[1].name);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 mb-12 gap-y-2">
        <Link href={`${data.html_url}`}>
          <Avatar className="w-48 h-48">
            <AvatarImage src={`${data.avatar_url}`} />
            <AvatarFallback>
              <Skeleton className="w-48 h-48 rounded-full" />
            </AvatarFallback>
          </Avatar>
        </Link>
        <div>
          <h1 className="text-2xl font-bold">{`@${params.username}`}</h1>
        </div>
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2 text-lg font-medium">
            <span className=" text-slate-500"> Followers</span>
            <span className="text-base mt-[2px]">{data.followers}</span>
          </div>

          <div className="flex items-center gap-2 text-lg font-medium">
            <span className="text-slate-500">Following</span>
            <span className="text-base mt-[2px]">{data.following}</span>
          </div>
        </div>
      </div>

      <Container className="m-8 card_container">
        {repoData.map((repo: repo) => (
          <Cards key={repo.id} repo={repo} />
        ))}
      </Container>
    </div>
  );
}
