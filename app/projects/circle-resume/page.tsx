import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoadingImage } from "@/components/projects/loading-image";
import { ViewportVideo } from "@/components/projects/viewport-video";

export const metadata: Metadata = {
  title: "CircleResume | Florentin-Cristian Dumitrache",
  description:
    "Resume and cover letter builder with live preview, multiple templates, and PDF export. Built with Next.js, TypeScript, and Tailwind.",
};

const FEATURES = [
  {
    title: "Resume builder",
    description:
      "Create and edit resumes with sections for profile, contact, summary, employment, education, skills, languages, and custom blocks. Drag-and-drop reordering.",
  },
  {
    title: "Cover letters",
    description:
      "Dedicated editor for cover letters with template selection and live preview, aligned with the resume experience.",
  },
  {
    title: "Templates",
    description:
      "Multiple resume and cover letter templates (e.g. Classic, Modern, Professional) with consistent styling and PDF output.",
  },
  {
    title: "Live preview & PDF export",
    description:
      "Live preview updates as you type. One-click export to PDF for download or print.",
  },
  {
    title: "Account & subscription",
    description:
      "Sign up, profile, password change, avatar upload, and optional Pro plan with billing and subscription management.",
  },
] as const;

const KEY_SCREENS = [
  {
    title: "Dashboard",
    description:
      "Users see all their resumes (and cover letters if applicable). They can create new items, open, or manage them.",
    alt: "Resume list and dashboard",
    video: "/projects/circleResume/dashboard3.mp4",
  },
  {
    title: "Resume editor",
    description:
      "The main editor splits into an edit panel (sections, fields, template and typography options) and a live preview. Changes reflect immediately.",
    alt: "Resume editor with edit panel and preview",
    video: "/projects/circleResume/resume-editor.mp4",
  },
  {
    title: "Template selection",
    description:
      "Users switch between resume (and cover letter) templates without losing content. Each template has a distinct layout and style.",
    alt: "Resume template selector",
    video: "/projects/circleResume/template-selection.mp4",
  },
  {
    title: "Cover letter editor",
    description:
      "Cover letters are edited in a dedicated flow with template choice and live preview, similar to the resume editor.",
    alt: "Cover letter editor",
    video: "/projects/circleResume/cover-letter.mp4",
  },
  {
    title: "PDF export",
    description:
      "Resumes and cover letters can be exported to PDF from the preview. The export reflects the selected template and current content.",
    alt: "PDF export preview",
    video: "/projects/circleResume/pdf-export.mp4",
  },
  {
    title: "Account settings",
    description:
      "Account page includes profile info, avatar, email, name, password change, billing or Pro subscription card, and danger zone (e.g. delete account).",
    alt: "Account settings and billing",
    video: "/projects/circleResume/account.mp4",
  },
] as const;

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Better Auth",
  "Drizzle ORM",
  "PostgreSQL",
  "Polar",
  "Sentry",
  "Cloudflare",
  "Vercel",
  "Inngest",
  "Resend",
];

// function ImagePlaceholder({ alt }: { alt: string }) {
//   return (
//     <div
//       className="flex aspect-video w-full items-center justify-center bg-muted text-sm text-muted-foreground"
//       role="img"
//       aria-label={alt}
//     >
//       Screenshot placeholder
//     </div>
//   );
// }

export default function MakeYourResumeProjectPage() {
  return (
    <div className="mx-6 flex flex-col gap-14 sm:mx-8 md:mx-0 sm:gap-20">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          ← Back to home
        </Link>
        <ThemeToggle />
      </div>

      {/* Hero – mobile: stacked left-aligned; desktop: centered, image full width below */}
      <section className="flex flex-col gap-8 lg:gap-12">
        <div className="min-w-0 space-y-1 lg:text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Project
          </p>
          <h1 className="text-2xl font-medium tracking-tight sm:text-3xl">
            <a
              href="https://circleresume.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
            >
              CircleResume
              <ArrowUpRight className="size-5 shrink-0" aria-hidden />
            </a>
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed sm:text-lg lg:mx-auto lg:max-w-xl">
            Build resumes and cover letters with live preview, pick a template,
            and export to PDF.
          </p>
        </div>
        <LoadingImage
          src="/projects/circleResume/circleresume-landing.png"
          alt="Resume editor with live preview"
          sizes="100vw"
          priority
          containerClassName="rounded-2xl border border-border shadow-sm lg:rounded-3xl"
        />
      </section>

      {/* Overview */}
      <section>
        <h2 className="mb-4 text-sm font-medium uppercase tracking-wider text-muted-foreground sm:text-base">
          Overview
        </h2>
        <Card className="border-border bg-muted/30 p-5 shadow-none sm:p-6">
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground sm:text-base">
            CircleResume is a web app that lets users create and customize
            resumes and cover letters. They can choose from several templates,
            edit content in real time with a live preview, and export to PDF.
            The app includes authentication, account settings, and an optional
            Pro subscription. The project demonstrates full-stack development
            with a focus on UX and responsive design.
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
          <p className="max-w-[65ch] text-sm leading-relaxed text-muted-foreground">
            Built with modern web technologies for performance and
            maintainability.
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
                href="https://circleresume.com"
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
