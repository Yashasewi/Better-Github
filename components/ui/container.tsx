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

export default Container;
