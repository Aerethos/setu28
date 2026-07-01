import FadeIn from '../../components/FadeIn';
import CoverImage from '../../components/CoverImage';
import { IMAGES, CREDITS } from '../../lib/images';

const sections = [
  {
    numeral: 'I',
    title: 'The Procession',
    align: 'left' as const,
    image: IMAGES.waterfordMarina,
    imageAlt: 'Boats moored on the River Suir at Waterford at dusk',
    credit: CREDITS.waterfordMarina,
    body: [
      'Four thousand students. Formal wear. The River Suir at night.',
      'As darkness falls over Waterford’s oldest streets, the boats begin to move. There has never been a night like this in Ireland.',
    ],
  },
  {
    numeral: 'II',
    title: 'The Light Show',
    align: 'right' as const,
    image: IMAGES.waterfordNight,
    imageAlt: 'Night view of the River Suir reflecting the lights of Waterford',
    credit: CREDITS.waterfordNight,
    body: [
      'A laser and light show of international scale erupts from Waterford’s North Quay development. Inspired by the spectacle of the Paris 2024 Olympic opening ceremony on the Seine.',
      'Visible across the entire city. The River Suir becomes a mirror.',
    ],
  },
  {
    numeral: 'III',
    title: 'The City',
    align: 'left' as const,
    image: IMAGES.reginaldsTower,
    imageAlt: "Reginald's Tower on the quay at Waterford",
    credit: CREDITS.reginaldsTower,
    body: [
      'This night belongs to Waterford. A citywide festival runs simultaneously across the quays, the streets, the pubs, the squares — for families, for children, for every resident of Ireland’s oldest city.',
      'Forty thousand people. One river. One night.',
    ],
  },
  {
    numeral: 'IV',
    title: 'Mount Congreve',
    align: 'right' as const,
    image: IMAGES.mountCongreveHouse,
    imageAlt: 'Mount Congreve House, a Georgian estate in County Waterford',
    credit: CREDITS.mountCongreveHouse,
    body: [
      'The procession ends at Mount Congreve, one of Ireland’s most extraordinary Georgian estates. The boats dock. The students arrive. The Ball begins.',
      'What follows is a formal celebration unlike anything this country has produced.',
    ],
  },
];

export default function TheNight() {
  return (
    <>
      <section className="relative flex min-h-[70vh] w-full flex-col justify-center overflow-hidden px-6 py-32 md:px-12">
        <div className="absolute inset-0 z-0">
          <CoverImage
            src={IMAGES.waterfordAerial}
            alt="Aerial view of Waterford and the River Suir"
            overlay="full"
            priority
          />
        </div>
        <h1 className="relative z-10 font-display leading-[1.1] text-tungsten">
          <span className="block text-[clamp(3rem,10vw,8rem)] font-light">
            One night.
          </span>
          <span className="block text-[clamp(3rem,10vw,8rem)] font-semibold">
            Designed for everyone.
          </span>
        </h1>
      </section>

      {sections.map((section) => (
        <FadeIn key={section.numeral}>
          <section className="w-full px-6 py-24 md:px-12 md:py-32">
            <div
              className={`flex flex-col gap-10 md:gap-16 ${
                section.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
              } md:items-center`}
            >
              <div className="relative h-64 w-full shrink-0 md:h-[26rem] md:w-1/2">
                <CoverImage
                  src={section.image}
                  alt={section.imageAlt}
                  credit={section.credit}
                  overlay="soft"
                />
              </div>

              <div
                className={`flex flex-col gap-8 md:w-1/2 ${
                  section.align === 'right' ? 'md:items-end md:text-right' : 'md:items-start md:text-left'
                }`}
              >
                <span className="roman text-3xl font-light">
                  {section.numeral}
                </span>
                <h2 className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-6xl">
                  {section.title}
                </h2>
                <div
                  className={`flex flex-col gap-4 ${
                    section.align === 'right' ? 'md:items-end' : 'md:items-start'
                  }`}
                >
                  {section.body.map((line, i) => (
                    <p
                      key={i}
                      className="max-w-xl font-body text-lg font-light leading-relaxed text-tungsten md:text-xl"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn>
        <section className="relative w-full overflow-hidden px-6 py-32 md:px-12 md:py-48">
          <div className="absolute inset-0 z-0 opacity-50">
            <CoverImage
              src={IMAGES.mountCongreveTemple}
              alt="Temple and river view at Mount Congreve Gardens"
              overlay="full"
            />
          </div>
          <p className="relative z-10 font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            Global-level logistics. Irish heart.
          </p>
        </section>
      </FadeIn>
    </>
  );
}
