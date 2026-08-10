'use client';

import { useEffect, useState } from 'react';
import { EVENT_DATE_ISO } from '@/content/site';

type Parts = { years: number; months: number; days: number };

// Calendar-aware years / months / days remaining.
function partsUntil(target: Date): Parts | null {
  const now = new Date();
  if (target.getTime() <= now.getTime()) return null;

  let years = target.getFullYear() - now.getFullYear();
  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();

  if (days < 0) {
    months -= 1;
    // Days in the month preceding the target month.
    days += new Date(target.getFullYear(), target.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  return { years, months, days };
}

const units: { key: keyof Parts; label: string }[] = [
  { key: 'years', label: 'Years' },
  { key: 'months', label: 'Months' },
  { key: 'days', label: 'Days' },
];

// Years / months / days — a two-year horizon, stated with grandeur.
export function Countdown() {
  const target = new Date(EVENT_DATE_ISO);
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(partsUntil(target));
    const id = setInterval(() => setParts(partsUntil(target)), 60000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div
        className="flex flex-wrap items-end gap-x-10 gap-y-8 sm:gap-x-16"
        role="timer"
        aria-live="off"
        aria-label="Time remaining until 1 July 2028"
      >
        {units.map(({ key, label }, i) => (
          <div key={key} className="flex items-end gap-x-10 sm:gap-x-16">
            <div className="min-w-[2ch]">
              <div
                className="font-sans tabular-nums leading-none text-stone"
                style={{ fontWeight: 250, fontSize: 'clamp(3.5rem, 12vw, 8rem)', letterSpacing: '-0.03em' }}
              >
                {parts ? parts[key] : '—'}
              </div>
              <div className="mt-3 text-xs uppercase tracking-wide3 text-mist sm:text-sm">
                {label}
              </div>
            </div>
            {i < units.length - 1 && (
              <span
                aria-hidden="true"
                className="pb-8 text-4xl font-thin text-brass/50 sm:pb-12 sm:text-6xl"
              >
                /
              </span>
            )}
          </div>
        ))}
      </div>
      <noscript>
        <p className="mt-4 text-sm text-mist">
          The night is on 1 July 2028. Enable JavaScript to see the live countdown.
        </p>
      </noscript>
    </div>
  );
}
