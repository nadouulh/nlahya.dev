export function Footer() {
  return (
    <footer className="flex w-full flex-wrap justify-center gap-x-6 gap-y-2 px-6 pb-8 pt-2 text-[13px] text-ink">
      <span>© {new Date().getFullYear()} Nadia Lahya</span>
      <span>Made with Next.js and a lot of pink</span>
    </footer>
  );
}
