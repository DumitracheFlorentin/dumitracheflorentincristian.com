import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function NotFound() {
  return (
    <div className="mx-6 flex flex-col gap-8 sm:mx-8 md:mx-0">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
        >
          ← Back to home
        </Link>
        <ThemeToggle />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 text-center h-[calc(100vh-10rem)]">
        <p className="text-6xl font-medium tabular-nums text-foreground sm:text-7xl">
          404
        </p>
        <h1 className="text-base font-medium text-foreground sm:text-lg">
          Page not found
        </h1>
        <p className="max-w-[40ch] text-sm text-muted-foreground">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-2 inline-flex w-fit rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Go to home
        </Link>
      </div>
    </div>
  );
}
