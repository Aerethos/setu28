import { Reveal } from './Reveal';
import type { Fact } from '@/content/facts';

// Scale, told large. Heritage figures rather than invented attendance.
export function FactBand({ facts }: { facts: Fact[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-4">
      {facts.map((f, i) => (
        <Reveal key={f.label} delay={i * 70}>
          <div className="flex h-full flex-col justify-between gap-4 bg-night p-6 sm:p-8">
            <span
              className="font-sans leading-none text-stone"
              style={{ fontWeight: 250, fontSize: 'clamp(2.5rem, 6vw, 4rem)', letterSpacing: '-0.02em' }}
            >
              {f.value}
            </span>
            <span className="text-sm leading-snug text-mist">{f.label}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
