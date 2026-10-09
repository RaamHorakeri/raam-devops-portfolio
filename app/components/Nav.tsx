"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Icon from "./Icon";
import { profile } from "../data";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const menu = [
  { id: "about", label: "About", hint: "Intro, summary & key numbers", icon: "terminal" },
  { id: "skills", label: "Skills", hint: "kubectl YAML view of 26 categories", icon: "code" },
  { id: "experience", label: "Experience", hint: "Enfec · Trophosphere · Pentagram", icon: "server" },
  { id: "featured", label: "Featured products", hint: "Infra Hub Center & AgentMesh", icon: "bolt", section: "projects" },
  { id: "more-projects", label: "More projects", hint: "Kubernetes, CI/CD & monitoring work", icon: "wheel", section: "projects" },
  { id: "education", label: "Education", hint: "VTU · 2019", icon: "grad", section: "projects" },
  { id: "contact", label: "Contact", hint: "Email, phone & GitHub", icon: "mail" },
];

// The theme lives on <html data-theme>; layout.tsx applies any saved choice before first paint.
const getTheme = () => (document.documentElement.dataset.theme === "light" ? "light" : "dark");

function subscribeTheme(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

export default function Nav() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(subscribeTheme, getTheme, () => "dark");

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const { id } of links) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  // Lock page scroll and close on Escape while the full-screen menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const goTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setOpen(false);
    // Scroll after the menu unmounts and the body scroll lock is released.
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-base/80 backdrop-blur-xl" : "border-b border-transparent"
        }`}
      >
        <nav className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-8 lg:px-12 xl:px-16">
          <a href="#about" className="group flex items-center gap-2 font-mono text-sm font-semibold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-linear-to-br from-cyan-400 to-emerald-400 text-on-accent">
              RH
            </span>
            <span className="text-slate-200 transition group-hover:text-white">
              ramesh<span className="text-cyan-400">.devops</span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    active === l.id ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-linear-to-r from-cyan-400 to-emerald-400 px-5 py-2 text-sm font-semibold text-on-accent shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/40 sm:inline-block"
            >
              Hire me
            </a>
            <button
              type="button"
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
              aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                {theme === "dark" ? (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                  </>
                ) : (
                  <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
                )}
              </svg>
            </button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="site-menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="menu-in fixed inset-0 z-60 overflow-y-auto bg-base/97 backdrop-blur-xl"
        >
          <div className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-96" />
          <div className="relative flex min-h-full w-full flex-col px-4 sm:px-8 lg:px-12 xl:px-16">
            <div className="flex h-16 items-center justify-between">
              <span className="font-mono text-sm text-slate-400">
                <span className="text-emerald-400">$</span> cd <span className="text-cyan-400">~/sections</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 bg-white/5 text-slate-200 transition hover:border-cyan-400/50 hover:text-white"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
                  <path d="M6 6l12 12M18 6 6 18" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {menu.map((m, i) => {
                const current = active === (m.section ?? m.id);
                return (
                  <a
                    key={m.id}
                    href={`#${m.id}`}
                    onClick={(e) => goTo(e, m.id)}
                    className={`group flex items-center gap-4 rounded-2xl border p-4 transition sm:p-5 ${
                      current
                        ? "border-cyan-400/50 bg-cyan-400/10"
                        : "border-white/10 bg-white/3 hover:border-cyan-400/40 hover:bg-white/5"
                    }`}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300 ring-1 ring-cyan-400/20 transition group-hover:bg-cyan-400 group-hover:text-on-accent">
                      <Icon name={m.icon} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-slate-500">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-lg font-semibold text-white">{m.label}</span>
                      </span>
                      <span className="block truncate text-sm text-slate-400">{m.hint}</span>
                    </span>
                    <Icon name="arrow" className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </a>
                );
              })}
            </nav>

            <div className="mt-auto grid gap-3 py-8 sm:grid-cols-3">
              {[
                { icon: "mail", label: profile.email, href: `mailto:${profile.email}` },
                { icon: "phone", label: profile.phone, href: profile.phoneHref },
                { icon: "github", label: `@${profile.githubHandle}`, href: profile.github, external: true },
              ].map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-sm text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  <Icon name={c.icon} className="h-4 w-4 text-cyan-300" />
                  <span className="truncate">{c.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
