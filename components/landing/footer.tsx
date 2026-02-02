import { ThemeToggle } from "@/components/theme-toggle";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
      <p className="text-xs sm:text-sm text-muted-foreground min-w-0 shrink-0">
        © {year} Florentin-Cristian Dumitrache. All rights reserved.
      </p>
      <div className="flex min-w-0 flex-1 justify-end">
        <ThemeToggle />
      </div>
    </footer>
  );
}
