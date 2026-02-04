import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function WorkExperience() {
  const workExperience = [
    {
      slug: "luxoft" as const,
      title: "Javascript Engineer - Cisco Systems Inc.",
      description: "Luxoft",
      date: "Dec 2024 - Present",
    },
    {
      slug: "decathlon" as const,
      title: "Full Stack Developer",
      description: "Decathlon Romania",
      date: "Dec 2021 - Dec 2024",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Work Experience</h2>
      <div className="flex flex-col gap-3">
        {workExperience.map((item) => (
          <Link
            key={item.title}
            href={`/work-experience/${item.slug}`}
            className="block rounded-xl outline-none transition-colors hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background active:opacity-95"
          >
            <WorkExperienceItem
              title={item.title}
              description={item.description}
              date={item.date}
              className="cursor-pointer transition-colors hover:bg-accent/50 active:bg-accent/60"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WorkExperienceItem({
  title,
  description,
  date,
  className,
}: {
  title: string;
  description: string;
  date: string;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "flex flex-col gap-3 shadow-xs sm:flex-row sm:justify-between sm:gap-4 py-1",
        className
      )}
    >
      <CardHeader className="gap-1 flex-1 min-w-0 p-4 pb-0 sm:pb-6 sm:p-6">
        <CardTitle className="text-sm sm:text-base leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground flex shrink-0 items-center gap-2 px-4 pb-4 text-xs sm:justify-end sm:p-6 sm:text-sm">
        <p>{date}</p>
        <ChevronRight
          className="size-5 shrink-0 text-muted-foreground sm:size-4"
          aria-hidden
        />
      </CardContent>
    </Card>
  );
}
