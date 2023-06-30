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
  // console.log(repoData[1]);
  // console.log(repoData[1].name);
  const username = params.username;

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

      {/* <Container className="mb-0 ml-8 mr-8 card_container "> */}

      {/* </Container> */}

      {/* show the profile graphs */}
      {/* <Container className="mt-4 ml-8 card_container">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&card_width=480`}
          alt="Github chart"
          height={195}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&include_all_commits&line_height=20&card_width=480`}
          alt="Github chart"
        />
        <img
          style={{
            maxWidth: "480px",
            height: "165px",
          }}
          src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&ring=orange&fire=orange&sideNums=black&currStreakNum=black&type=png`}
          alt="Github chart"
        />
      </Container> */}

      <div className="text-xl font-medium ">
        <span className="ml-8 mr-4 text-slate-700 ">Graphs</span>
      </div>

      <Container className="m-8 mt-4 card_container">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&card_width=480`}
          alt="Github chart"
          height={195}
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&include_all_commits&line_height=20&card_width=480`}
          alt="Github chart"
        />
        <img
          style={{
            maxWidth: "480px",
            height: "165px",
          }}
          src={`https://streak-stats.demolab.com?user=${username}&theme=transparent&ring=orange&fire=orange&sideNums=black&currStreakNum=black&type=png`}
          alt="Github chart"
        />
      </Container>
      <div className="text-lg font-medium ">
        <span className="ml-8 mr-4 text-slate-700 ">Repositories</span>
        <span className="text-base text-slate-600 mt-[2px]">
          {data.public_repos}
        </span>
      </div>
      <Container className="m-8 mt-4 card_container">
        {repoData.map((repo: repo) => (
          <Cards key={repo.id} repo={repo} />
        ))}
      </Container>
    </div>
  );
}
