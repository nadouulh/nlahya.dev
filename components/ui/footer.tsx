"use client";

export function Footer() {
  return (
<footer className="w-full border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-center px-6">
        <p className="text-base text-muted-foreground">
          © {new Date().getFullYear()} Professional Portfolio
        </p>
      </div>
    </footer>
  );
}
