"use client";

import { useRef, useState } from "react";
import { skills } from "../data";

type Token = { text: string; className: string };
type Line = { tokens: Token[]; category?: number };

const key = (text: string): Token => ({ text, className: "text-cyan-300" });
const val = (text: string): Token => ({ text, className: "text-amber-200" });
const punct = (text: string): Token => ({ text, className: "text-slate-500" });

function buildYaml(): Line[] {
  const lines: Line[] = [
    { tokens: [key("apiVersion"), punct(": "), val("portfolio.dev/v1")] },
    { tokens: [key("kind"), punct(": "), val("SkillSet")] },
    { tokens: [key("metadata"), punct(":")] },
    { tokens: [punct("  "), key("name"), punct(": "), val("ramesh-horakeri")] },
    { tokens: [punct("  "), key("namespace"), punct(": "), val("devops")] },
    { tokens: [punct("  "), key("labels"), punct(":")] },
    { tokens: [punct("    "), key("role"), punct(": "), val("devops-engineer")] },
    { tokens: [punct("    "), key("experience"), punct(": "), val('"4+ years"')] },
    { tokens: [key("spec"), punct(":")] },
    { tokens: [punct("  "), key("categories"), punct(":")] },
  ];
  skills.forEach((group, i) => {
    lines.push({
      category: i,
      tokens: [punct("    - "), key("name"), punct(": "), { text: group.category, className: "text-emerald-300 font-semibold" }],
    });
    lines.push({ tokens: [punct("      "), key("tools"), punct(":")] });
    for (const tool of group.tools) {
      lines.push({ tokens: [punct("        - "), val(tool)] });
    }
  });
  lines.push({
    tokens: [key("status"), punct(": "), punct("{ "), key("phase"), punct(": "), { text: "Running", className: "text-emerald-400" }, punct(" }")],
  });
  return lines;
}

const yaml = buildYaml();
const totalTools = skills.reduce((n, g) => n + g.tools.length, 0);

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p>
      <span className="text-emerald-400">ramesh@devops</span>
      <span className="text-slate-500">:</span>
      <span className="text-cyan-400">~</span>
      <span className="text-slate-500">$ </span>
      <span className="text-slate-100">{cmd}</span>
    </p>
  );
}

export default function SkillsTerminal() {
  const [active, setActive] = useState(0);
  const viewerRef = useRef<HTMLDivElement>(null);
  const anchors = useRef<(HTMLDivElement | null)[]>([]);

  const jumpTo = (i: number) => {
    const viewer = viewerRef.current;
    const el = anchors.current[i];
    if (!viewer || !el) return;
    setActive(i);
    viewer.scrollTo({ top: el.offsetTop - 8, behavior: "smooth" });
  };

  const onScroll = () => {
    const viewer = viewerRef.current;
    if (!viewer) return;
    const top = viewer.scrollTop + 16;
    let current = 0;
    anchors.current.forEach((el, i) => {
      if (el && el.offsetTop <= top) current = i;
    });
    setActive(current);
  };

  return (
    <div className="force-dark glow-card relative overflow-hidden rounded-2xl border border-white/10 bg-surface/95 shadow-2xl shadow-cyan-950/40">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-amber-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <span className="ml-3 truncate font-mono text-xs text-slate-500">kubectl — context: devops — skills.yaml</span>
      </div>

      {/* Context commands */}
      <div className="overflow-x-auto border-b border-white/10 px-5 py-4 font-mono text-[13px] leading-7">
        <Prompt cmd="kubectl config get-contexts" />
        <table className="whitespace-nowrap text-left">
          <thead className="text-slate-500">
            <tr>
              <th className="pr-8 font-normal">CURRENT</th>
              <th className="pr-8 font-normal">NAME</th>
              <th className="pr-8 font-normal">CLUSTER</th>
              <th className="font-normal">NAMESPACE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="pr-8 text-emerald-400">*</td>
              <td className="pr-8 font-semibold text-emerald-300">devops</td>
              <td className="pr-8 text-slate-300">ramesh-horakeri</td>
              <td className="text-slate-300">skills</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-2">
          <Prompt cmd="kubectl get skills -n devops -o yaml" />
        </div>
        <p className="text-slate-500">
          # {skills.length} categories · {totalTools} tools
        </p>
      </div>

      {/* Viewer */}
      <div className="grid lg:grid-cols-[260px_1fr]">
        {/* Category index */}
        <nav
          aria-label="Skill categories"
          className="flex gap-2 overflow-x-auto border-b border-white/10 p-3 lg:block lg:max-h-[560px] lg:space-y-0.5 lg:overflow-y-auto lg:border-r lg:border-b-0"
        >
          <p className="hidden px-3 pb-2 pt-1 font-mono text-[11px] uppercase tracking-wider text-slate-500 lg:block">
            Categories
          </p>
          {skills.map((group, i) => (
            <button
              key={group.category}
              type="button"
              onClick={() => jumpTo(i)}
              className={`flex shrink-0 items-center justify-between gap-3 whitespace-nowrap rounded-lg px-3 py-1.5 text-left font-mono text-xs transition lg:w-full ${
                active === i
                  ? "bg-cyan-400/15 text-cyan-200 ring-1 ring-cyan-400/30"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <span className="truncate">{group.category}</span>
              <span className="text-[10px] text-slate-500">{group.tools.length}</span>
            </button>
          ))}
        </nav>

        {/* YAML */}
        <div
          ref={viewerRef}
          onScroll={onScroll}
          className="relative max-h-[480px] overflow-auto py-3 font-mono text-[13px] leading-6 lg:max-h-[560px]"
        >
          {yaml.map((line, n) => {
            const isActive = line.category !== undefined && line.category === active;
            return (
              <div
                key={n}
                ref={
                  line.category !== undefined
                    ? (el) => {
                        anchors.current[line.category!] = el;
                      }
                    : undefined
                }
                className={`flex whitespace-pre pr-5 ${isActive ? "bg-cyan-400/10" : ""}`}
              >
                <span className="w-12 shrink-0 select-none pr-4 text-right text-slate-600">{n + 1}</span>
                <span>
                  {line.tokens.map((t, j) => (
                    <span key={j} className={t.className}>
                      {t.text}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
