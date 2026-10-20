import type { Dictionary } from "./en";

const fr: Dictionary = {
  meta: {
    title: "Nadia Lahya - Apprentie ingénieure DevOps",
    description:
      "Apprentie ingénieure DevOps chez RAILwAI, je construis l'infrastructure d'une IA utile au quotidien. Ouverte à un stage DevOps, Cloud ou IA (juin–septembre 2027).",
  },
  nav: {
    home: "Accueil",
    projects: "Projets",
    experience: "Expérience",
    skills: "Savoir-être",
    tools: "Outils",
    now: "Actuellement",
    contact: "Contact",
  },
  header: {
    selectLanguage: "Choisir la langue",
    theme: "Thème",
    themes: { light: "clair", dark: "sombre", system: "système" },
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    role: "Apprentie ingénieure DevOps",
    tagline:
      "Je construis et j'automatise de l'infrastructure, des pipelines CI aux clusters Kubernetes, avec un faible pour les projets d'IA.",
    intro:
      "Étudiante en 4e année d'ingénierie DevOps à Polytech Montpellier, en alternance chez RAILwAI.",
    cv: "Curriculum vitae",
    contact: "Me contacter",
    glanceTitle: "En bref",
    glance: [
      { label: "En ce moment", value: "Je construis Omni sur Talos Kubernetes" },
      { label: "Publication", value: "Article et poster ACM, MOCO'26" },
      { label: "Alternance", value: "GCP · OpenTofu · CI/CD" },
      { label: "Basée à", value: "Montpellier, France" },
      { label: "Langues", value: "Français · italien · arabe · anglais" },
      { label: "Loisirs", value: "Karaté, 7 ans en individuel et en équipe · dessin · calligraphie" },
    ],
    availability:
      "Ouverte à un stage en **DevOps, Cloud ou IA** · juin–sept. 2027 (9 semaines min.)",
  },
  projects: {
    index: "01 — Projets",
    title: "Ce que j'ai construit",
    nowBuilding: "En cours",
    private: "Dépôt privé sur GitLab · bientôt open source",
    viewOnGithub: "Voir sur GitHub",
    diagramCaption: "Clusters Talos de staging et de prod sur trois lames Proxmox, une zone VXLAN chacun",
    diagramScroll: " · faites défiler pour voir tout le schéma",
    omni: {
      tag: "projet tutoré",
      description:
        "Suite collaborative auto-hébergeable (Visio, Vault, Admin, Drive), déployée sur Kubernetes Talos au-dessus d'un cluster Proxmox.",
    },
    barenetes: {
      tag: "open source",
      description: "Réimplémentation minimale du control plane de Kubernetes en Rust.",
    },
    doremix: {
      tag: "projet d'école",
      description:
        "Application web et CLI pour créer et partager des playlists communautaires à partir de liens YouTube.",
    },
  },
  diagram: {
    title: "Infrastructure d'Omni sur Proxmox",
    description:
      "Trois lames Proxmox hébergent chacune une VM control plane et une VM worker des clusters Talos de staging et de prod. Chaque cluster a son propre réseau VXLAN, étendu à toutes les lames, et son propre routeur vers Internet.",
    stagingRouter: "Routeur staging",
    prodRouter: "Routeur prod",
    stagingCluster: "Cluster de staging",
    prodCluster: "Cluster de prod",
    controlPlane: "control plane",
    worker: "worker",
    underlay: "Les deux clusters passent par le réseau des lames grâce au VXLAN",
  },
  experience: {
    index: "02 — Expérience",
    title: "Où j'ai travaillé",
    railwai: {
      role: "Apprentie ingénieure DevOps",
      date: "Oct. 2025 — aujourd'hui",
      summary:
        "Je gère notre infrastructure hybride (**GCP**, **Scaleway** et on-premise) en tant que code avec **Terraform/OpenTofu**, je construis et maintiens les **pipelines CI** sur Bitbucket avec des hooks **pre-commit** et des scans de sécurité **Trivy**, et j'automatise les tâches récurrentes. Je rédige aussi la documentation technique, je relis le code de mes collègues et je promeus les **bonnes pratiques** dans l'équipe.",
    },
    research: {
      role: "Stagiaire en recherche IA",
      date: "Mars 2025 — juin 2025",
      summary:
        "J'ai estimé la charge portée par un opérateur à partir de la seule **vidéo RVB** pour alimenter le score ergonomique REBA, participé à l'enregistrement du jeu de données **ViLoad** et fine-tuné [MobileNetV2](https://arxiv.org/abs/1801.04381) et [R3D-18](https://arxiv.org/abs/1711.11248).",
    },
    publication: {
      label: "Article et poster ACM · MOCO'26",
      posterLabel: "Ouvrir le poster MOCO'26 (PDF)",
      posterAlt:
        "Poster MOCO'26 : deep learning pour l'estimation de la charge physique, enseignements du jeu de données vidéo ViLoad",
      paper: "Article",
      poster: "Poster",
      dataset: "Données",
      code: "Code",
    },
  },
  skills: {
    index: "03 — Savoir-être",
    title: "Ma façon de travailler",
    items: [
      { title: "Communication", proof: "Je rédige la documentation sur laquelle s'appuie mon équipe, je consigne les choix d'architecture dans des ADR et j'ai présenté mes recherches en poster à MOCO'26." },
      { title: "Collaboration", proof: "Omni se construit à 16 : j'étais développeuse au sprint précédent et je fais maintenant partie de l'équipe ops de quatre. Chez RAILwAI, j'échange avec les devs pour comprendre leurs solutions avant de les déployer, et je tiens mes responsables au courant de mes avancées et de mes blocages." },
      { title: "Feedback", proof: "Sur tous les projets, je n'hésite pas à dire ce qui a bien marché et ce qui a posé problème. Dans les revues de code chez RAILwAI, je fais des retours constructifs et j'apprends de ceux de mes collègues." },
      { title: "Apprentissage rapide", proof: "Je ne connaissais pas grand-chose à l'IA avant mon stage de recherche, qui s'est terminé par un article publié chez ACM. Pour Omni, j'ai appris Talos, Proxmox et le VXLAN sur le tas, et je me suis mise au Rust pour Barenetes." },
      { title: "Rigueur", proof: "Je tiens à la qualité de tout ce que je produis, pas seulement du code. Côté infrastructure, tout ce que je gère est décrit en code, passe en revue et suit les bonnes pratiques de l'équipe, avec des hooks pre-commit et des scans Trivy qui repèrent les problèmes avant la mise en production." },
    ],
  },
  tools: {
    index: "04 — Outils",
    title: "Avec quoi je travaille",
    groups: {
      railwai: "Au quotidien chez RAILwAI",
      projects: "Dans mes projets",
      school: "Beaucoup pratiqué, moins récemment",
    },
  },
  now: {
    index: "05 — Actuellement",
    title: "En ce moment",
    lead: "Je construis **Omni**, une suite collaborative auto-hébergeable qui tourne sur Kubernetes Talos au-dessus d'un cluster Proxmox.",
    detail:
      "Nous sommes une équipe de quatre sur l'infrastructure d'Omni : on se répartit le travail, on se coordonne et on se forme au fur et à mesure. Ensemble, nous migrons de Dokku vers Kubernetes (VMs Talos Linux sur un cluster Proxmox, provisionnées avec OpenTofu), et le staging comme la production fonctionneront ainsi. Nous documentons chaque étape pour toute l'équipe et consignons chaque choix d'architecture dans un architectural decision record (ADR).",
    updated: "Mis à jour · octobre 2026",
  },
  contact: {
    index: "06 — Contact",
    titleStart: "Construisons quelque chose d'",
    titleHighlight: "utile",
    titleEnd: ".",
    email: "E-mail",
  },
  footer: {
    madeWith: "Fait avec Next.js et beaucoup de rose",
  },
};

export default fr;
