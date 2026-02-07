"use client";

import { useEffect, useRef, useState } from "react";

type ViewportVideoProps = {
  src: string;
  ariaLabel: string;
  className?: string;
};

export function ViewportVideo({
  src,
  ariaLabel,
  className = "",
}: ViewportVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const video = videoRef.current;
    if (!wrapper || !video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay may be blocked (e.g. unmuted); ignore
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.25, rootMargin: "0px" },
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative aspect-video w-full overflow-hidden bg-muted ${className}`}
    >
      {/* Loading placeholder */}
      {!isReady && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-muted"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <div className="size-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span className="text-xs font-medium">Loading video…</span>
          </div>
        </div>
      )}

      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={`h-full w-full object-cover transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}
        aria-label={ariaLabel}
        onCanPlay={() => setIsReady(true)}
        onError={() => setIsReady(true)}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
