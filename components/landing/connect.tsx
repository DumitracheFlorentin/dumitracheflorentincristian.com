"use client";

import { Button } from "@/components/ui/button";
import { Linkedin, Mail } from "lucide-react";

const EMAIL = "dumitracheflorentincristian@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/florentin-dumitrache-cristian/";

export default function Connect() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Connect</h2>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          Feel free to connect with me. I&apos;m always open to new
          opportunities and collaborations.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Button
            variant="secondary"
            className="order-2 cursor-pointer rounded-full sm:order-1"
            asChild
          >
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Linkedin className="size-4" />
              LinkedIn
            </a>
          </Button>
          <a
            href={`mailto:${EMAIL}`}
            className="order-1 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:order-2"
          >
            <Mail className="size-4" />
            {EMAIL}
          </a>
        </div>
      </div>
    </div>
  );
}
