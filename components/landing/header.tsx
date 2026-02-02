"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { ThemeDropdown } from "@/components/theme-dropdown";

export default function Header() {
  return (
    <div className="flex justify-between items-center border-b pb-4">
      <div className="flex flex-col min-w-0">
        <h1 className="text-base font-medium">Florentin-Cristian Dumitrache</h1>
        <h2 className="text-sm text-muted-foreground">Software Engineer</h2>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <div className="hidden sm:flex items-center gap-2">
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => {
              window.open("https://github.com/DumitracheFlorentin", "_blank");
            }}
          >
            GitHub
            <ArrowUpRightIcon className="size-4" />
          </Button>
          <Button
            variant="ghost"
            className="cursor-pointer"
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/florentin-dumitrache-cristian/",
                "_blank"
              );
            }}
          >
            LinkedIn
            <ArrowUpRightIcon className="size-4" />
          </Button>
          <Button variant="ghost" className="cursor-pointer" asChild>
            <Link href={`mailto:dumitracheflorentincristian@gmail.com`}>
              Email
              <ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <ThemeDropdown />
      </div>
    </div>
  );
}
