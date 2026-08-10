import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Props = {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  className?: string;
};

// A numbered section heading. Personality from scale and tracking.
export function SectionHeading({ index, eyebrow, title, intro, className = '' }: Props) {
  return (
    <Reveal className={className}>
      <div className="flex items-baseline gap-4">
        {index && (
          <span className="font-sans text-sm tabular-nums text-brass/70">{index}</span>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      </div>
      <h2
        className="mt-4 text-3xl sm:text-5xl lg:text-6xl"
        style={{ fontWeight: 320, letterSpacing: '-0.015em' }}
      >
        {title}
      </h2>
      {intro && <p className="measure mt-6 text-lg leading-relaxed text-mist">{intro}</p>}
    </Reveal>
  );
}
