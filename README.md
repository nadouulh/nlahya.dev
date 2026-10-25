# Portfolio

Personal portfolio of Nadia Lahya, in English, French and Italian: [nlahya.dev](https://nlahya.dev).

Built with Next.js as a static export and served by nginx.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:3001/en
```

`/` only redirects to a language in production (nginx). In development, open `/en`, `/fr` or `/it`.

```bash
pnpm lint
pnpm preview    # production image (nginx) on http://localhost:8080
```

## Content

Texts live in `lib/i18n/dictionaries/` (`en.ts`, `fr.ts`, `it.ts`). TypeScript reports any key missing from a translation.

## Deployment

| Workflow | Trigger | Does |
| --- | --- | --- |
| `quality.yml` | push on `main` | Lint, type check, Trivy scan of dependencies and secrets |
| `build.yml` | push on `main` | Podman build, Trivy scan, push to GHCR, cosign signature |
| `release.yml` | tag `v*` | Deploys the signed image of the tagged commit to the VPS |

```bash
git tag v1.0.0 && git push origin v1.0.0
```
