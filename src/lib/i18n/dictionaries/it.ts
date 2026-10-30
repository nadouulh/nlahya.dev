import type { Dictionary } from "./en";

const it: Dictionary = {
  meta: {
    title: "Nadia Lahya - Apprendista ingegnera DevOps",
    description:
      "Apprendista ingegnera DevOps in RAILwAI, costruisco l'infrastruttura di un'IA utile nel mondo reale. Disponibile per un tirocinio DevOps, Cloud o IA (giugno–settembre 2027).",
  },
  nav: {
    home: "Home",
    projects: "Progetti",
    experience: "Esperienza",
    skills: "Come lavoro",
    tools: "Strumenti",
    now: "Adesso",
    contact: "Contatti",
  },
  header: {
    selectLanguage: "Seleziona la lingua",
    theme: "Tema",
    themes: { light: "chiaro", dark: "scuro", system: "sistema" },
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
  },
  hero: {
    role: "Apprendista ingegnera DevOps",
    tagline:
      "Costruisco e automatizzo infrastrutture, dalle pipeline CI ai cluster Kubernetes, con un debole per i progetti di IA.",
    intro:
      "Studentessa al quarto anno di ingegneria DevOps al Polytech Montpellier, in apprendistato presso RAILwAI.",
    cv: "Curriculum vitae",
    contact: "Contattami",
    glanceTitle: "In breve",
    glance: [
      { label: "Adesso", value: "Sviluppo Omni su Talos Kubernetes" },
      { label: "Pubblicazione", value: "Articolo e poster ACM, MOCO'26" },
      { label: "Lavoro", value: "GCP · OpenTofu · CI/CD" },
      { label: "Vivo a", value: "Montpellier, Francia" },
      { label: "Lingue", value: "Francese · italiano · arabo · inglese" },
      { label: "Tempo libero", value: "Karate, 7 anni individuale e a squadre · disegno · calligrafia" },
    ],
    availability:
      "Disponibile per un tirocinio in **DevOps, Cloud o IA** · giu–set 2027 (min. 9 settimane)",
  },
  projects: {
    index: "01 — Progetti",
    title: "Cosa ho costruito",
    nowBuilding: "In corso",
    private: "Repository privato su GitLab · presto open source",
    viewOnGithub: "Vedi su GitHub",
    diagramCaption: "Cluster Talos di staging e prod su tre blade Proxmox, una zona VXLAN ciascuno",
    diagramScroll: " · scorri per vedere tutto lo schema",
    omni: {
      tag: "progetto tutorato",
      description:
        "Suite collaborativa self-hosted (Visio, Vault, Admin, Drive), distribuita su Talos Kubernetes sopra un cluster Proxmox.",
    },
    barenetes: {
      tag: "open source",
      description: "Reimplementazione minimale di Kubernetes in Rust, realizzata in team: ho lavorato sull'API server, altri sullo scheduler, sull'agente dei nodi e sulla CLI.",
    },
    datagofast: {
      tag: "progetto di gruppo",
      description: "App di elaborazione dati event-driven, realizzata in quattro: un'API in Rust invia i file a S3 e mette i job in coda su Redis, e dei worker in Rust eseguono le pipeline. Ho partecipato alle decisioni architetturali e alla CI, scritto alcune delle pipeline del worker (filtro, aggregazione, raggruppamento), parte dell'API e del frontend React.",
    },
    doremix: {
      tag: "progetto scolastico",
      description: "Web app e CLI per condividere playlist collettive a partire da link YouTube: backend FastAPI con PostgreSQL, CLI in Typer, ambienti Docker Compose di sviluppo e produzione, test pytest e rate limiting sull'API.",
    },
  },
  diagram: {
    title: "Infrastruttura di Omni su Proxmox",
    description:
      "Tre blade Proxmox ospitano ciascuna una VM control plane e una VM worker dei cluster Talos di staging e di prod. Ogni cluster ha la propria rete VXLAN, estesa a tutte le blade, e il proprio router verso Internet.",
    stagingRouter: "Router staging",
    prodRouter: "Router prod",
    stagingCluster: "Cluster di staging",
    prodCluster: "Cluster di prod",
    controlPlane: "control plane",
    worker: "worker",
    underlay: "Entrambi i cluster passano sulla rete delle blade tramite VXLAN",
  },
  experience: {
    index: "02 — Esperienza",
    title: "Dove ho lavorato",
    railwai: {
      role: "Apprendista ingegnera DevOps",
      date: "Ott 2025 — oggi",
      summary:
        "Lavoro sulla nostra infrastruttura ibrida (**GCP**, **Scaleway** e on-premise) come codice con **Terraform/OpenTofu**, costruisco e mantengo le **pipeline CI** su Bitbucket con hook **pre-commit** e scansioni di sicurezza **Trivy**, e automatizzo le attività ricorrenti. Scrivo anche la documentazione tecnica, revisiono il codice dei colleghi, e applico e condivido le **buone pratiche**.",
    },
    research: {
      role: "Tirocinante di ricerca in IA",
      date: "Mar 2025 — giu 2025",
      summary:
        "Ho stimato il carico trasportato da un operatore a partire dal solo **video RGB** per alimentare il punteggio ergonomico REBA, ho contribuito a registrare il dataset **ViLoad** e ho fatto il fine-tuning di [MobileNetV2](https://arxiv.org/abs/1801.04381) e [R3D-18](https://arxiv.org/abs/1711.11248).",
    },
    publication: {
      label: "Articolo e poster ACM · MOCO'26",
      posterLabel: "Apri il poster MOCO'26 (PDF)",
      posterAlt:
        "Poster MOCO'26: deep learning per la stima del carico fisico, risultati dal dataset video ViLoad",
      paper: "Articolo",
      poster: "Poster",
      dataset: "Dataset",
      code: "Codice",
    },
  },
  skills: {
    index: "03 — Soft skills",
    title: "Come lavoro",
    items: [
      { title: "Comunicazione", proof: "Scrivo la documentazione su cui si basa il mio team, registro le scelte architetturali negli ADR e ho presentato la mia ricerca con un poster al MOCO'26." },
      { title: "Collaborazione", proof: "Omni è sviluppato da 16 persone: allo sprint precedente ero sviluppatrice, ora faccio parte del team ops di quattro. In RAILwAI mi confronto con gli sviluppatori per capire le loro soluzioni prima di distribuirle, e tengo aggiornati i miei responsabili su progressi e blocchi." },
      { title: "Feedback", proof: "In ogni progetto non esito a dire cosa ha funzionato bene e cosa ha creato problemi. Nelle code review in RAILwAI do feedback costruttivi e imparo da quelli dei colleghi." },
      { title: "Apprendimento rapido", proof: "Prima del tirocinio di ricerca sapevo poco di IA, e si è concluso con un articolo pubblicato da ACM. Per Omni ho imparato Talos, Proxmox e VXLAN sul campo, e mi sono messa al Rust per Barenetes." },
      { title: "Rigore", proof: "Tengo alla qualità di tutto ciò che produco, non solo del codice. Sul lato infrastruttura, tutto ciò su cui lavoro è descritto come codice, passa in revisione e segue le buone pratiche del team, con hook pre-commit e scansioni Trivy che individuano i problemi prima del rilascio." },
    ],
  },
  tools: {
    index: "04 — Strumenti",
    title: "Con cosa lavoro",
    groups: {
      railwai: "Ogni giorno in RAILwAI",
      projects: "Nei miei progetti",
      school: "Usati molto, meno di recente",
    },
  },
  now: {
    index: "05 — Adesso",
    title: "In questo momento",
    lead: "Sviluppo **Omni**, una suite collaborativa self-hosted che gira su Talos Kubernetes sopra un cluster Proxmox.",
    detail:
      "Siamo un team di quattro persone sull'infrastruttura di Omni: ci dividiamo il lavoro, ci coordiniamo e ci formiamo strada facendo. Insieme stiamo migrando da Dokku a Kubernetes (VM Talos Linux su un cluster Proxmox, provisionate con OpenTofu), e sia lo staging sia la produzione funzioneranno così. Documentiamo ogni passaggio per tutto il team e registriamo ogni scelta architetturale in un architectural decision record (ADR).",
    updated: "Aggiornato · ottobre 2026",
  },
  notFound: {
    title: "Pagina non trovata",
    message: "Questa pagina non esiste o è stata spostata.",
    back: "Torna alla home",
  },
  contact: {
    index: "06 — Contatti",
    titleStart: "Costruiamo qualcosa di ",
    titleHighlight: "utile",
    titleEnd: ".",
    email: "Email",
  },
};

export default it;
