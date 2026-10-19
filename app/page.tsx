import Image from "next/image";
import { ArrowDownToLine, ArrowUpRight, Lock, MailPen } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { SlideDots } from "@/components/ui/slide-dots";
import { Footer } from "@/components/ui/footer";
import { Card, SectionHeading } from "@/components/ui/card";
import { Tools } from "@/components/ui/tools";
import { OmniDiagram } from "@/components/ui/omni-diagram";
import icon from "@/app/icon.png";

// Set to e.g. "/cv.pdf" (file in public/) to show the download button
const CV_URL: string | null = "/cv.pdf";

const NOW = {
  updated: "October 2026",
  project: "Omni",
  detail:
    "We are a team of four on Omni's infrastructure, splitting the work, coordinating and teaching ourselves as we go. Together we are migrating from Dokku to Kubernetes (Talos Linux VMs on a Proxmox cluster, provisioned with OpenTofu), and both staging and production will run this way. We document every step for the whole team and record each architecture choice in an architectural decision record (ADR).",
};

const AT_A_GLANCE = [
  { label: "Now", value: "Building Omni on Talos Kubernetes" },
  { label: "Published", value: "ACM paper & poster, MOCO'26" },
  { label: "Day job", value: "GCP · OpenTofu · CI/CD" },
  { label: "Based in", value: "Montpellier, France" },
];

const CONTACT_LINKS = [
  {
    href: "mailto:nadia.lahya@outlook.com",
    label: "Email",
    icon: <MailPen className="size-5" aria-hidden="true" />,
  },
  {
    href: "https://www.linkedin.com/in/nadia-lahya-0b357a330/",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/nadouulh",
    label: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://orcid.org/0009-0004-1384-2095",
    label: "ORCiD",
    icon: (
      <svg viewBox="0 0 512 512" fill="currentColor" className="size-5" aria-hidden="true">
        <path d="M336.62 194.538c-7.13-3.328-13.866-5.56-20.253-6.614c-6.365-1.095-16.574-1.612-30.71-1.612h-36.704v152.747h37.634c14.673 0 26.081-1.013 34.224-3.017s14.921-4.526 20.356-7.626a69.5 69.5 0 0 0 14.942-11.388c14.488-14.714 21.742-33.273 21.742-55.717c0-22.052-7.44-40.052-22.341-53.982c-5.498-5.166-11.822-9.444-18.89-12.793zM256 8C119.022 8 8 119.042 8 256s111.022 248 248 248s248-111.042 248-248S392.978 8 256 8m-82.336 357.513h-29.389V160.148h29.389zM158.95 138.696c-11.14 0-20.213-9.01-20.213-20.212c0-11.118 9.052-20.191 20.213-20.191c11.18 0 20.232 9.052 20.232 20.191a20.194 20.194 0 0 1-20.232 20.212m241.386 163.597c-5.29 12.545-12.834 23.581-22.65 33.088c-9.982 9.837-21.597 17.194-34.844 22.196c-7.75 3.017-14.839 5.063-21.307 6.117c-6.49 1.013-18.828 1.509-37.076 1.509h-64.956V160.148h69.233c27.962 0 50.034 4.154 66.32 12.545c16.265 8.37 29.181 20.728 38.792 36.972c9.61 16.265 14.425 34.018 14.425 53.196c.023 13.765-2.666 26.908-7.936 39.432z" />
      </svg>
    ),
  },
];

const FEATURED = {
  title: "Omni",
  tag: "tutored project",
  description:
    "Self-hostable collaboration suite (Visio, Vault, Admin, Drive), deployed on Talos Kubernetes over a Proxmox cluster.",
  stack: ["React", "TypeScript", "Fastify", "PostgreSQL", "OpenTofu", "Kubernetes", "Proxmox"],
};

const PROJECTS = [
  {
    title: "Barenetes",
    tag: "open source",
    href: "https://github.com/do-2k25-28/Barenetes",
    description: "Minimal reimplementation of the Kubernetes control plane in Rust.",
    stack: ["Rust", "gRPC", "etcd", "mTLS"],
  },
  {
    title: "DoRémix",
    tag: "school project",
    href: "https://github.com/nadouulh/doremix",
    description:
      "Web app and CLI to create and share community playlists built from YouTube links.",
    stack: ["Python", "FastAPI", "Typer", "PostgreSQL", "Docker"],
  },
];

