const LANGUAGES = [
  { name: "Romanian", level: "Native" },
  { name: "English", level: "Intermediate" },
] as const;

export default function Languages() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Languages</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {LANGUAGES.map((language) => (
          <div
            key={language.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border bg-card px-4 py-3 transition-colors hover:bg-accent/20"
          >
            <div className="min-w-0 flex-1">
              <p className="font-medium text-foreground">{language.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {language.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
