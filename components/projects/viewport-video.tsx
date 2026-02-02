"use client";

import { useEffect, useRef } from "react";

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
      { threshold: 0.25, rootMargin: "0px" }
    );

    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`relative aspect-video w-full bg-muted ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        // controls
        className="h-full w-full object-cover"
        aria-label={ariaLabel}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
