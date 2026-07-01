import Link from 'next/link';
import ParticleField from '../components/ParticleField';
import Countdown from '../components/Countdown';
import FadeIn from '../components/FadeIn';

export default function Home() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="relative flex h-[100svh] w-full flex-col justify-between overflow-hidden px-6 pb-10 pt-24 md:px-12 md:pb-16">
        <ParticleField />

        <div className="relative z-10 flex items-start justify-between">
          <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
            SETU BALL 2028 — WATERFORD, IRELAND
          </span>
        </div>

        <div className="relative z-10 flex items-end justify-between gap-6">
          <div className="leading-[1.1]">
            <div className="font-display text-[clamp(3.5rem,12vw,10rem)] font-light leading-[1.05] text-tungsten">
              July
            </div>
            <div className="font-display text-[clamp(3.5rem,12vw,10rem)] font-light leading-[1.05] text-tungsten">
              01
            </div>
            <div className="font-display text-[clamp(3.5rem,12vw,10rem)] font-light leading-[1.05] text-tungsten">
              2028
            </div>
          </div>

          <div className="hidden shrink-0 md:block">
            <Countdown />
          </div>
        </div>

        <div className="relative z-10 mt-6 md:hidden">
          <Countdown />
        </div>

        <span className="vertical-text absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 font-body text-[0.65rem] font-light tracking-widest2 text-tungsten md:block">
          IRELAND&apos;S OLDEST CITY
        </span>
      </section>

      {/* SECTION 2 — STATEMENT */}
      <FadeIn>
        <section className="w-full px-6 py-32 md:px-12 md:py-48">
          <p className="max-w-[60%] font-display text-4xl font-light leading-[1.15] text-tungsten md:text-6xl">
            Something is coming to Waterford.
          </p>
        </section>
      </FadeIn>

      {/* SECTION 3 — STATS */}
      <FadeIn>
        <section className="w-full px-6 py-24 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
            {[
              { number: '4,000', label: 'STUDENTS' },
              { number: '1', label: 'NIGHT' },
              { number: '2', label: 'YEARS IN THE MAKING' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`relative flex flex-col gap-4 px-0 md:px-12 ${
                  i !== 0 ? 'md:border-l md:border-electric/[0.08]' : ''
                }`}
              >
                <span className="font-display text-6xl font-light text-tungsten md:text-8xl">
                  {stat.number}
                </span>
                <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* SECTION 4 — THE NIGHT TEASER */}
      <FadeIn>
        <section className="w-full px-6 py-32 md:px-12 md:py-48">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-6 md:w-1/3">
              <div className="mt-1 h-24 w-px shrink-0 bg-electric opacity-40" />
              <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
                THE NIGHT — 01 / 07 / 2028
              </span>
            </div>

            <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-2/3 md:text-right md:text-6xl">
              The River Suir. Mount Congreve. One night.
            </p>
          </div>

          <div className="mt-16 flex justify-end">
            <Link
              href="/the-night"
              className="group font-body text-[0.65rem] font-light tracking-widest2 text-tungsten transition-colors duration-200 hover:text-electric"
            >
              Explore the night <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </section>
      </FadeIn>

      {/* SECTION 5 — PULL QUOTE */}
      <FadeIn>
        <section className="flex w-full flex-col items-center gap-8 px-6 py-40 text-center md:px-24 md:py-56">
          <p className="max-w-4xl font-display text-3xl font-light italic leading-[1.15] text-tungsten md:text-5xl">
            &ldquo;This is not a student event that got ambitious. This is a
            civic moment that happens to begin with a university.&rdquo;
          </p>
          <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
            — NATHAN SFENDJI, FOUNDING PRESIDENT
          </span>
        </section>
      </FadeIn>
    </>
  );
}
