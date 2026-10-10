import { type HTMLAttributes } from "react";
import { cn } from "cn";

function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex w-full max-w-7xl flex-col items-center gap-10 rounded-xl bg-lavender-veil-50 px-10 py-16 sm:px-16 dark:bg-background",
        className
      )}
      {...props}
    />
  );
}

export { Card };