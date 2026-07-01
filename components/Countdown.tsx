'use client';

import { useEffect, useState } from 'react';

const TARGET_ISO = '2028-07-01T00:00:00+01:00';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft | null {
  const target = new Date(TARGET_ISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

export default function Countdown() {
  const [time, setTime] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getTimeLeft());
    const interval = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  if (!time) {
    return (
      <div className="font-display text-4xl italic font-light text-tungsten">
        Tonight.
      </div>
    );
  }

  const units: { label: string; value: number }[] = [
    { label: 'DAYS', value: time.days },
    { label: 'HRS', value: time.hours },
    { label: 'MIN', value: time.minutes },
    { label: 'SEC', value: time.seconds },
  ];

  return (
    <div className="flex flex-col items-end gap-3">
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-end">
          <span className="font-body text-[0.5rem] font-light tracking-widest2 text-electric leading-none">
            {unit.label}
          </span>
          <span className="font-body text-2xl font-light leading-none tabular-nums">
            {pad(unit.value)}
          </span>
        </div>
      ))}
    </div>
  );
}
