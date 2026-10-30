const en = {
  meta: {
    title: "Nadia Lahya - DevOps Engineer Apprentice",
    description:
      "DevOps engineering apprentice at RAILwAI building infrastructure for AI that does real-world good. Open to a DevOps, Cloud or AI internship (June–September 2027).",
  },
  nav: {
    home: "Home",
    projects: "Projects",
    experience: "Experience",
    skills: "How I work",
    tools: "Tools",
    now: "Now",
    contact: "Contact",
  },
  header: {
    selectLanguage: "Select language",
    theme: "Theme",
    themes: { light: "light", dark: "dark", system: "system" },
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    role: "DevOps engineer apprentice",
    tagline:
      "I automate the path from code to production: containers, CI/CD pipelines, GitOps and cloud infrastructure, with a particular interest in AI projects.",
    intro:
      "Fourth-year DevOps engineering student at Polytech Montpellier, doing my apprenticeship at RAILwAI.",
    cv: "Curriculum vitae",
    contact: "Get in touch",
    glanceTitle: "At a glance",
    glance: [
      { label: "Now", value: "Building Omni on Talos Kubernetes" },
      { label: "Published", value: "ACM paper & poster, MOCO'26" },
      { label: "Day job", value: "GCP · OpenTofu · CI/CD" },
      { label: "Based in", value: "Montpellier, France" },
      { label: "Languages", value: "French · Italian · Arabic · English" },
      { label: "Outside work", value: "Karate, 7 years in individual and team events · drawing · calligraphy" },
    ],
    availability:
      "Open to a **DevOps, Cloud or AI** internship · Jun–Sep 2027 (min. 9 weeks)",
  },
  projects: {
    index: "01 — Projects",
    title: "Things I've built",
    nowBuilding: "Now building",
    private: "Private on GitLab · open-source soon",
    viewOnGithub: "View on GitHub",
    diagramCaption: "Staging and prod Talos clusters on three Proxmox blades, one VXLAN zone each",
    diagramScroll: " · scroll to see the whole diagram",
    omni: {
      tag: "tutored project",
      description:
        "Self-hostable collaboration suite (Visio, Vault, Admin, Drive), deployed on Talos Kubernetes over a Proxmox cluster.",
    },
    barenetes: {
      tag: "open source",
      description: "Minimal reimplementation of Kubernetes in Rust, built as a team: I worked on the API server, others on the scheduler, the node agent and the CLI.",
    },
    datagofast: {
      tag: "team project",
      description: "Event-driven data processing app built as a team of four: a Rust API streams uploads to S3 and queues jobs in Redis, and Rust workers run the pipelines. I participated in architectural decisions and CI, wrote some of the worker pipelines (filter, aggregate, group by) and part of the API and React frontend.",
    },
    doremix: {
      tag: "team project",
      description: "Web app and CLI to share community playlists built from YouTube links: FastAPI backend with PostgreSQL, Typer CLI, Docker Compose setups for dev and production, pytest tests and API rate limiting.",
    },
  },
  diagram: {
    title: "Omni infrastructure on Proxmox",
    description:
      "Three Proxmox blades each host a control-plane and a worker VM of both the staging and the prod Talos clusters. Each cluster has its own VXLAN network spanning every blade and its own router to the Internet.",
    stagingRouter: "Staging router",
    prodRouter: "Prod router",
    stagingCluster: "Staging cluster",
    prodCluster: "Prod cluster",
    controlPlane: "control plane",
    worker: "worker",
    underlay: "Both clusters tunnel over the blades' network with VXLAN",
  },
  experience: {
    index: "02 — Experience",
    title: "Where I've worked",
    railwai: {
      role: "DevOps Engineering Apprentice",
      date: "Oct 2025 — Now",
      summary:
        "I manage the hybrid infrastructure (**GCP**, **Scaleway**, on-premise) with **Terraform/OpenTofu**, look after the **CI pipelines** in Bitbucket with **pre-commit** and **Trivy** scans, and automate operational routines. I also handle the technical documentation, review my teammates' code and promote **good practices**.",
    },
    research: {
      role: "AI Research Intern",
      date: "Mar 2025 — Jun 2025",
      summary:
        "I estimated the load a worker carries from **RGB video** alone to feed REBA ergonomic scoring, helped record the **ViLoad** dataset, and fine-tuned [MobileNetV2](https://arxiv.org/abs/1801.04381) and [R3D-18](https://arxiv.org/abs/1711.11248).",
    },
    publication: {
      label: "ACM paper & poster · MOCO'26",
      posterLabel: "Open the MOCO'26 poster (PDF)",
      posterAlt:
        "MOCO'26 poster: Deep learning for physical load estimation, insights from the ViLoad video dataset",
      paper: "Paper",
      poster: "Poster",
      dataset: "Dataset",
      code: "Code",
    },
  },
  skills: {
    index: "03 — Soft skills",
    title: "How I work",
    items: [
      { title: "Communication", proof: "I write the documentation my teammates rely on, record architecture choices in ADRs, and presented my research as a poster at MOCO'26." },
      { title: "Collaboration", proof: "Omni is built by 16 people: I was a developer last sprint and now work in the 4-person ops team. At RAILwAI, I talk with the developers to understand their solutions before deploying them, and keep my managers updated on my progress and blockers." },
      { title: "Feedback", proof: "On every project, I openly say what worked well and what caused problems. In code reviews at RAILwAI, I give constructive feedback and learn from my teammates'." },
      { title: "Learning fast", proof: "I knew little about AI before my research internship, and it ended with a published ACM paper. For Omni, I learned Talos, Proxmox and VXLAN on the job, and picked up Rust for Barenetes." },
      { title: "Rigor", proof: "I care about quality in everything I produce, not just code. On the infrastructure side, everything I work on is described as code, goes through review and follows the team's good practices, with pre-commit hooks and Trivy scans catching problems before they ship." },
    ],
  },
  tools: {
    index: "04 — Tools",
    title: "What I work with",
    groups: {
      railwai: "Every day at RAILwAI",
      projects: "In my projects",
      school: "Used a lot, less recently",
    },
  },
  now: {
    index: "05 — Now",
    title: "Currently",
    lead: "Building **Omni**, a self-hostable collaboration suite running on Talos Kubernetes over a Proxmox cluster.",
    detail:
      "We are a team of four on Omni's infrastructure, splitting the work, coordinating and teaching ourselves as we go. Together we are migrating from Dokku to Kubernetes (Talos Linux VMs on a Proxmox cluster, provisioned with OpenTofu), and both staging and production will run this way. We document every step for the whole team and record each architecture choice in an architectural decision record (ADR).",
    updated: "Last updated · October 2026",
  },
  notFound: {
    title: "Page not found",
    message: "This page doesn't exist or has moved.",
    back: "Back home",
  },
  contact: {
    index: "06 — Contact",
    titleStart: "Let's build something ",
    titleHighlight: "useful",
    titleEnd: ".",
    email: "Email",
  },
};

export type Dictionary = typeof en;

export default en;
