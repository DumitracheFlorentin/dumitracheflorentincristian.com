"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const options = [
  { value: "light" as const, label: "Light", icon: Sun },
  { value: "dark" as const, label: "Dark", icon: Moon },
  { value: "system" as const, label: "System", icon: Monitor },
] as const;

export function ThemeDropdown() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [open]);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="size-8 shrink-0"
        aria-label="Theme"
      >
        <Sun className="size-4" />
      </Button>
    );
  }

  const effective =
    resolvedTheme ?? (theme === "system" ? undefined : theme) ?? "light";
  const Icon = effective === "dark" ? Moon : Sun;

  return (
    <div className="relative shrink-0" ref={menuRef}>
      <Button
        variant="ghost"
        size="icon"
        className="size-8 shrink-0 cursor-pointer"
        aria-label="Theme"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Icon className="size-4" />
      </Button>
      {open && (
        <div
          className="absolute right-0 top-full z-50 mt-1 min-w-28 rounded-md border border-border bg-popover py-1 shadow-md"
          role="menu"
        >
          {options.map((opt) => {
            const isActive =
              opt.value === "system"
                ? theme === "system"
                : (resolvedTheme ?? theme) === opt.value;
            const OptIcon = opt.icon;
            return (
              <button
                key={opt.value}
                type="button"
                role="menuitem"
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 px-3 py-2 text-left text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground",
                  isActive && "bg-accent text-accent-foreground"
                )}
                onClick={() => {
                  setTheme(opt.value);
                  setOpen(false);
                }}
              >
                <OptIcon className="size-4 shrink-0" />
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
