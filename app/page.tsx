import { ArrowDownToLine, MailPen } from 'lucide-react';
import { WavyBackground } from "@/components/ui/wavy-background";
import { SlideDots } from "@/components/ui/slide-dots";

export default function Home() {
  return (
    <div className="relative isolate flex flex-col overflow-hidden bg-background font-sans dark:bg-black">
      <WavyBackground />
      <SlideDots />
      <div className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <main id="home" className="relative flex h-dvh w-full snap-start items-center justify-center px-6 py-24">
          {/* <div className="flex w-full max-w-7xl flex-col items-center gap-10 rounded-xl bg-background/80 px-10 py-16 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:px-16"> */}
          <div className="flex w-full max-w-7xl flex-col items-center gap-10 rounded-xl bg-lavender-veil-50 dark:bg-background px-10 py-16 sm:px-16">
            <div className="flex w-full max-w-[37rem] flex-col items-center gap-8 text-center sm:items-start sm:text-left">
              <h1 className="max-w-md text-4xl font-semibold leading-none tracking-tight text-lavender-veil-400 sm:text-5xl">
                Nadia Lahya
              </h1>
              <h2 className="max-w-md text-4xl font-semibold leading-none tracking-tight text-atomic-tangerine-500 dark:text-tangerine-dream-300 sm:text-5xl">
                DevOps enginner apprentice
              </h2>
              <p className="max-w-xl text-xl leading-9 text-amethyst-700 dark:text-lavender-veil-50">
                Blablablabla
              </p>
            </div>
            <div className="flex w-full max-w-[37rem] flex-col gap-5 text-lg font-medium sm:flex-row sm:justify-start">
              <a
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-lavender-veil-400 px-7 text-lavender-veil-50 transition-colors hover:bg-gold-300 hover:text-atomic-tangerine-500 md:w-[280px]"
              >
                <ArrowDownToLine className="size-7" />
                Curriculum vitae
              </a>
              <a
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl border border-solid border-black/[.08] px-7 transition-colors hover:border-transparent hover:bg-gold-100 hover:text-atomic-tangerine-400 dark:border-white/[.145] dark:hover:bg-gold-100 md:w-[280px]"
              >
                <MailPen className="size-7" />
                Get in touch
              </a>
            </div>
          </div>
          {/* </div> */}
        </main>
        <section id="experience" className="relative flex h-dvh w-full snap-start flex-col items-center justify-center gap-6 px-6 text-center sm:px-20">
          <h2 className="text-4xl font-semibold tracking-tight">Experience</h2>
        </section>
        <section id="projects" className="relative flex h-dvh w-full snap-start flex-col items-center justify-center gap-6 px-6 text-center sm:px-20">
          <h2 className="text-4xl font-semibold tracking-tight">Projects</h2>
        </section>
        <section id="contact" className="relative flex h-dvh w-full snap-start flex-col items-center justify-center gap-6 px-6 text-center sm:px-20">
          <h2 className="text-4xl font-semibold tracking-tight">Contact</h2>
        </section>
      </div>
    </div>
  );
}
