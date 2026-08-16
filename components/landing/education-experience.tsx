import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function EducationExperience() {
  const educationExperience = [
    {
      id: 1,
      university: "Faculty of Mathematics and Computer Science",
      degree: "Master's Degree in Database and Software Technologies",
      date: "Oct 2023 - Jul 2025",
      city: "Bucharest",
      country: "Romania",
    },
    {
      id: 2,
      university: "Faculty of Mathematics and Computer Science",
      degree: "Bachelor's Degree in Computer Engineering",
      date: "Oct 2019 - Jul 2023",
      city: "Bucharest",
      country: "Romania",
    },
    {
      id: 3,
      university: "National High School „Constantin Carabella”",
      degree: "High School Diploma in Computer Science and Mathematics",
      date: "Oct 2015 - Jun 2019",
      city: "Târgoviște",
      country: "Romania",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Education Experience</h2>
      <div className="flex flex-col gap-3">
        {educationExperience.map((item) => (
          <EducationExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export function EducationExperienceItem({
  university,
  degree,
  date,
  city,
  country,
}: {
  university: string;
  degree: string;
  date: string;
  city: string;
  country: string;
}) {
  return (
    <Card className="flex flex-col gap-3 shadow-xs sm:flex-row sm:justify-between sm:gap-4 py-1">
      <CardHeader className="gap-1 flex-1 p-4 pb-0 sm:pb-6 sm:p-6">
        <CardTitle className="text-sm sm:text-base font-medium leading-tight">
          {degree}
        </CardTitle>
        <CardDescription className="text-sm">
          {university}
          <span className="mt-0.5 block text-xs">
            {city}, {country}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="text-muted-foreground flex shrink-0 items-center px-4 pb-4 text-xs sm:justify-center sm:p-6 sm:text-sm">
        <p>{date}</p>
      </CardContent>
    </Card>
  );
}
