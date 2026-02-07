import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ThemeDropdown } from "@/components/theme-dropdown";

const COMPANIES = ["luxoft", "decathlon"] as const;
type CompanySlug = (typeof COMPANIES)[number];

type SkillsEntry = string[] | { label: string; skills: string[] }[];

/**
 * Returns duration string (e.g. "1 yr 2 mo") from startDate to endDate or today if endDate is null.
 * Dates in YYYY-MM-DD format.
 */
function getDuration(startDate: string, endDate: string | null): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const yr = years === 1 ? "1 yr" : `${years} yrs`;
  const mo = months === 1 ? "1 mo" : `${months} mo`;
  if (years === 0) return mo;
  if (months === 0) return yr;
  return `${yr} ${mo}`;
}

type CompanyDetails = {
  title: string;
  company: string;
  date: string;
  location?: string;
  /** Start date YYYY-MM-DD; used with endDate to compute duration when present */
  startDate: string;
  /** End date YYYY-MM-DD; null = still working (duration computed to today) */
  endDate: string | null;
  description: string[];
  skills: SkillsEntry;
};

const DETAILS: Record<CompanySlug, CompanyDetails> = {
  luxoft: {
    title: "Javascript Engineer - Cisco Systems Inc.",
    company: "Luxoft",
    date: "Dec 2024 - Present",
    startDate: "2024-12-01",
    endDate: null,
    location: "Bucharest, Romania · Remote",
    description: [
      "Designed and implemented intuitive UI features for Cisco's Nexus Dashboard Fabric Controller (NDFC), enabling enhanced visibility and control over network performance and health.",
      "Performed system maintenance, implemented bug fixes, and optimized code to enhance overall performance and reliability.",
      "Refactored the page used for appending switches to update groups, making it easier to upgrade or roll back to previous or future versions.",
      "Implemented UI to match design mockups with pixel-perfect accuracy.",
      "Improved user experience by integrating WebSockets to push updates to specific sections of the interface in real time, eliminating the need for full page refreshes when data changes.",
      "Collaborated effectively in a large team, maintaining clear and professional communication with backend and design teams and staying available to support colleagues whenever needed.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Systems design",
      "Redux",
      "Git",
      "Sass",
      "GitHub",
      "WebSockets",
    ],
  },
  decathlon: {
    title: "Full Stack Developer",
    company: "Decathlon România",
    date: "Dec 2021 - Dec 2024",
    location: "Bucharest, Romania · Hybrid",
    startDate: "2021-12-01",
    endDate: "2024-12-01",
    description: [
      "Nuxt3 Migration: Led migration of Decathlon's internal apps from Nuxt2 to Nuxt3, enhancing performance and features.",
      "Testing Implementation: Developed end-to-end tests with Cypress and unit tests with Jest and Vitest, boosting app reliability.",
      "TypeScript Server Migration: Migrated server-side code from JavaScript to TypeScript, improving code robustness.",
      "Backend and Frontend Optimization: Refactored and optimized internal apps, increasing performance and efficiency.",
      "SWIFT Transactions: Managed SWIFT transaction processing for the financial department, improving data utilization.",
    ],
    skills: [
      {
        label: "Frontend",
        skills: ["VueJS", "NuxtJS", "SvelteJS", "Typescript"],
      },
      {
        label: "Backend",
        skills: [
          "NodeJS",
          "ExpressJS",
          "Nitro",
          "GraphQL",
          "PostgreSQL",
          "Typescript",
        ],
      },
      {
        label: "DevOps/Infrastructure",
        skills: ["Docker", "DigitalOcean", "Heroku", "GCP"],
      },
      { label: "Testing", skills: ["Cypress", "Jest", "Vitest"] },
    ],
  },
};

function isValidCompany(slug: string): slug is CompanySlug {
  return COMPANIES.includes(slug as CompanySlug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> {
  const { company } = await params;
  if (!isValidCompany(company)) {
    return { title: "Not Found" };
  }
  const details = DETAILS[company];
  return {
    title: `Work at ${details.company} | Florentin-Cristian Dumitrache`,
    description: `${details.title} at ${details.company} (${details.date}).`,
  };
}

export default async function WorkExperienceCompanyPage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  if (!isValidCompany(company)) {
    notFound();
  }
  const details = DETAILS[company];
  const duration = getDuration(details.startDate, details.endDate);

  return (
    <div className="mx-6 flex flex-col gap-8 sm:mx-8 md:mx-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to home
        </Link>
        <ThemeDropdown />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-base font-medium sm:text-lg">{details.title}</h1>
          <p className="text-sm text-muted-foreground">
            {details.company} · {details.date} · {duration}
          </p>
          {details.location != null && (
            <p className="text-sm text-muted-foreground">{details.location}</p>
          )}
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-foreground">Description</h2>
          <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
            {details.description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-sm font-medium text-foreground">Skills</h2>
          {Array.isArray(details.skills) &&
          details.skills.length > 0 &&
          typeof details.skills[0] === "object" &&
          details.skills[0] !== null &&
          "label" in details.skills[0] ? (
            <div className="flex flex-col gap-4">
              {(details.skills as { label: string; skills: string[] }[]).map(
                (group) => (
                  <div key={group.label} className="flex flex-col gap-2">
                    <span className="text-xs font-medium text-muted-foreground">
                      {group.label}:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {(details.skills as string[]).map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-border bg-muted/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
