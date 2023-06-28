import Cards from "@/components/Cards";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        " grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ",
        className
      )}
      {...props}
    />
  );
}

async function getUserData(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data;
}

export default async function UserNamePage({
  params,
}: {
  params: { username: string };
}) {
  // catch the error here
  const data = await getUserData(params.username);

  // const data = await getUserData(params.username);
  console.log(data);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-20 mb-12 gap-y-2">
        <Avatar className="w-48 h-48">
          <AvatarImage src={`${data.avatar_url}`} />
          <AvatarFallback>
            <Skeleton className="w-48 h-48 rounded-full" />
          </AvatarFallback>
        </Avatar>
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
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Container>
    </div>
  );
}
