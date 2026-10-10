import { ArrowDownToLine, ArrowUpRight, Lock, MailPen, MapPin } from 'lucide-react';
import { WavyBackground } from "@/components/ui/wavy-background";
import { SlideDots } from "@/components/ui/slide-dots";
import { Footer } from "@/components/ui/footer";
import { Card } from "@/components/ui/card";

const CONTACT_LINKS = [
  {
    href: "https://www.linkedin.com/in/nadia-lahya-0b357a330/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/nadouulh",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://orcid.org/0009-0004-1384-2095",
    label: "ORCiD",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="size-8" aria-hidden="true">
        <path d="M336.62 194.538c-7.13-3.328-13.866-5.56-20.253-6.614c-6.365-1.095-16.574-1.612-30.71-1.612h-36.704v152.747h37.634c14.673 0 26.081-1.013 34.224-3.017s14.921-4.526 20.356-7.626a69.5 69.5 0 0 0 14.942-11.388c14.488-14.714 21.742-33.273 21.742-55.717c0-22.052-7.44-40.052-22.341-53.982c-5.498-5.166-11.822-9.444-18.89-12.793zM256 8C119.022 8 8 119.042 8 256s111.022 248 248 248s248-111.042 248-248S392.978 8 256 8m-82.336 357.513h-29.389V160.148h29.389zM158.95 138.696c-11.14 0-20.213-9.01-20.213-20.212c0-11.118 9.052-20.191 20.213-20.191c11.18 0 20.232 9.052 20.232 20.191a20.194 20.194 0 0 1-20.232 20.212m241.386 163.597c-5.29 12.545-12.834 23.581-22.65 33.088c-9.982 9.837-21.597 17.194-34.844 22.196c-7.75 3.017-14.839 5.063-21.307 6.117c-6.49 1.013-18.828 1.509-37.076 1.509h-64.956V160.148h69.233c27.962 0 50.034 4.154 66.32 12.545c16.265 8.37 29.181 20.728 38.792 36.972c9.61 16.265 14.425 34.018 14.425 53.196c.023 13.765-2.666 26.908-7.936 39.432z" />
      </svg>
    ),
  },
];

const EXPERIENCE = [
  {
    role: "DevOps Engineering Apprentice",
    org: "RAILwAI",
    location: "Montpellier, France",
    date: "Oct 2025 — Now",
    description: "Rail-tech start-up using AI for railway maintenance",
    bullets: [
      <>Build and maintain <strong>CI pipelines</strong> in Bitbucket Pipelines and automate recurring tasks</>,
      <>Manage a hybrid infrastructure (<strong>GCP</strong> and on-premise) as code with <strong>Terraform/OpenTofu</strong></>,
      <>Write technical documentation and review teammates&apos; code</>,
    ],
  },
  {
    role: "AI Research Intern — Load estimation for ergonomic assessment",
    org: "IMT Mines Alès (CERIS) & EuroMov Digital Health in Motion",
    location: "Alès, France",
    date: "Mar 2025 — Jun 2025",
    description: "Estimate the load a worker carries to feed REBA ergonomic scoring",
    bullets: [
      <>Estimated the load a worker carries (empty, light, heavy) from <strong>RGB video</strong> only, for REBA ergonomic scoring</>,
      <>Helped record <strong>ViLoad</strong>, a new multi-view video + IMU dataset (8 participants, 144 videos, Xsens sensors)</>,
      <>Fine-tuned two models: <strong>MobileNetV2</strong> and <strong>R3D-18</strong>, about 50% accuracy on 3 classes</>,
      <>
        Results published in an{" "}
        <a href="https://doi.org/10.1145/3802842.3802900" target="_blank" rel="noopener noreferrer" className="font-medium text-lavender-veil-500 underline underline-offset-2 hover:text-atomic-tangerine-500 dark:text-lavender-veil-300">
          ACM paper
        </a>
        , presented as a poster at the <strong>International Conference on Movement and Computing (MOCO&apos;26)</strong>, with an open{" "}
        <a href="https://www.kaggle.com/datasets/nadialahya/dataset-weight-estimation" target="_blank" rel="noopener noreferrer" className="font-medium text-lavender-veil-500 underline underline-offset-2 hover:text-atomic-tangerine-500 dark:text-lavender-veil-300">
          dataset
        </a>{" "}
        and{" "}
        <a href="https://github.com/nadouulh/weight-estimation" target="_blank" rel="noopener noreferrer" className="font-medium text-lavender-veil-500 underline underline-offset-2 hover:text-atomic-tangerine-500 dark:text-lavender-veil-300">
          code
        </a>
      </>,
    ],
  },
];

