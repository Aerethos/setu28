import { Reveal } from './Reveal';
import { programme } from '@/content/programme';

// The evening in movements — a simple, dignified sequence.
export function Timeline() {
  return (
    <div className="grid gap-px overflow-hidden rounded-lg border border-line bg-line">
      {programme.map((phase) => (
        <Reveal key={phase.index}>
          <div className="grid gap-2 bg-night p-6 sm:grid-cols-[6rem_10rem_1fr] sm:items-baseline sm:gap-6 sm:p-8">
            <span className="font-sans text-sm tabular-nums text-brass/70">{phase.index}</span>
            <div>
              <p className="text-xl text-stone" style={{ fontWeight: 360 }}>
                {phase.phase}
              </p>
              <p className="text-xs uppercase tracking-wide2 text-mist">{phase.when}</p>
            </div>
            <p className="leading-relaxed text-mist">{phase.body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
