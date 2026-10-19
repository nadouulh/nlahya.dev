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
      "I build and automate infrastructure, from CI pipelines to Kubernetes clusters, with a soft spot for AI projects.",
    intro:
      "Fourth-year DevOps engineering student at Polytech Montpellier, on a work-study contract at RAILwAI.",
    cv: "Curriculum vitae",
    contact: "Get in touch",
    glanceTitle: "At a glance",
    glance: [
      { label: "Now", value: "Building Omni on Talos Kubernetes" },
      { label: "Published", value: "ACM paper & poster, MOCO'26" },
      { label: "Day job", value: "GCP · OpenTofu · CI/CD" },
      { label: "Based in", value: "Montpellier, France" },
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
      description: "Minimal reimplementation of the Kubernetes control plane in Rust.",
    },
    doremix: {
      tag: "school project",
      description: "Web app and CLI to create and share community playlists built from YouTube links.",
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
        "I manage our hybrid infrastructure (**GCP**, **Scaleway** and on-premise) as code with **Terraform/OpenTofu**, build and maintain the **CI pipelines** in Bitbucket, and automate recurring tasks. I also write technical documentation, review my teammates' code and promote **good practices** across the team.",
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
  tools: {
    index: "03 — Tools",
    title: "What I work with",
    groups: {
      railwai: "Every day at RAILwAI",
      projects: "In my projects",
      school: "Earlier, at school",
    },
  },
  now: {
    index: "04 — Now",
    title: "Currently",
    lead: "Building **Omni**, a self-hostable collaboration suite running on Talos Kubernetes over a Proxmox cluster.",
    detail:
      "We are a team of four on Omni's infrastructure, splitting the work, coordinating and teaching ourselves as we go. Together we are migrating from Dokku to Kubernetes (Talos Linux VMs on a Proxmox cluster, provisioned with OpenTofu), and both staging and production will run this way. We document every step for the whole team and record each architecture choice in an architectural decision record (ADR).",
    updated: "Last updated · October 2026",
  },
  contact: {
    index: "05 — Contact",
    titleStart: "Let's build something ",
    titleHighlight: "useful",
    titleEnd: ".",
    email: "Email",
  },
  footer: {
    madeWith: "Made with Next.js and a lot of pink",
  },
};

export type Dictionary = typeof en;

export default en;
