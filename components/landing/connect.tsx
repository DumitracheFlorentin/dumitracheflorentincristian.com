"use client";

import { Github, Linkedin } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Link from "next/link";

const EMAIL = "dumitracheflorentincristian@gmail.com";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/florentin-dumitrache-cristian/";
const GITHUB_URL = "https://github.com/DumitracheFlorentin";
const CV_HREF = encodeURI("/Resume - Florentin-Cristian Dumitrache.pdf");

export default function Connect() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-base font-medium sm:text-lg">Connect</h2>

      <div className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">
          Feel free to connect with me. I&apos;m always open to new
          opportunities and collaborations.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <Button
            variant="outline"
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
          <Button
            variant="outline"
            className="order-3 cursor-pointer rounded-full sm:order-2"
            asChild
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <Github className="size-4" />
              GitHub
            </a>
          </Button>
          <Link
            href={`mailto:${EMAIL}`}
            className="order-1 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium text-foreground shadow-xs transition-colors hover:bg-accent hover:text-accent-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 sm:order-3"
          >
            <Mail className="size-4 shrink-0" />
            Email
          </Link>
          <Button
            variant="outline"
            className="order-4 cursor-pointer rounded-full"
            asChild
          >
            <a
              href={CV_HREF}
              download
              className="inline-flex items-center gap-2"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
