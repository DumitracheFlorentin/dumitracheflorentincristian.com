import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
};

const PROJECTS: ProjectEntry[] = [
  {
    id: "1",
    title: "CircleResume",
    description:
      "Online resume builder with live preview, templates, and PDF export.",
    image: "/projects/circleResume/circle-resume.png",
    href: "/projects/circle-resume",
  },
];

function ProjectCard({ project }: { project: ProjectEntry }) {
  const cardContent = (
    <Card className="flex h-full flex-col overflow-hidden p-0 transition-colors hover:bg-accent/30">
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
      </div>
      <CardHeader className="flex-1 gap-1.5 px-4 pb-2 sm:px-5">
        <CardTitle className="text-sm font-medium leading-tight sm:text-base">
          {project.title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs sm:text-sm mb-4 mt-1">
          {project.description}
        </CardDescription>
      </CardHeader>
    </Card>
  );

  if (project.href) {
    return (
      <Link
        href={project.href}
        className="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-xl"
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
