import { type HTMLAttributes } from "react";
import { cn } from "cn";

function Card({ className, ...props }: HTMLAttributes<HTMLElement>) {
  return (
    <section
      data-slot="card"
      className={cn(
        "w-full scroll-mt-24 rounded-2xl bg-surface p-6 sm:p-10 lg:p-16",
        className
      )}
      {...props}
    />
  );
}

function SectionHeading({
  index,
  title,
  className,
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <header className={cn("flex flex-col gap-1.5", className)}>
      <p className="text-[13px] font-medium text-ink-muted">
        {index}
      </p>
      <h2 className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-heading sm:text-5xl">
        {title}
      </h2>
    </header>
  );
}

export { Card, SectionHeading };
