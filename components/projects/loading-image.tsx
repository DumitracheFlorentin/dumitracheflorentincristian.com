"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

type LoadingImageProps = ImageProps & {
  containerClassName?: string;
};

export function LoadingImage({
  containerClassName = "",
  className = "",
  ...props
}: LoadingImageProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden bg-muted ${containerClassName}`}
    >
      {!isReady && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-muted"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3 text-muted-foreground">
            <div className="size-8 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span className="text-xs font-medium">Loading image…</span>
          </div>
        </div>
      )}

      <Image
        {...props}
        fill
        className={`object-cover transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={() => setIsReady(true)}
        onError={() => setIsReady(true)}
      />
    </div>
  );
}
