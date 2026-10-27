// Simplified view of the Omni infrastructure provisioned by iac-proxmox
// (full detail lives outside the site, with IPs and VM IDs)

import type { Dictionary } from "@/lib/i18n/dictionaries/en";

const BLADES = [
  { name: "serdaigle-1", x: 30 },
  { name: "serdaigle-2", x: 315 },
  { name: "serdaigle-3", x: 600 },
];
const BLADE_WIDTH = 270;

const ENVIRONMENTS = [
  {
    id: "staging",
    y: 202,
    label: "stagingCluster" as const,
    band: "fill-atomic-tangerine-500/10 stroke-atomic-tangerine-500",
    box: "stroke-atomic-tangerine-500",
    text: "fill-subheading",
  },
  {
    id: "prod",
    y: 298,
    label: "prodCluster" as const,
    band: "fill-lavender-veil-400/10 stroke-lavender-veil-400",
    box: "stroke-lavender-veil-400",
    text: "fill-heading",
  },
];
const BAND_HEIGHT = 82;

const ROUTERS = [
  { env: ENVIRONMENTS[0], title: "stagingRouter" as const, x: 60, edge: 7 },
  { env: ENVIRONMENTS[1], title: "prodRouter" as const, x: 600, edge: 893 },
];
const ROUTER_WIDTH = 240;

const line = "fill-none stroke-ink/50";

export function OmniDiagram({ labels }: { labels: Dictionary["diagram"] }) {
  return (
    <svg
      viewBox="0 0 900 480"
      role="img"
      aria-labelledby="omni-diagram-title omni-diagram-desc"
      className="h-auto w-full min-w-[620px] font-mono"
    >
      <title id="omni-diagram-title">{labels.title}</title>
      <desc id="omni-diagram-desc">{labels.description}</desc>

      {/* Internet and routers */}
      <rect x="380" y="10" width="140" height="40" rx="10" className="fill-surface-inner stroke-ink/50" />
      <text x="450" y="35" textAnchor="middle" className="fill-ink font-display text-[16px] font-bold">
        Internet
      </text>

      {ROUTERS.map((router) => {
        const center = router.x + ROUTER_WIDTH / 2;
        const left = router.x < 450;
        return (
          <g key={router.title}>
            <path d={`M${left ? 380 : 520} 30 H${center} V80`} className={line} />
            <path
              d={`M${left ? router.x : router.x + ROUTER_WIDTH} 106 H${router.edge} V${router.env.y + BAND_HEIGHT / 2} H${left ? 15 : 885}`}
              className={`fill-none ${router.env.box}`}
              strokeWidth="2"
            />
            <rect
              x={router.x}
              y="80"
              width={ROUTER_WIDTH}
              height="54"
              rx="10"
              className={`fill-surface-inner ${router.env.box}`}
              strokeWidth="2"
            />
            <text x={center} y="103" textAnchor="middle" className={`${router.env.text} font-display text-[16px] font-bold`}>
              {labels[router.title]}
            </text>
            <text x={center} y="122" textAnchor="middle" className="fill-ink-muted text-[12px]">
              NAT · WireGuard
            </text>
          </g>
        );
      })}

      {/* Proxmox blades */}
      {BLADES.map((blade) => (
        <g key={blade.name}>
          <rect
            x={blade.x}
            y="156"
            width={BLADE_WIDTH}
            height="290"
            rx="14"
            className="fill-none stroke-ink/40"
            strokeDasharray="6 5"
          />
          <text x={blade.x + 14} y="183" className="fill-ink font-display text-[16px] font-bold">
            {blade.name}
          </text>
        </g>
      ))}

      {/* One VXLAN network per cluster, spanning every blade */}
      {ENVIRONMENTS.map((env) => (
        <g key={env.id}>
          <rect x="15" y={env.y} width="870" height={BAND_HEIGHT} rx="12" className={env.band} strokeWidth="1.5" />
          <text x="30" y={env.y + 22} className={`${env.text} text-[13px] font-semibold`}>
            {labels[env.label]}
          </text>
          {BLADES.map((blade) =>
            [labels.controlPlane, labels.worker].map((role, roleIndex) => {
              const x = blade.x + 15 + roleIndex * 125;
              return (
                <g key={`${blade.name}-${role}`}>
                  <rect
                    x={x}
                    y={env.y + 34}
                    width="115"
                    height="36"
                    rx="8"
                    className={`fill-surface-inner ${env.box}`}
                    strokeWidth="1.5"
                  />
                  <text x={x + 57.5} y={env.y + 57} textAnchor="middle" className="fill-ink text-[13px]">
                    {role}
                  </text>
                </g>
              );
            })
          )}
        </g>
      ))}

      {/* Underlay: full mesh between the blades (1-2, 2-3 and 1-3) */}
      <path d="M225 413 H390 M510 413 H675 M165 430 V438 H735 V430" className={line} strokeDasharray="4 4" />
      {BLADES.map((blade) => {
        const center = blade.x + BLADE_WIDTH / 2;
        return (
          <g key={`${blade.name}-vmbr0`}>
            <rect x={center - 60} y="396" width="120" height="34" rx="8" className="fill-surface-inner stroke-ink/50" />
            <text x={center} y="418" textAnchor="middle" className="fill-ink text-[13px] font-semibold">
              vmbr0
            </text>
          </g>
        );
      })}
      <text x="450" y="470" textAnchor="middle" className="fill-ink-muted text-[12px]">
        {labels.underlay}
      </text>
    </svg>
  );
}
