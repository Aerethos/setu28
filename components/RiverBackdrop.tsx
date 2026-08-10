// Animated hero backdrop: the river's current, and the flotilla drifting
// upriver as points of warm light. On-theme, not a generic particle field.
// Purely decorative — hidden from assistive tech, gated on reduced-motion.

const lanterns = [
  { top: '38%', size: 7, dur: 34, delay: 0 },
  { top: '46%', size: 5, dur: 41, delay: 6 },
  { top: '52%', size: 9, dur: 29, delay: 3 },
  { top: '43%', size: 6, dur: 46, delay: 12 },
  { top: '57%', size: 5, dur: 38, delay: 18 },
  { top: '49%', size: 8, dur: 33, delay: 22 },
];

export function RiverBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep-water wash. */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_-10%,rgba(15,42,49,0.55),transparent_60%),linear-gradient(180deg,#08141A_0%,#0B2027_60%,#08141A_100%)]" />

      {/* The current. */}
      <svg
        className="absolute inset-x-0 bottom-0 h-[60%] w-full"
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
        role="presentation"
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            className="river-flow text-brass"
            d={`M0 ${120 + i * 55} C 200 ${100 + i * 55}, 400 ${150 + i * 55}, 600 ${
              120 + i * 55
            } S 1000 ${100 + i * 55}, 1200 ${130 + i * 55}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity={0.12 - i * 0.015}
            strokeWidth={1}
            style={{ animationDelay: `${i * 0.8}s` }}
          />
        ))}
      </svg>

      {/* The flotilla — warm lights moving upriver. */}
      {lanterns.map((l, i) => (
        <span
          key={i}
          className="lantern absolute left-0 rounded-full bg-brass"
          style={
            {
              top: l.top,
              width: l.size,
              height: l.size,
              boxShadow: '0 0 12px 3px rgba(194,162,104,0.7)',
              '--dur': `${l.dur}s`,
              '--delay': `${l.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* Vignette to seat the type. */}
      <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_50%_40%,transparent_50%,rgba(8,20,26,0.6)_100%)]" />
    </div>
  );
}
