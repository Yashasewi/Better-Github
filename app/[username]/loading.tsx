import { Skeleton } from "@/components/ui/skeleton";
import Container from "@/components/ui/container";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Loading() {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center mt-20 mb-12 gap-y-2">
          <Skeleton className="w-48 h-48 rounded-full" />
          <div>
            <div className="space-y-1">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[250px]" />
            </div>
            <div className="flex items-center justify-center max-w-[500px] mt-2">
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
          <div className="flex space-x-4 ">
            <div className="flex items-center justify-center gap-2 ">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[30px]" />
            </div>
            <div className="flex items-center gap-2 ">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className=" mt-[2px] h-4 w-[30px]" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <Skeleton className="ml-8 mr-4 h-5 w-[200px]" />
        <Container className="m-8 mt-4 card_container">
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
              <div className="space-y-1">
                <Skeleton className="h-4 w-[250px]" />
                <CardTitle>
                  <Skeleton className="h-3 w-[200px]" />
                </CardTitle>
                <CardDescription>
                  <Skeleton className="h-4 w-[250px]" />
                </CardDescription>
              </div>
              <Skeleton className="h-[37px] w-[80px]" />
            </CardHeader>
            <CardContent>
              <div className="flex space-x-4 ">
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div className="flex items-center space-x-1">
                  <Skeleton className="w-4 h-4 rounded-full" />
                  <Skeleton className="h-4 w-[30px]" />
                </div>
                <div>
                  <span className="">
                    <Skeleton className="h-4 w-[210px]" />
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Container>
      </section>
    </div>
  );
}
