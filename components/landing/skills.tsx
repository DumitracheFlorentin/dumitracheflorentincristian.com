"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Info } from "lucide-react";

const SSR_TOOLTIP =
  "Server-Side Rendering: frameworks (e.g. Next.js, Nuxt) that render pages on the server for better SEO, faster first load, and improved performance.";

const SKILL_GROUPS = [
  {
    id: "ssr",
    label: "SSR",
    skills: [
      { name: "NextJS", experience: "4+ years" },
      { name: "NuxtJS", experience: "3+ years" },
    ],
  },

  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "JavaScript", experience: "5+ years" },
      { name: "React", experience: "4+ years" },
      { name: "Vue", experience: "3+ years" },
      { name: "TypeScript", experience: "3+ years" },
    ],
  },
  {
    id: "css",
    label: "CSS",
    skills: [
      { name: "Tailwind CSS", experience: "3+ years" },
      { name: "Bootstrap", experience: "2+ years" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "NodeJS", experience: "4+ years" },
      { name: "Express", experience: "2+ years" },
      { name: "Rust", experience: "~1 year" },
    ],
  },

  {
    id: "databases",
    label: "Databases",
    skills: [
      { name: "PostgreSQL", experience: "3+ years" },
      { name: "MongoDB", experience: "2+ years" },
    ],
  },
] as const;

/** Simple Icons slug for cdn.simpleicons.org (empty = use first letter fallback) */
const SKILL_ICON_SLUGS: Record<string, string> = {
  NextJS: "nextdotjs",
  NuxtJS: "vuedotjs",
  JavaScript: "javascript",
  React: "react",
  Vue: "vuedotjs",
  TypeScript: "typescript",
  "Tailwind CSS": "tailwindcss",
  Bootstrap: "bootstrap",
  NodeJS: "nodedotjs",
  Express: "express",
  Rust: "rust",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
};

function SkillIcon({ name }: { name: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const slug = SKILL_ICON_SLUGS[name];
  const color = mounted && resolvedTheme === "dark" ? "e2e8f0" : "475569";

  if (slug) {
    return (
      <img
        src={`https://cdn.simpleicons.org/${slug}/${color}`}
        alt=""
        className="size-6 shrink-0"
        width={32}
        height={32}
      />
    );
  }

  return (
    <span
      className="flex size-8 shrink-0 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground"
      aria-hidden
    >
      {name.charAt(0)}
    </span>
  );
}

export default function Skills() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Skills</h2>
      <div className="flex flex-col gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.id} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
              {group.label}
              {group.id === "ssr" && (
                <span className="group/tooltip relative hidden sm:inline-flex">
                  <Info
                    className="size-3.5 shrink-0 text-muted-foreground"
                    aria-label="SSR: Server-Side Rendering explanation"
                  />
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 top-full z-10 mt-1.5 w-64 -translate-x-1/2 rounded-md border border-border bg-popover px-2.5 py-1.5 text-xs leading-snug text-popover-foreground shadow-md opacity-0 transition-opacity duration-150 group-hover/tooltip:opacity-100 sm:w-72"
                  >
                    {SSR_TOOLTIP}
                  </span>
                </span>
              )}
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent/20"
                >
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground">{skill.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {skill.experience}
                    </p>
                  </div>
                  <div className="flex shrink-0 items-center justify-center">
                    <SkillIcon name={skill.name} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
