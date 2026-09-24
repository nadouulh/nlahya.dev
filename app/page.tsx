import { File, MailPen } from 'lucide-react';
import { WavyBackground } from "@/components/ui/wavy-background";

export default function Home() {
  return (
    <div className="relative isolate flex flex-col flex-1 items-center justify-center bg-background font-sans dark:bg-black">
      <WavyBackground />
      <main className="relative flex flex-1 w-full max-w-3xl flex-col items-center justify-between overflow-hidden py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-white">
            Nadia Lahya
          </h1>
          <h2 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-atomic-tangerine-500 dark:text-tangerine-dream-200">
            DevOps enginner apprentice
          </h2>
          <p className="max-w-md text-lg leading-8 text-blue-slate-600 dark:text-blue-slate-400">
            Blablablabla
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-lavender-veil-400 px-5 text-lavender-veil-50 transition-colors hover:bg-gold-300 dark:hover:bg-gold-200 hover:text-atomic-tangerine-500 md:w-[220px]"
          >
            <File className="size-6" />
            Curriculum vitae
          </a>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-gold-100 hover:text-atomic-tangerine-400 dark:border-white/[.145] dark:hover:bg-gold-50/[.90] md:w-[220px]"
          >
            <MailPen className="size-6" />
            Get in touch
          </a>
        </div>
      </main>
      <section id="experience" className="flex w-full max-w-3xl flex-col gap-4 px-16 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
      </section>
      <section id="projects" className="flex w-full max-w-3xl flex-col gap-4 px-16 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
      </section>
      <section id="contact" className="flex w-full max-w-3xl flex-col gap-4 px-16 py-24">
        <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      </section>
    </div>
  );
}
