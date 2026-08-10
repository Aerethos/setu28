import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { about } from '@/content/copy';
import { committee, governance } from '@/content/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Waterford 2028 is an independent, student-founded civic event on the River Suir. About the project, its principles, the committee, and its governance.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="The project" title={about.title} lede={about.lede} />

      <section className="container-page pb-20">
        <Reveal>
          <div className="measure space-y-6 text-lg leading-relaxed text-stone">
            {about.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Principles. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading index="—" eyebrow="Principles" title={about.principlesTitle} />
        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line md:grid-cols-3">
          {about.principles.map((p) => (
            <Reveal key={p.title}>
              <div className="flex h-full flex-col bg-night p-8">
                <h3 className="text-2xl" style={{ fontWeight: 340 }}>
                  {p.title}
                </h3>
                <p className="mt-3 leading-relaxed text-mist">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Committee. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading index="—" eyebrow="Who we are" title={about.committeeTitle} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {committee.map((m) => (
            <li key={m.name} className="bg-night p-6">
              <p className="text-xl text-stone">{m.name}</p>
              <p className="mt-1 text-sm uppercase tracking-wide2 text-brass">{m.role}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Governance. */}
      <section className="border-t border-line bg-water/30">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-xl" style={{ fontWeight: 400 }}>
              {about.governanceTitle}
            </h2>
            <p className="measure mt-4 text-base leading-relaxed text-mist">{governance}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
