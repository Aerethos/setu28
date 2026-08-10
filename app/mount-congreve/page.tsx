import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { FactBand } from '@/components/FactBand';
import { venue } from '@/content/copy';
import { venueFacts } from '@/content/facts';

export const metadata: Metadata = {
  title: 'Mount Congreve',
  description:
    'Mount Congreve — the Georgian estate and celebrated woodland gardens on the River Suir, where the procession ends and the SETU Ball is held.',
};

export default function VenuePage() {
  return (
    <>
      <PageHero eyebrow="The venue" title={venue.title} lede={venue.lede} />

      <section className="container-page pb-16">
        <Reveal>
          <div className="measure space-y-6 text-lg leading-relaxed text-stone">
            {venue.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-20">
        <FactBand facts={venueFacts} />
      </section>

      <section className="border-t border-line bg-water/30">
        <div className="container-page py-20 sm:py-24">
          <Reveal>
            <p className="measure text-2xl leading-relaxed text-stone sm:text-3xl" style={{ fontWeight: 320 }}>
              {venue.gardenNote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
