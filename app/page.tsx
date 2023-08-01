"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
    const usernameRef = useRef<HTMLInputElement>(null);
    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(false);
    function getUsername() {
        setUser(usernameRef.current?.value || "");
    }

    return (
        <div
            className={cn(
                " min-h-screen flex flex-col items-center justify-center gap-y-16"
            )}
        >
            <div className="absolute top-2 right-9">
                <ModeToggle />
            </div>
            <h1 className="text-4xl font-bold text-center">
                Enter your Github username
            </h1>

            <div className="flex items-center w-full max-w-sm space-x-2">
                <Input
                    type="text"
                    placeholder="Username"
                    ref={usernameRef}
                    onChange={getUsername}
                />
                <Link
                    href={{
                        pathname: `/${user}`,
                    }}
                >
                    <Button
                        type="submit"
                        onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                setLoading(false);
                            }, 1000);
                        }}
                    >
                        {loading ? (
                            <Loader2 className="text-white  animate-spin" />
                        ) : (
                            "Search"
                        )}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
