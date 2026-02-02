"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="size-8 shrink-0"
          aria-label="Light mode"
        >
          <Sun className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="size-8 shrink-0"
          aria-label="Dark mode"
        >
          <Moon className="size-4" />
        </Button>
      </div>
    );
  }

  const effective = resolvedTheme ?? "light";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant={effective === "light" ? "secondary" : "ghost"}
        size="icon"
        className="size-8 shrink-0 cursor-pointer"
        aria-label="Light mode"
        onClick={() => setTheme("light")}
      >
        <Sun className="size-4" />
      </Button>
      <Button
        variant={effective === "dark" ? "secondary" : "ghost"}
        size="icon"
        className="size-8 shrink-0 cursor-pointer"
        aria-label="Dark mode"
        onClick={() => setTheme("dark")}
      >
        <Moon className="size-4" />
      </Button>
    </div>
  );
}
