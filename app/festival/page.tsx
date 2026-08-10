import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { SectionHeading } from '@/components/SectionHeading';
import { Procession } from '@/components/Procession';
import { festival } from '@/content/copy';
import { processionIntro } from '@/content/procession';

export const metadata: Metadata = {
  title: 'Féile na Siúire',
  description:
    'Féile na Siúire (Festival of the Suir) — the river procession and free public festival, watched from both banks of the Suir on 1 July 2028.',
};

export default function FestivalPage() {
  return (
    <>
      <PageHero
        eyebrow="The festival"
        title={festival.title}
        gloss={`(${festival.gloss})`}
        lede={festival.lede}
      />

      <section className="container-page pb-20">
        <Reveal>
          <div className="measure space-y-6 text-lg leading-relaxed text-stone">
            {festival.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* The procession route. */}
      <section className="container-page border-t border-line py-20 sm:py-28">
        <SectionHeading
          index="—"
          eyebrow="The procession"
          title="The route upriver"
          intro={processionIntro}
        />
        <div className="mt-16">
          <Procession />
        </div>
        <Reveal className="mt-10">
          <Link href="/festival/viewing" className="link-underline text-xl text-brass">
            {festival.viewingLinkLabel} →
          </Link>
        </Reveal>
      </section>

      {/* The festival on the banks. */}
      <section className="border-t border-line bg-water/30">
        <div className="container-page py-20 sm:py-28">
          <SectionHeading index="—" eyebrow="Alongside the water" title={festival.festivalSection.title} />
          <Reveal className="mt-8">
            <p className="measure text-lg leading-relaxed text-stone">
              {festival.festivalSection.body}
            </p>
            <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {festival.festivalSection.points.map((p) => (
                <li key={p} className="bg-night p-6 text-lg text-stone">
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
