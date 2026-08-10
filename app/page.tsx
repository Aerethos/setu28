import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';
import { Countdown } from '@/components/Countdown';
import { Reveal } from '@/components/Reveal';
import { RiverBackdrop } from '@/components/RiverBackdrop';
import { RiverDivider } from '@/components/RiverDivider';
import { SectionHeading } from '@/components/SectionHeading';
import { Procession } from '@/components/Procession';
import { Timeline } from '@/components/Timeline';
import { FactBand } from '@/components/FactBand';
import { FAQ } from '@/components/FAQ';
import { site, partner } from '@/content/site';
import { home } from '@/content/copy';
import { processionIntro } from '@/content/procession';
import { programmeIntro } from '@/content/programme';
import { facts } from '@/content/facts';

export default function HomePage() {
  return (
    <>
      {/* Hero — animated river, the name, the promise, the date. */}
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <RiverBackdrop />
        <div className="container-page load-seq py-24">
          <Wordmark size="xl" />
          <p
            className="mt-8 text-3xl text-stone sm:text-5xl lg:text-6xl"
            style={{ fontWeight: 300, letterSpacing: '-0.015em' }}
          >
            {site.tagline}
          </p>
          <p className="mt-8 text-sm uppercase tracking-wide2 text-mist sm:text-base">
            {site.dateLine}
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/festival"
              className="link-underline border border-brass/60 px-6 py-3 text-sm uppercase tracking-wide2 text-brass transition-colors duration-500 ease-estate hover:bg-brass hover:text-night"
            >
              The night
            </Link>
            <Link
              href="/join"
              className="link-underline px-2 py-3 text-sm uppercase tracking-wide2 text-mist hover:text-stone"
            >
              Register interest →
            </Link>
          </div>
        </div>
      </section>

      {/* Countdown — a fact, below the hero. */}
      <section className="border-y border-line bg-water/40">
        <div className="container-page py-16 sm:py-20">
          <p className="eyebrow mb-8">Counting to the night</p>
          <Countdown />
        </div>
      </section>

      {/* Manifesto. */}
      <section className="container-page py-24 sm:py-32">
        <Reveal>
          <div className="measure space-y-6">
            {home.manifesto.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'text-3xl leading-tight text-stone sm:text-4xl'
                    : i === home.manifesto.length - 1
                      ? 'text-2xl italic text-brass sm:text-3xl'
                      : 'text-lg leading-relaxed text-mist'
                }
                style={i === 0 ? { fontWeight: 320 } : undefined}
              >
                {line}
              </p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Three movements — large alternating sections. */}
      <section className="border-t border-line">
        {home.movements.map((m, i) => (
          <div key={m.index} className="border-b border-line">
            <div className="container-page py-16 sm:py-24">
              <Reveal>
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-sm tabular-nums text-brass/70">
                        {m.index}
                      </span>
                      <span className="eyebrow">{m.eyebrow}</span>
                    </div>
                    <h2
                      className="mt-4 text-4xl sm:text-5xl lg:text-6xl"
                      style={{ fontWeight: 320, letterSpacing: '-0.02em' }}
                    >
                      {m.title}
                    </h2>
                    {m.gloss && (
                      <p className="mt-2 text-lg italic text-mist">({m.gloss})</p>
                    )}
                  </div>
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    <p className="text-xl leading-relaxed text-stone">{m.body}</p>
                    <div className="mt-8 flex items-center gap-6">
                      <Link href={m.href} className="link-underline text-brass">
                        {m.linkLabel} →
                      </Link>
                      <span className="text-xs uppercase tracking-wide2 text-mist">
                        {m.meta}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* The procession — the route upriver. */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          index="—"
          eyebrow="The procession"
          title="Upriver, from the quays to the estate"
          intro={processionIntro}
        />
        <div className="mt-16">
          <Procession />
        </div>
        <Reveal className="mt-8">
          <Link href="/festival/viewing" className="link-underline text-lg text-brass">
            Where to watch, both banks →
          </Link>
        </Reveal>
      </section>

      {/* Both banks. */}
      <section className="border-y border-line bg-water/30">
        <div className="container-page py-20 sm:py-28">
          <Reveal>
            <div className="text-center">
              <p className="measure mx-auto text-2xl leading-relaxed text-stone sm:text-3xl">
                {home.banksLine}
              </p>
              <RiverDivider className="mx-auto mt-8 max-w-md" />
              <div className="mt-8 flex items-center justify-center gap-8 text-sm uppercase tracking-wide2 text-mist">
                <span>Waterford · South</span>
                <span aria-hidden="true" className="text-brass">
                  ~
                </span>
                <span>Kilkenny · North</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Scale. */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading index="—" eyebrow="The measure of it" title="A night the size of the place" />
        <div className="mt-12">
          <FactBand facts={facts} />
        </div>
      </section>

      {/* Programme. */}
      <section className="border-t border-line">
        <div className="container-page py-24 sm:py-32">
          <SectionHeading
            index="—"
            eyebrow="How the night unfolds"
            title="One night, in five movements"
            intro={programmeIntro}
          />
          <div className="mt-12">
            <Timeline />
          </div>
        </div>
      </section>

      {/* FAQ. */}
      <section className="border-t border-line">
        <div className="container-page py-24 sm:py-32">
          <SectionHeading index="—" eyebrow="Questions" title="What to know" />
          <div className="mt-12">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA. */}
      <section className="border-t border-line bg-water/40">
        <div className="container-page py-24">
          <Reveal>
            <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-4xl sm:text-5xl" style={{ fontWeight: 320 }}>
                  {home.ctaTitle}
                </h2>
                <p className="measure mt-4 text-lg leading-relaxed text-mist">{home.ctaBody}</p>
              </div>
              <Link
                href="/join"
                className="link-underline shrink-0 border border-brass/60 px-8 py-4 text-sm uppercase tracking-wide2 text-brass transition-colors duration-500 ease-estate hover:bg-brass hover:text-night"
              >
                Join
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Partner strip. */}
      <section className="border-t border-line">
        <div className="container-page flex flex-col items-start gap-2 py-10 sm:flex-row sm:items-center sm:gap-6">
          <span className="text-xs uppercase tracking-wide3 text-mist">{partner.role}</span>
          <Link href="/partners" className="link-underline text-lg text-stone">
            {partner.name}
          </Link>
        </div>
      </section>
    </>
  );
}
