import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'EmotiPal',
    description:
      'AI wellness app combining real-time emotion detection with personalized playlist and food recommendations.',
    tech: ['React', 'TensorFlow.js', 'Node.js', 'Tailwind'],
    github: 'https://github.com/atharva-shinde',
    live: '#',
  },
  {
    title: 'SafeCool',
    description:
      'AI-driven energy optimization for data centers with predictive cooling and anomaly detection.',
    tech: ['Python', 'FastAPI', 'XGBoost', 'Grafana'],
    github: 'https://github.com/atharva-shinde',
    live: '#',
  },
  {
    title: 'PartyCam Web',
    description:
      'QR-based event photo booth for seamless crowd contributions and instant galleries.',
    tech: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
    github: 'https://github.com/atharva-shinde',
    live: '#',
  },
  {
    title: 'GitNova',
    description:
      'Interactive dashboard visualizing GitHub repository trends and contributor insights.',
    tech: ['React', 'D3.js', 'GitHub API'],
    github: 'https://github.com/atharva-shinde',
    live: '#',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-2 text-white/60">A selection of AI, web, and data projects.</p>
        </div>
        <a
          href="https://github.com/atharva-shinde"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/10 hover:text-white md:inline-flex"
        >
          <Github size={16} /> View GitHub
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 transition hover:border-white/20"
          >
            <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" aria-hidden>
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(56,189,248,0.12),transparent_40%)]" />
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 text-sm text-white/70">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <Github size={16} /> Code
              </a>
              <a
                href={p.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-3 py-1.5 text-sm text-white/80 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <ExternalLink size={16} /> Live
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
