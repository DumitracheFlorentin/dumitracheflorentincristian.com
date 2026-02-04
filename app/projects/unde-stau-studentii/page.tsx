import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeDropdown } from "@/components/theme-dropdown";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ViewportVideo } from "@/components/projects/viewport-video";

export const metadata: Metadata = {
  title: "Unde Stau Studentii | Florentin-Cristian Dumitrache",
  description:
    "Platform for exploring universities, faculties and dorms in Romania, with real student reviews and experiences. Next.js, TypeScript, Tailwind, Better Auth, Drizzle.",
};

const FEATURES = [
  {
    title: "Explore universities and faculties",
    description:
      "Lists of universities and faculties with search, city filters and sorting. Hierarchical navigation: university → faculty → dorms.",
  },
  {
    title: "Dorms and reviews",
    description:
      "Each dorm has a dedicated page with description, address, transport (metro, bus), nearby locations and a reviews section from students.",
  },
  {
    title: "Reviews and feedback",
    description:
      "Users can leave reviews (rating and comment), optionally anonymous. Feedback form for suggestions and reporting issues.",
  },
  {
    title: "Admin dashboard",
    description:
      "Faculty representatives have access to a dashboard where they can manage dorms: add, edit, list, with statistics (number of dorms, reviews).",
  },
  {
    title: "Authentication and account",
    description:
      "Sign up, login, user profile, password change, avatar upload. Roles (student vs. faculty representative) for dashboard access control.",
  },
] as const;

const KEY_SCREENS = [
  {
    title: "Home page",
    description:
      "Hero with CTA to universities and dorms, statistics (universities, faculties, dorms, reviews), sections for popular universities and faculties, partners.",
    alt: "Unde Stau Studentii home page",
    video: "/projects/unde-stau-studentii/home.mp4",
  },
  {
    title: "Universities list",
    description:
      "All universities with search, city filters and sorting (name, city, reviews, faculties, dorms). Cards with logo, name, city, statistics.",
    alt: "Universities list",
    video: "/projects/unde-stau-studentii/universities.mp4",
  },
  {
    title: "Faculty → Dorms",
    description:
      "A faculty page with its list of dorms. Breadcrumb navigation: University → Faculty → Dorms. Link to each dorm.",
    alt: "Faculty and list of dorms",
    video: "/projects/unde-stau-studentii/faculty.mp4",
  },
  {
    title: "Dorm page",
    description:
      "Dorm details: name, description, address, metro, bus, nearby locations. Reviews section with rating and comments. Buttons for login/review and feedback.",
    alt: "Dorm page with reviews",
    video: "/projects/unde-stau-studentii/dorm.mp4",
  },
  {
    title: "Dashboard",
    description:
      "For faculty representatives: statistics (total dorms, reviews), table of dorms (name, city, capacity, validated, actions). Add and edit dorms.",
    alt: "Dorms dashboard",
    video: "/projects/unde-stau-studentii/dashboard.mp4",
  },
] as const;

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Better Auth",
  "Drizzle ORM",
  "Vercel Blob",
  "PostgreSQL (Neon / Supabase)",
  "Framer Motion",
  "Zod",
  "React Hook Form",
  "Shadcn UI",
];

export default function UndeStauStudentiiProjectPage() {
  return (
    <div className="mx-6 flex flex-col gap-14 sm:mx-8 md:mx-0 sm:gap-20">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          ← Back to home
        </Link>
        <ThemeDropdown />
      </div>

      {/* Hero */}
      <section className="flex flex-col gap-8 lg:gap-12">
        <div className="min-w-0 space-y-1 lg:text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Project
          </p>
          <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
            <a
              href="https://undestaustudentii.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Unde Stau Studentii
              <ArrowUpRight className="size-5 shrink-0" aria-hidden />
            </a>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-auto lg:max-w-xl">
            Find the right dorm for you: explore universities, faculties and
            dorms in Romania, with real student reviews.
          </p>
        </div>
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-sm lg:rounded-3xl">
          <Image
            src="/projects/unde-stau-studentii/landing.png"
            alt="Unde Stau Studentii home page"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </section>

      {/* Overview */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
          Overview
        </h2>
        <Card className="border-border bg-muted/30 p-5 shadow-none sm:p-6">
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            Unde Stau Studentii is a web app that helps students find dorms by
            university and faculty. Users can explore universities and
            faculties, view dorms with details (address, transport, nearby
            locations) and read real reviews. Faculty representatives can manage
            dorms via a dashboard. The project includes authentication, feedback
            and privacy policies.
          </p>
        </Card>
      </section>

      {/* Features */}
      <section>
        <h2 className="mb-5 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:mb-6 sm:text-base">
          Features
        </h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {FEATURES.map((feature) => (
            <li key={feature.title}>
              <Card className="h-full border-border p-4 shadow-sm transition-colors hover:bg-muted/20 sm:p-5">
                <CardHeader className="gap-1.5 p-0">
                  <CardTitle className="text-sm font-medium leading-tight sm:text-base">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      {/* Key screens */}
      <section>
        <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:mb-8 sm:text-base">
          Key screens
        </h2>
        <div className="flex flex-col gap-8 sm:gap-10">
          {KEY_SCREENS.map((screen, index) => (
            <article
              key={screen.title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="border-b border-border p-5 sm:p-6">
                <span className="text-xs font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-base font-medium text-foreground sm:text-lg">
                  {screen.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {screen.description}
                </p>
              </div>
              {"video" in screen && screen.video && (
                <ViewportVideo src={screen.video} ariaLabel={screen.alt} />
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Tech stack */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
          Tech stack
        </h2>
        <Card className="border-border bg-muted/30 p-5 shadow-none sm:p-6">
          <p className="mb-4 max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
            Built with modern technologies for performance and maintainability.
          </p>
          <div className="flex flex-wrap gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </section>

      {/* Project details & CTA */}
      <section>
        <Card className="border-border bg-muted/20 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
                Project details
              </h2>
              <p className="mt-2 text-sm text-foreground sm:text-base">
                Solo project – design and full-stack development.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://undestaustudentii.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Live app
                <ArrowUpRight className="size-4 shrink-0" aria-hidden />
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