const PROJECTS = [
  {
    title: "Omni",
    tag: "projet tutoré",
    date: "May 2026 — Now",
    description:
      "Self-hostable collaboration suite (Visio, Vault, Admin, Drive), deployed on Talos Kubernetes over a Proxmox cluster.",
    stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "OpenTofu", "Kubernetes", "Proxmox"],
  },
  {
    title: "Barenetes",
    tag: "open source",
    href: "https://github.com/do-2k25-28/Barenetes",
    date: "Jun 2026 — Sept 2026",
    description: "Minimal reimplementation of the Kubernetes control plane in Rust.",
    stack: ["Rust", "gRPC", "etcd", "mTLS"],
  },
  {
    title: "DoRémix",
    tag: "school project",
    href: "https://github.com/nadouulh/doremix",
    date: "Dec 2025 — Apr 2026",
    description:
      "Web app and CLI to create and share community playlists built from YouTube links.",
    stack: ["Python", "FastAPI", "Typer", "PostgreSQL", "Docker"],
  },
];

export default function Home() {
  return (
    <div className="relative isolate flex flex-col overflow-hidden bg-background font-sans dark:bg-black">
      <WavyBackground />
      <SlideDots />
      <div className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth">
        <main id="home" className="relative flex h-dvh w-full snap-start items-center justify-center px-6 py-24">
          {/* <Card className="bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"> */}
          <Card>
            <div className="flex w-full max-w-[37rem] flex-col items-center gap-8 text-center sm:items-start sm:text-left">
              <h1 className="max-w-md text-4xl font-semibold leading-none tracking-tight text-lavender-veil-400 sm:text-5xl">
                Nadia Lahya
              </h1>
              <h2 className="max-w-md text-4xl font-semibold leading-none tracking-tight text-atomic-tangerine-500 dark:text-tangerine-dream-300 sm:text-5xl">
                DevOps engineer apprentice
              </h2>
              <p className="max-w-xl text-xl leading-9 text-amethyst-700 dark:text-lavender-veil-50">
                Fourth-year DevOps engineering student at Polytech Montpellier, on a work-study
                contract at RAILwAI.
              </p>
              <p className="max-w-xl text-xl leading-9 text-amethyst-700 dark:text-lavender-veil-50">
                Open to an internship in{" "}
                <strong className="text-atomic-tangerine-500 dark:text-tangerine-dream-300">
                  DevOps, Cloud or AI
                </strong>{" "}
                from June to September 2027 (min. 9 weeks).
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
          </Card>
          {/* </Card> */}
        </main>
        <section id="experience" className="relative flex h-dvh w-full snap-start flex-col items-center justify-center overflow-y-auto px-6 py-16 text-center sm:px-20">
          <Card className="gap-12">
            <h2 className="text-5xl font-semibold tracking-tight text-lavender-veil-400 dark:text-lavender-veil-300">
              Experience
            </h2>
            <div className="relative w-full max-w-4xl text-left">
              <div className="absolute bottom-2 left-[13px] top-2 w-px bg-lavender-veil-300 dark:bg-lavender-veil-500/40" />
              {EXPERIENCE.map((item) => (
                <div key={item.role} className="relative mb-10 pl-12 last:mb-0">
                  <span className="absolute left-0 top-1.5 flex size-7 items-center justify-center rounded-full border-2 border-lavender-veil-400 bg-background">
                    <span className="size-2.5 rounded-full bg-atomic-tangerine-500" />
                  </span>
                  <article className="rounded-xl border border-solid border-black/[.08] bg-background/90 p-6 backdrop-blur transition-colors hover:border-lavender-veil-300 dark:border-white/[.145] dark:bg-background dark:hover:border-lavender-veil-500">
                    <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                      <h3 className="text-xl font-semibold tracking-tight text-foreground">
                        {item.role}
                      </h3>
                      <span className="rounded-full bg-lavender-veil-100 px-3 py-1 text-sm font-medium text-lavender-veil-600 dark:bg-lavender-veil-500/15 dark:text-lavender-veil-300">
                        {item.date}
                      </span>
                    </header>
                    <p className="mt-2 text-lg font-medium text-atomic-tangerine-500 dark:text-tangerine-dream-300">
                      {item.org}
                    </p>
                    <p className="mt-0.5 text-base italic text-muted-foreground">
                      {item.description}
                    </p>
                    <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {item.location}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {item.bullets.map((bullet, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-base leading-relaxed text-muted-foreground dark:text-foreground/80"
                        >
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lavender-veil-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              ))}
            </div>
          </Card>
        </section>
        <section id="projects" className="relative flex h-dvh w-full snap-start flex-col items-center justify-center overflow-y-auto px-6 py-16 text-center sm:px-20">
          <Card className="gap-12">
            <h2 className="text-5xl font-semibold tracking-tight text-lavender-veil-400 dark:text-lavender-veil-300">
              Projects
            </h2>
            <div className="grid w-full max-w-5xl gap-6 text-left md:grid-cols-2">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="flex flex-col rounded-xl border border-solid border-black/[.08] bg-background/90 p-6 backdrop-blur transition-transform hover:-translate-y-1 hover:border-lavender-veil-300 dark:border-white/[.145] dark:bg-background dark:hover:border-lavender-veil-500"
                >
                  <header className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                      {project.title}
                      <span className="mt-2 block max-w-fit rounded-full bg-lavender-veil-100 px-3 py-0.5 text-xs font-medium text-lavender-veil-600 dark:bg-lavender-veil-500/15 dark:text-lavender-veil-300">
                        {project.tag}
                      </span>
                    </h3>
                    <span className="shrink-0 text-sm text-muted-foreground">
                      {project.date}
                    </span>
                  </header>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-solid border-black/[.08] px-2.5 py-1 text-sm text-muted-foreground dark:border-white/[.145]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex-1" />
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex w-fit items-center gap-1.5 text-base font-medium text-atomic-tangerine-500 hover:text-lavender-veil-500 dark:text-tangerine-dream-300 dark:hover:text-lavender-veil-300"
                    >
                      View on GitHub
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="mt-5 inline-flex w-fit items-center gap-1.5 text-base font-medium text-atomic-tangerine-500 dark:text-tangerine-dream-300">
                      <Lock className="size-4" />
                      Private repository on GitLab — will be open-source soon
                    </span>
                  )}
                </article>
              ))}
            </div>
          </Card>
        </section>
        <div className="relative flex h-dvh w-full snap-start flex-col">
          <section id="contact" className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center sm:px-20">
            <Card className="gap-12">
              <div className="flex flex-col items-center gap-4">
                <h2 className="text-5xl font-semibold tracking-tight text-lavender-veil-400 dark:text-lavender-veil-300">
                  Contact
                </h2>
                <p className="max-w-xl text-lg text-amethyst-700 dark:text-lavender-veil-50">
                  You can reach me through any of these platforms
                </p>
              </div>
              <div className="flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-4">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-xl text-atomic-tangerine-500 transition-colors hover:text-lavender-veil-500 dark:text-tangerine-dream-300 dark:hover:text-lavender-veil-300"
                  >
                    <span className="flex items-center text-lavender-veil-500 transition-transform group-hover:-translate-y-0.5 group-hover:scale-110 group-hover:text-atomic-tangerine-500 dark:text-lavender-veil-300 dark:group-hover:text-tangerine-dream-300">
                      <span className="flex size-8 items-center justify-center">
                        {link.icon}
                      </span>
                    </span>
                  </a>
                ))}
                <a
                  href="mailto:nadia.lahya@outlook.com"
                  className="group flex items-center text-lavender-veil-500 transition-colors hover:text-atomic-tangerine-500 dark:text-lavender-veil-300 dark:hover:text-tangerine-dream-300"
                >
                  <span className="transition-transform group-hover:-translate-y-0.5 group-hover:scale-110">
                    <span className="flex size-8 items-center justify-center">
                      <MailPen className="size-8" />
                    </span>
                  </span>
                </a>
              </div>
            </Card>
          </section>
          <Footer />
        </div>
      </div>
    </div>
  );
}
