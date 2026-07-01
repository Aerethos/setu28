'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Overlay = 'bottom' | 'top' | 'full' | 'soft';

const OVERLAY_CLASS: Record<Overlay, string> = {
  bottom: 'bg-gradient-to-t from-abyss via-abyss/50 to-transparent',
  top: 'bg-gradient-to-b from-abyss via-abyss/40 to-transparent',
  full: 'bg-gradient-to-b from-abyss/70 via-abyss/55 to-abyss/85',
  soft: 'bg-abyss/45',
};

export default function CoverImage({
  src,
  alt,
  overlay = 'bottom',
  priority = false,
  parallax = true,
  className = '',
}: {
  src: string;
  alt: string;
  overlay?: Overlay;
  priority?: boolean;
  parallax?: boolean;
  className?: string;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return;
    const node = layerRef.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame: number;

    const update = () => {
      const parent = node.parentElement;
      if (parent) {
        const rect = parent.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        const progress = center / window.innerHeight;
        const translate = Math.max(-1, Math.min(1, progress)) * -36;
        node.style.transform = `translate3d(0, ${translate}px, 0) scale(1.15)`;
      }
      frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [parallax]);

  return (
    <div className={`relative h-full w-full overflow-hidden bg-prussian ${className}`}>
      <div
        ref={layerRef}
        className="absolute inset-0"
        style={parallax ? undefined : { transform: 'scale(1.03)' }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'contrast(1.08) saturate(0.95) brightness(0.9)' }}
        />
      </div>
      <div className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} />
    </div>
  );
}
