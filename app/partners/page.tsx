import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { partners } from '@/content/copy';
import { partner } from '@/content/site';

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partners and sponsorship for Waterford 2028 — a once-in-a-generation civic night on the River Suir. AerEthos is the current main partner.',
};

export default function PartnersPage() {
  return (
    <>
      <PageHero eyebrow="Partners & sponsorship" title={partners.title} lede={partners.lede} />

      {/* Current partner. */}
      <section className="container-page pb-16">
        <Reveal>
          <div className="rounded-lg border border-line p-8 sm:p-10">
            <p className="eyebrow">{partner.role}</p>
            <p className="mt-3 text-4xl text-stone sm:text-5xl" style={{ fontWeight: 340 }}>
              {partner.name}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Why partner. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading index="—" eyebrow="The opportunity" title={partners.whyTitle} />
        <Reveal className="mt-8">
          <div className="measure space-y-6 text-lg leading-relaxed text-stone">
            {partners.why.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ways to partner. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading index="—" eyebrow="How it works" title={partners.waysTitle} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {partners.ways.map((w) => (
            <Reveal key={w.title}>
              <div className="flex h-full flex-col bg-night p-8">
                <h3 className="text-2xl" style={{ fontWeight: 340 }}>
                  {w.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact. */}
      <section className="border-t border-line bg-water/30">
        <div className="container-page py-20 sm:py-24">
          <Reveal>
            <div className="measure">
              <h2 className="text-3xl sm:text-4xl" style={{ fontWeight: 320 }}>
                {partners.withUsTitle}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-mist">{partners.withUsBody}</p>
              <a
                href={`mailto:${partner.contactEmail}`}
                className="link-underline mt-6 inline-block text-xl text-brass"
              >
                {partner.contactEmail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
