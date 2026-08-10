import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { BankSplit } from '@/components/BankSplit';
import { viewingPage } from '@/content/copy';
import { southBank, northBank, overflow } from '@/content/viewing';

export const metadata: Metadata = {
  title: 'Viewing points',
  description:
    'Indicative viewing areas for Féile na Siúire along both banks of the River Suir — Waterford to the south, Kilkenny to the north. Subject to confirmation.',
};

export default function ViewingPage() {
  return (
    <>
      <PageHero
        eyebrow="Where to watch"
        title={viewingPage.title}
        lede={viewingPage.lede}
        status={viewingPage.status}
      />

      <section className="container-page pb-16">
        <BankSplit south={southBank} north={northBank} />
      </section>

      <section className="container-page pb-28">
        <Reveal>
          <div className="rounded-lg border border-line p-8 sm:p-10">
            <p className="eyebrow">{overflow.title}</p>
            <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-10">
              {overflow.points.map((p) => (
                <li key={p} className="text-lg text-stone">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </>
  );
}
