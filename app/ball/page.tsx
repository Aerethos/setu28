import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { ball } from '@/content/copy';

export const metadata: Metadata = {
  title: 'The SETU Ball',
  description:
    'The SETU Ball — a black-tie ball for students at Mount Congreve, at the end of the river procession. Reception, dinner and dancing till morning.',
};

export default function BallPage() {
  return (
    <>
      <PageHero eyebrow="The ball" title={ball.title} lede={ball.lede} />

      <section className="container-page pb-20">
        <Reveal>
          <div className="measure space-y-6 text-lg leading-relaxed text-stone">
            {ball.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* The arc of the evening. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading index="—" eyebrow="The evening" title="How the ball unfolds" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {ball.arc.map((step) => (
            <Reveal key={step.index}>
              <div className="flex h-full flex-col bg-night p-8">
                <span className="font-sans text-sm tabular-nums text-brass/70">{step.index}</span>
                <h3 className="mt-4 text-2xl sm:text-3xl" style={{ fontWeight: 340 }}>
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dress + eligibility. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-lg border border-line p-8 sm:p-10">
              <p className="eyebrow">{ball.dressCode.title}</p>
              <p className="mt-4 text-2xl leading-snug text-stone sm:text-3xl" style={{ fontWeight: 320 }}>
                {ball.dressCode.body}
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-lg border border-brass/40 bg-water/30 p-8 sm:p-10">
              <p className="eyebrow">Eligibility</p>
              <p className="mt-4 text-lg leading-relaxed text-stone">{ball.eligibility}</p>
              <Link
                href="/join"
                className="link-underline mt-8 inline-block border border-brass/60 px-6 py-3 text-sm uppercase tracking-wide2 text-brass transition-colors duration-500 ease-estate hover:bg-brass hover:text-night"
              >
                {ball.ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