const inlineLink =
  "font-medium text-link underline underline-offset-2 hover:text-atomic-tangerine-500";

const EXPERIENCE = [
  {
    role: "DevOps Engineering Apprentice",
    org: "RAILwAI · Montpellier",
    date: "Oct 2025 — Now",
    summary: (
      <>
        I manage our hybrid infrastructure
        (<strong>GCP</strong>, <strong>Scaleway</strong> and on-premise) as code with{" "}
        <strong>Terraform/OpenTofu</strong>, build and maintain the <strong>CI pipelines</strong> in
        Bitbucket, and automate recurring tasks. I also write technical documentation, review my
        teammates&apos; code and promote <strong>good practices</strong> across the team.
      </>
    ),
  },
  {
    role: "AI Research Intern",
    org: "IMT Mines Alès (CERIS) & EuroMov · Alès",
    date: "Mar 2025 — Jun 2025",
    summary: (
      <>
        I estimated the load a worker carries from <strong>RGB video</strong> alone to feed REBA
        ergonomic scoring, helped record the <strong>ViLoad</strong> dataset, and fine-tuned{" "}
        <a href="https://arxiv.org/abs/1801.04381" target="_blank" rel="noopener noreferrer" className={inlineLink}>
          MobileNetV2
        </a>{" "}
        and{" "}
        <a href="https://arxiv.org/abs/1711.11248" target="_blank" rel="noopener noreferrer" className={inlineLink}>
          R3D-18
        </a>
        .
      </>
    ),
    publication: {
      label: "ACM paper & poster · MOCO'26",
      title: "Deep Learning for Physical Load Estimation: Insights from the ViLoad Video Dataset",
      poster: { pdf: "/moco26-poster.pdf", thumbnail: "/moco26-poster.webp" },
      links: [
        { label: "Paper", href: "https://doi.org/10.1145/3802842.3802900" },
        { label: "Poster", href: "/moco26-poster.pdf" },
        { label: "Dataset", href: "https://www.kaggle.com/datasets/nadialahya/dataset-weight-estimation" },
        { label: "Code", href: "https://github.com/nadouulh/weight-estimation" },
      ],
    },
  },
];

const chip = "rounded-full bg-chip px-3 py-0.5 text-xs font-medium text-chip-foreground";

