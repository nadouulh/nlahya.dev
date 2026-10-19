import { Fragment } from "react";

// Dictionary strings support **bold** and [label](https://url)
const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
const LINK = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function RichText({
  text,
  strongClassName,
  linkClassName,
}: {
  text: string;
  strongClassName?: string;
  linkClassName?: string;
}) {
  return (
    <>
      {text.split(TOKEN).map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className={strongClassName}>
              {part.slice(2, -2)}
            </strong>
          );
        }
        const link = part.match(LINK);
        if (link) {
          return (
            <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer" className={linkClassName}>
              {link[1]}
            </a>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
