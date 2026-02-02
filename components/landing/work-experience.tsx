import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function WorkExperience() {
  const workExperience = [
    {
      title: "Javascript Engineer - Cisco Systems Inc.",
      description: "Luxoft",
      date: "Dec 2024 - Present",
    },
    {
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
          <WorkExperienceItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
}

export function WorkExperienceItem({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) {
  return (
    <Card className="flex flex-col gap-3 shadow-xs sm:flex-row sm:justify-between sm:gap-4 py-1">
      <CardHeader className="gap-1 flex-1 p-4 pb-0 sm:pb-6 sm:p-6">
        <CardTitle className="text-sm sm:text-base leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground flex shrink-0 items-center px-4 pb-4 text-xs sm:justify-center sm:p-6 sm:text-sm">
        <p>{date}</p>
      </CardContent>
    </Card>
  );
}
