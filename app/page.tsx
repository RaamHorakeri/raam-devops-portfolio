import Nav from "./components/Nav";
import Icon from "./components/Icon";
import SkillsTerminal from "./components/SkillsTerminal";
import FeaturedProject from "./components/FeaturedProject";
import { profile, stats, jobs, projects, featured, education } from "./data";

function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-cyan-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400">{subtitle}</p>}
    </div>
  );
}

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p>
      <span className="text-emerald-400">$</span> <span className="text-slate-200">{cmd}</span>
    </p>
  );
}

function Terminal() {
  const achievements = [
    ["deploy-time", "-40%", "enfec"],
    ["services-automated", "15+", "enfec"],
    ["deploy-effort", "-35%", "pentagram"],
    ["release-workflows", "12+", "pentagram"],
  ];
  return (
    <div className="force-dark glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-surface/90 shadow-2xl shadow-cyan-950/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 font-mono text-xs text-slate-500">ramesh@career-cluster: ~</span>
      </div>
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
        <Prompt cmd="whoami" />
        <p className="text-slate-400">ramesh-horakeri · devops-engineer · {profile.experience}</p>

        <div className="mt-3">
          <Prompt cmd="kubectl get jobs -n career" />
        </div>
        <table className="mt-1 w-full whitespace-nowrap text-left">
          <thead className="text-slate-500">
            <tr>
              <th className="pr-6 font-normal">NAME</th>
              <th className="hidden pr-6 font-normal sm:table-cell">ROLE</th>
              <th className="pr-6 font-normal">STATUS</th>
              <th className="font-normal">AGE</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.company}>
                <td className="pr-6 text-cyan-300">{job.company.split(" ")[0].toLowerCase()}</td>
                <td className="hidden pr-6 text-slate-300 sm:table-cell">{job.role}</td>
                <td className={`pr-6 ${job.current ? "text-emerald-400" : "text-slate-400"}`}>
                  {job.current ? "Running" : "Completed"}
                </td>
                <td className="text-slate-300">{job.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3">
          <Prompt cmd="kubectl get achievements -n career" />
        </div>
        <table className="mt-1 w-full whitespace-nowrap text-left">
          <thead className="text-slate-500">
            <tr>
              <th className="pr-6 font-normal">NAME</th>
              <th className="pr-6 font-normal">VALUE</th>
              <th className="font-normal">JOB</th>
            </tr>
          </thead>
          <tbody>
            {achievements.map(([name, value, job]) => (
              <tr key={name}>
                <td className="pr-6 text-cyan-300">{name}</td>
                <td className="pr-6 font-semibold text-emerald-400">{value}</td>
                <td className="text-slate-400">{job}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3">
          <Prompt cmd="kubectl rollout status deploy/next-role" />
        </div>
        <p className="text-emerald-400">
          ✔ ready · open to new opportunities<span className="cursor ml-1 inline-block h-4 w-2 translate-y-0.5 bg-cyan-400" />
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="bg-grid absolute inset-x-0 top-0 h-225" />
          <div className="absolute -top-40 left-1/2 h-150 w-225 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute right-0 top-350 h-125 w-125 rounded-full bg-emerald-500/10 blur-[120px]" />
        </div>

        {/* HERO */}
        <section id="about" className="w-full scroll-mt-20 page-x pb-20 pt-32 sm:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
            <div className="fade-up">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Open to new opportunities
              </span>

              <h1 className="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
                Ramesh <span className="text-gradient">Horakeri</span>
              </h1>
              <p className="mt-4 font-mono text-lg text-slate-300">
                {profile.role} <span className="text-slate-600">|</span> {profile.experience} experience
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                I build and run reliable cloud infrastructure — automating CI/CD with{" "}
                <span className="text-slate-200">Jenkins & GitLab</span>, shipping to{" "}
                <span className="text-slate-200">Kubernetes with Helm</span>, and keeping production observable with{" "}
                <span className="text-slate-200">Prometheus, Grafana & Loki</span> across AWS, Azure and DigitalOcean.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-6 py-3 font-semibold text-on-accent shadow-lg shadow-cyan-500/25 transition hover:shadow-cyan-500/50"
                >
                  Get in touch
                  <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  <Icon name="github" className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="#experience"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-semibold text-slate-300 transition hover:text-white"
                >
                  View experience
                </a>
              </div>
            </div>

            <div className="fade-up [animation-delay:150ms]">
              <Terminal />
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-white/10 bg-white/3 p-6 text-center transition hover:border-cyan-400/40 hover:bg-white/5"
              >
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-gradient text-4xl font-bold">{s.value}</dd>
                <dd className="mt-2 text-sm text-slate-400">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* SKILLS */}
        <section id="skills" className="w-full scroll-mt-20 page-x py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="// tech-stack"
            title="Skills & tools I work with daily"
            subtitle="Pick a category or scroll the manifest. Everything from provisioning infrastructure to routing traffic and watching it in production."
          />
          <SkillsTerminal />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="w-full scroll-mt-20 page-x py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="// experience"
            title="Where I've worked"
            subtitle="4+ years across product companies, running pipelines and clusters from dev to production."
          />
          <ol className="relative space-y-10 border-l border-white/10 pl-6 sm:pl-10">
            {jobs.map((job) => (
              <li key={job.company} className="relative">
                <span
                  className={`absolute -left-7.75 top-2 h-3.5 w-3.5 rounded-full ring-4 ring-base sm:-left-11.75 ${
                    job.current ? "bg-emerald-400 shadow-[0_0_16px] shadow-emerald-400" : "bg-slate-600"
                  }`}
                />
                <article className="rounded-2xl border border-white/10 bg-white/3 p-6 transition hover:border-white/20 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-1 text-cyan-300">{job.company}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {job.current && (
                        <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/30">
                          Current
                        </span>
                      )}
                      <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-slate-400">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-slate-300">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        <span className="leading-7">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {job.achievements && (
                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      {job.achievements.map((a) => (
                        <div
                          key={a.text}
                          className="flex items-center gap-4 rounded-xl border border-emerald-400/20 bg-emerald-400/6 p-4"
                        >
                          <span className="text-gradient text-3xl font-bold">{a.value}</span>
                          <span className="text-sm leading-6 text-slate-300">{a.text}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/5 pt-5">
                    {job.stack.map((t) => (
                      <span key={t} className="font-mono text-xs text-slate-500">
                        #{t.toLowerCase().replace(/\s+/g, "-")}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="w-full scroll-mt-20 page-x py-16 sm:py-20 lg:py-24">
          <SectionHeading
            eyebrow="// projects"
            title="Featured products"
            subtitle="Live platforms in production — what they do, why they're useful and how they work under the hood."
          />
          <div id="featured" className="scroll-mt-24 space-y-8">
            {featured.map((p) => (
              <FeaturedProject key={p.name} project={p} />
            ))}
          </div>

          <h3 id="more-projects" className="mb-6 mt-20 scroll-mt-24 text-2xl font-bold tracking-tight text-white">More DevOps work</h3>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="glow-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-7 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-linear-to-br from-cyan-400/20 to-emerald-400/20 text-cyan-300 ring-1 ring-white/10">
                    <Icon name={p.icon} className="h-6 w-6" />
                  </span>
                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
                    >
                      GitHub <Icon name="external" className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-400">{p.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200 ring-1 ring-cyan-400/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Education */}
          <div id="education" className="mt-16 scroll-mt-24 flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/3 p-7 sm:flex-row sm:items-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/5 text-emerald-300 ring-1 ring-white/10">
              <Icon name="grad" className="h-6 w-6" />
            </span>
            <div className="flex-1">
              <p className="font-mono text-xs text-cyan-400">{"// education"}</p>
              <h3 className="mt-1 font-semibold text-white">{education.degree}</h3>
              <p className="text-slate-400">{education.school}</p>
            </div>
            <span className="self-start rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-slate-400 sm:self-center">
              {education.year}
            </span>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full scroll-mt-20 page-x py-16 sm:py-20 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-cyan-500/15 via-surface to-emerald-500/15 p-8 sm:p-14">
            <div className="bg-grid absolute inset-0 -z-10 opacity-60" />
            <p className="font-mono text-sm text-cyan-400">{"// contact"}</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Let&apos;s build reliable infrastructure together.
            </h2>
            <p className="mt-5 max-w-xl text-slate-300">
              Looking for a DevOps engineer for Kubernetes, CI/CD, cloud or observability work? I&apos;d love to hear
              from you.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: "mail", label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                { icon: "phone", label: "Phone", value: profile.phone, href: profile.phoneHref },
                {
                  icon: "github",
                  label: "GitHub",
                  value: `@${profile.githubHandle}`,
                  href: profile.github,
                  external: true,
                },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-base/60 p-5 transition hover:border-cyan-400/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 transition group-hover:bg-cyan-400 group-hover:text-on-accent">
                    <Icon name={c.icon} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-500">{c.label}</span>
                    <span className="block truncate font-medium text-white">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="flex w-full flex-col items-center justify-between gap-3 page-x py-8 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Ramesh Horakeri · DevOps Engineer</p>
          <p className="font-mono">built with Next.js · Tailwind CSS</p>
        </div>
      </footer>
    </>
  );
}
