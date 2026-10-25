import type { ButtonHTMLAttributes } from "react";
import { cn } from "cn";

// Ghost button used by the header toggles (theme, language, menu)
const BASE =
  "inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50";

const SIZES = {
  default: "h-8 gap-1.5 px-2.5",
  icon: "size-8",
};

function Button({
  className,
  size = "default",
  type = "button",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { size?: keyof typeof SIZES }) {
  return <button type={type} data-slot="button" className={cn(BASE, SIZES[size], className)} {...props} />;
}

export { Button };
