import Image from "next/image";
import Link from "next/link";
import { ImageIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export type ProjectEntry = {
  id: string;
  title: string;
  description: string;
  /** Path under /public or URL. Omit for placeholder. */
  image?: string;
  /** Optional project or demo URL */
  href?: string;
  /** When set, card is non-clickable and shows "In progress" badge with muted styling */
  status?: "in progress";
};

const PROJECTS: ProjectEntry[] = [
  {
    id: "1",
    title: "Circle Resume",
    description:
      "Online resume builder with live preview, templates, and PDF export.",
    image: "/projects/circleResume/circle-resume.png",
    href: "/projects/circle-resume",
  },
  {
    id: "2",
    title: "Unde Stau Studentii",
    description:
      "A platform for students to find reviews about dorms and other student accomodations.",
    image: "/projects/unde-stau-studentii/landing.png",
    href: "/projects/unde-stau-studentii",
  },
];

function ProjectCard({ project }: { project: ProjectEntry }) {
  const inProgress = project.status === "in progress";

  const cardContent = (
    <Card
      className={
        inProgress
          ? "flex h-full cursor-default flex-col overflow-hidden p-0 opacity-90 transition-colors"
          : "flex h-full flex-col overflow-hidden p-0 transition-colors hover:bg-accent/30"
      }
    >
      <div className="relative aspect-video w-full shrink-0 bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted-foreground">
            <ImageIcon className="size-10 sm:size-12" aria-hidden />
          </div>
        )}
        {inProgress && (
          <span
            className="absolute right-2 top-2 rounded-md border border-border bg-muted/90 px-2 py-0.5 text-xs font-medium text-muted-foreground"
            aria-hidden
          >
            In progress
          </span>
        )}
      </div>
      <CardHeader className="flex-1 gap-1.5 px-4 pb-2 sm:px-5">
        <CardTitle className="text-sm font-medium leading-tight sm:text-base">
          {project.title}
        </CardTitle>
        <CardDescription className="mb-4 mt-1 line-clamp-2 text-xs sm:text-sm">
          {project.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );

  if (inProgress) {
    return <div className="h-full">{cardContent}</div>;
  }

  if (project.href) {
    return (
      <Link
        href={project.href}
        className="group block h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="h-full">{cardContent}</div>;
}

export default function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">My Projects</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