function StackList({ stack }: { stack: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <li key={tech} className="rounded-md border border-hairline px-2.5 py-0.5 text-[13px] text-ink-muted">
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <div className="relative isolate overflow-x-clip">
      <WavyBackground />
      <SlideDots />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-10 pt-24 sm:gap-14 sm:px-6 sm:pt-28 md:pr-12">
        {/* Hero */}
        <Card id="home" className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <h1 className="whitespace-nowrap font-display text-[clamp(2.5rem,8vw,4rem)] font-extrabold leading-[0.92] tracking-[-0.035em] text-heading">
              Nadia Lahya
            </h1>
            <p className="font-display text-[clamp(1.6rem,5vw,2.25rem)] font-bold leading-[1.1] tracking-tight text-subheading">
              DevOps engineer apprentice
            </p>
            <p className="max-w-xl text-pretty text-base leading-[1.75] sm:text-[17px]">
              I build and automate infrastructure, from CI pipelines to Kubernetes clusters, with
              a soft spot for AI projects.
            </p>
            <p className="max-w-xl text-pretty text-[15px] text-ink-muted">
              Fourth-year DevOps engineering student at Polytech Montpellier, on a work-study
              contract at RAILwAI.
            </p>
            <div className="flex flex-col gap-2.5 text-sm font-semibold sm:flex-row">
              {CV_URL ? (
                <a
                  href={CV_URL}
                  download
                  className="flex h-11 items-center justify-center gap-2 rounded-xl bg-lavender-veil-400 px-4 text-white transition-colors hover:bg-gold-300 hover:text-atomic-tangerine-500 sm:min-w-[170px]"
                >
                  <ArrowDownToLine className="size-4" />
                  Curriculum vitae
                </a>
              ) : null}
              <a
                href="#contact"
                className="flex h-11 items-center justify-center gap-2 rounded-xl border border-hairline px-4 transition-colors hover:border-transparent hover:bg-gold-100 hover:text-atomic-tangerine-500 sm:min-w-[170px]"
              >
                <MailPen className="size-4" />
                Get in touch
              </a>
            </div>
          </div>

          <aside
            aria-label="At a glance"
            className="relative flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-inner p-6 sm:p-7"
          >
            <Image
              src={icon}
              alt=""
              width={96}
              height={96}
              className="absolute -right-2 -top-9 size-20 rotate-[10deg] sm:-right-5 sm:size-24"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.08em] text-ink-muted">
              At a glance
            </p>
            {AT_A_GLANCE.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[6.5rem_minmax(0,1fr)] gap-3 border-t border-dashed border-hairline pt-3.5 text-sm"
              >
                <span className="text-ink-muted">{row.label}</span>
                <span className="font-semibold">{row.value}</span>
              </div>
            ))}
          </aside>
          <p className="flex w-full items-start gap-2.5 rounded-xl bg-gold-300 px-4 py-3 text-[15px] text-[#2a0718] sm:items-center lg:col-span-2">
            <span className="mt-1.5 size-2.5 shrink-0 rounded-full bg-atomic-tangerine-500 sm:mt-0" />
            <span>
              Open to a <strong>DevOps, Cloud or AI</strong> internship ·
              Jun–Sep 2027 (min. 9 weeks)
            </span>
          </p>
        </Card>

        {/* Projects */}
        <Card id="projects" className="flex flex-col gap-10">
          <SectionHeading index="01 — Projects" title="Things I've built" className="items-center text-center" />

          <article className="flex flex-col gap-7 rounded-2xl border border-hairline bg-surface-inner p-4 sm:p-5">
            <div className="flex flex-col gap-4 px-1 py-2 sm:py-3">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-gold-300 px-3 py-0.5 text-xs font-semibold text-[#2a0718]">
                  Now building
                </span>
                <span className={chip}>{FEATURED.tag}</span>
              </div>
              <h3 className="font-display text-4xl font-extrabold leading-none tracking-tight">
                {FEATURED.title}
              </h3>
              <p className="text-pretty">{FEATURED.description}</p>
              <StackList stack={FEATURED.stack} />
              <p className="flex items-center gap-2 text-sm font-medium text-link">
                <Lock className="size-4 shrink-0" />
                Private on GitLab · open-source soon
              </p>
            </div>
            <figure className="flex flex-col gap-2">
              <div className="overflow-x-auto rounded-xl border border-hairline p-3 sm:p-4">
                <OmniDiagram />
              </div>
              <figcaption className="text-center text-xs text-ink-muted">
                Staging and prod Talos clusters on three Proxmox blades, one VXLAN zone each
                <span className="sm:hidden"> · scroll to see the whole diagram</span>
              </figcaption>
            </figure>
          </article>

          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.title}
                className="flex min-w-0 flex-col gap-3.5 rounded-2xl border border-hairline bg-surface-inner p-6 transition-transform hover:-translate-y-1 sm:p-7"
              >
                <header className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-[28px] font-extrabold leading-tight tracking-tight">
                    {project.title}
                  </h3>
                  <span className={chip}>{project.tag}</span>
                </header>
                <p className="text-pretty text-[15px]">{project.description}</p>
                <StackList stack={project.stack} />
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-11 w-fit items-center gap-1.5 text-[15px] font-semibold text-link hover:text-atomic-tangerine-500"
                >
                  View on GitHub
                  <ArrowUpRight className="size-4" />
                </a>
              </article>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card id="experience" className="flex flex-col gap-10">
          <SectionHeading index="02 — Experience" title="Where I've worked" className="items-center text-center" />
          <div className="relative flex flex-col gap-7 pl-9 sm:pl-10">
            <div className="absolute bottom-2 left-[13px] top-2 w-px bg-timeline" />
            {EXPERIENCE.map((item) => (
              <article
                key={item.role}
                className="relative flex flex-col gap-2 rounded-2xl border border-hairline bg-surface-inner p-5 sm:p-7"
              >
                <span className="absolute -left-9 top-7 flex size-7 items-center justify-center rounded-full border-2 border-lavender-veil-400 bg-surface-inner sm:-left-10">
                  <span className="size-2.5 rounded-full bg-atomic-tangerine-500" />
                </span>
                <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-2xl font-bold leading-tight">{item.role}</h3>
                  <span className="rounded-full bg-chip px-3 py-1 text-[13px] font-medium text-chip-foreground">
                    {item.date}
                  </span>
                </header>
                <p className="font-semibold text-link">{item.org}</p>
                <p className="text-pretty text-[15px]">{item.summary}</p>
                {item.publication ? (
                  <div className="mt-3 flex flex-wrap items-center gap-4 rounded-xl bg-gold-300 px-5 py-4 text-[#2a0718]">
                    <a
                      href={item.publication.poster.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open the MOCO'26 poster (PDF)"
                      className="shrink-0 -rotate-3 overflow-hidden rounded-md shadow-[4px_4px_0_#2a0718] transition-transform hover:rotate-0 hover:scale-105"
                    >
                      <Image
                        src={item.publication.poster.thumbnail}
                        alt="MOCO'26 poster: Deep learning for physical load estimation, insights from the ViLoad video dataset"
                        width={480}
                        height={679}
                        className="h-auto w-20 sm:w-24"
                      />
                    </a>
                    <div className="flex min-w-0 flex-[1_1_16rem] flex-col gap-0.5">
                      <span className="text-xs font-semibold uppercase tracking-[0.06em]">
                        {item.publication.label}
                      </span>
                      <strong className="font-display text-lg leading-snug sm:text-[19px]">
                        {item.publication.title}
                      </strong>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.publication.links.map((link, index) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={
                            index === 0
                              ? "flex min-h-11 items-center rounded-[10px] bg-[#2a0718] px-4 text-sm font-semibold text-white"
                              : "flex min-h-11 items-center rounded-[10px] border-[1.5px] border-[#2a0718] px-4 text-sm font-semibold text-[#2a0718] hover:bg-[#2a0718] hover:text-white"
                          }
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </Card>

        {/* Tools + Now */}
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-8">
          <Card id="tools" className="flex flex-col gap-7 lg:p-12">
            <SectionHeading index="03 — Tools" title="What I work with" />
            <Tools />
          </Card>
          <Card id="now" className="flex flex-col gap-5 lg:p-12">
            <SectionHeading index="04 — Now" title="Currently" />
            <p className="font-display text-xl font-medium leading-snug sm:text-2xl">
              Building <span className="font-bold text-link">{NOW.project}</span>, a self-hostable
              collaboration suite running on Talos Kubernetes over a Proxmox cluster.
            </p>
            <p className="text-[15px] text-ink-muted">{NOW.detail}</p>
            <p className="mt-auto flex items-center gap-2 text-[13px] text-ink-muted">
              <span className="size-2 rounded-full bg-atomic-tangerine-500" />
              Last updated · {NOW.updated}
            </p>
          </Card>
        </div>

        {/* Contact */}
        <Card id="contact" className="flex flex-col items-center gap-7 text-center lg:p-[4.5rem]">
          <p className="text-[13px] font-medium text-ink-muted">05 — Contact</p>
          <h2 className="max-w-3xl text-balance font-display text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold leading-none tracking-[-0.035em] text-heading">
            Let&apos;s build something <span className="text-atomic-tangerine-500">useful</span>.
          </h2>
          <div className="flex flex-wrap justify-center gap-2">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex min-h-12 items-center gap-2 rounded-xl border border-hairline bg-surface-inner px-4 text-[15px] font-semibold text-link transition-colors hover:text-atomic-tangerine-500"
              >
                {link.icon}
                {link.label}
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </div>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
