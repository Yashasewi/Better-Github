"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  let username = "";
  const usernameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  function getUsername() {
    username = usernameRef.current?.value || "";
    router.push(`/${username}`);
    console.log(username);
  }

  return (
    <div
      className={cn(
        " min-h-screen flex flex-col items-center justify-center gap-y-16"
      )}
    >
      <h1 className="text-4xl font-bold text-center">
        Enter your Github username
      </h1>

      <div className="flex items-center w-full max-w-sm space-x-2">
        <Input type="text" placeholder="Username" ref={usernameRef} />
        <Button type="submit" onClick={getUsername}>
          Search
        </Button>
      </div>
    </div>
  );
}
