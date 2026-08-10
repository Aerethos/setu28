import { Reveal } from './Reveal';
import type { Bank } from '@/content/viewing';

function BankColumn({ bank, align }: { bank: Bank; align: 'left' | 'right' }) {
  const alignClass = align === 'right' ? 'lg:text-right lg:items-end' : '';
  return (
    <div className={`flex flex-col ${alignClass}`}>
      <p className="eyebrow">{bank.side}</p>
      <h3 className="mt-2 text-3xl sm:text-4xl" style={{ fontWeight: 340 }}>
        {bank.county}
      </h3>
      <p className="mt-1 text-sm text-mist">{bank.reach}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {bank.points.map((p) => (
          <li
            key={p}
            className={`text-lg text-stone ${align === 'right' ? 'lg:pl-6' : 'lg:pr-6'}`}
          >
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

// The signature layout: a genuine north/south split, the river between.
export function BankSplit({ south, north }: { south: Bank; north: Bank }) {
  return (
    <Reveal>
      <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-0">
        {/* South bank — Waterford */}
        <div className="bg-south/60 rounded-lg p-8 sm:p-10 lg:rounded-none lg:rounded-l-lg lg:border-r-0">
          <BankColumn bank={south} align="left" />
        </div>

        {/* The river — vertical hairline on desktop, horizontal on mobile */}
        <div
          className="pointer-events-none absolute inset-y-8 left-1/2 hidden w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brass/50 to-transparent lg:block"
          aria-hidden="true"
        />

        {/* North bank — Kilkenny */}
        <div className="bg-north/60 rounded-lg p-8 sm:p-10 lg:rounded-none lg:rounded-r-lg">
          <BankColumn bank={north} align="right" />
        </div>
      </div>
    </Reveal>
  );
}
