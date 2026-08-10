import type { ReactNode } from 'react';

type Props = {
  eyebrow?: string;
  title: ReactNode;
  gloss?: string;
  lede?: string;
  status?: string;
};

// Shared interior-page header. Load sequence handled by .load-seq.
export function PageHero({ eyebrow, title, gloss, lede, status }: Props) {
  return (
    <header className="container-page load-seq pb-10 pt-16 sm:pt-24">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h1
        className="mt-3 text-4xl sm:text-6xl"
        style={{ fontWeight: 320, letterSpacing: '-0.015em' }}
      >
        {title}
      </h1>
      {gloss && <p className="mt-2 text-lg italic text-mist">{gloss}</p>}
      {lede && <p className="measure mt-6 text-xl leading-relaxed text-stone">{lede}</p>}
      {status && (
        <p className="mt-6 inline-block rounded-full border border-line px-4 py-1.5 text-xs uppercase tracking-wide2 text-mist">
          {status}
        </p>
      )}
    </header>
  );
}
