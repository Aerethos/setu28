// A quiet horizontal river line — the Suir as a hairline between the banks.
export function RiverDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center ${className}`} aria-hidden="true">
      <svg
        width="100%"
        height="24"
        viewBox="0 0 1200 24"
        preserveAspectRatio="none"
        className="text-brass/50"
        role="presentation"
      >
        <path
          d="M0 12 C 150 4, 300 20, 450 12 S 750 4, 900 12 1200 12 1200 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
