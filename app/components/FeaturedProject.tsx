import Icon from "./Icon";
import type { FeaturedProject as Project } from "../data";

export default function FeaturedProject({ project }: { project: Project }) {
  const host = new URL(project.links[0].href).host;

  return (
    <article className="glow-card relative overflow-hidden rounded-3xl border border-white/10 bg-surface/80">
      {/* Browser bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/2 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-md bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">
          <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.2}>
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          <span className="truncate">{host}</span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 ring-1 ring-emerald-400/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>

      <div className="grid gap-10 p-6 sm:p-10 lg:grid-cols-[1fr_1.05fr]">
        {/* Overview */}
        <div>
          <h3 className="text-3xl font-bold tracking-tight text-white">{project.name}</h3>
          <p className="text-gradient mt-2 font-medium">{project.tagline}</p>
          <p className="mt-5 leading-7 text-slate-300">{project.summary}</p>

          <h4 className="mt-8 font-mono text-xs uppercase tracking-wider text-cyan-400">Why it&apos;s useful</h4>
          <ul className="mt-4 space-y-3">
            {project.useful.map((u) => (
              <li key={u} className="flex gap-3 text-sm leading-6 text-slate-300">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {u}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.features.map((f) => (
              <span key={f} className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/20">
                {f}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  l.primary
                    ? "group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-on-accent shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40"
                    : "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                }
              >
                {l.label}
                <Icon name="external" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="rounded-2xl border border-white/10 bg-white/2 p-6 sm:p-7">
          <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400">How it works</h4>
          <ol className="relative mt-6 space-y-6">
            <span className="absolute bottom-4 left-4 top-4 w-px bg-linear-to-b from-cyan-400/60 via-emerald-400/40 to-transparent" />
            {project.steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-4">
                <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full bg-surface font-mono text-xs font-semibold text-cyan-300 ring-1 ring-cyan-400/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-white">{s.title}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-slate-500">Tech stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span key={t} className="rounded-md border border-white/10 bg-base px-2.5 py-1 font-mono text-xs text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
