import { Reveal } from './Reveal';
import { procession } from '@/content/procession';

// The route upriver as a vertical journey, a brass rail running through it.
export function Procession() {
  return (
    <ol className="relative ml-3 sm:ml-0">
      {/* The river rail. */}
      <span
        className="river-rail absolute left-0 top-2 bottom-2 w-px sm:left-1/2"
        aria-hidden="true"
      />
      {procession.map((stop, i) => {
        const onRight = i % 2 === 1;
        return (
          <li key={stop.index} className="relative">
            <Reveal>
              <div
                className={`flex flex-col py-8 sm:w-1/2 ${
                  onRight ? 'sm:ml-auto sm:pl-12' : 'sm:pr-12 sm:text-right'
                } pl-8`}
              >
                {/* Node on the rail. */}
                <span
                  className={`absolute top-10 h-3 w-3 -translate-x-1/2 rounded-full border border-brass bg-night ${
                    onRight ? 'left-0 sm:left-1/2' : 'left-0 sm:left-1/2'
                  }`}
                  style={{ boxShadow: '0 0 10px 2px rgba(194,162,104,0.4)' }}
                  aria-hidden="true"
                />
                <div
                  className={`flex items-baseline gap-3 ${
                    onRight ? '' : 'sm:justify-end'
                  }`}
                >
                  <span className="font-sans text-sm tabular-nums text-brass/70">
                    {stop.index}
                  </span>
                  <span className="text-xs uppercase tracking-wide2 text-mist">
                    {stop.light} · {stop.bank} bank
                  </span>
                </div>
                <h3 className="mt-2 text-2xl sm:text-3xl" style={{ fontWeight: 340 }}>
                  {stop.place}
                </h3>
                <p className="measure mt-3 leading-relaxed text-mist">{stop.note}</p>
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
