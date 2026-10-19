export function Footer({ madeWith }: { madeWith: string }) {
  return (
    <footer className="flex w-full flex-wrap justify-center gap-x-6 gap-y-2 px-6 pb-8 pt-2 text-[13px] text-ink">
      <span>© {new Date().getFullYear()} Nadia Lahya</span>
      <span>{madeWith}</span>
    </footer>
  );
}
