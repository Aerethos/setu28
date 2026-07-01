import ParticleField from '../components/ParticleField';
import Countdown from '../components/Countdown';
import FadeIn from '../components/FadeIn';
import CoverImage from '../components/CoverImage';
import CountUp from '../components/CountUp';
import { IMAGES } from '../lib/images';

const nightSections = [
  {
    numeral: 'I',
    title: 'The Procession',
    align: 'left' as const,
    image: IMAGES.lightshowCrowd,
    imageAlt: 'Crowds gathered along the River Suir as the procession begins',
    body: [
      'Four thousand students. Formal wear. The River Suir at night.',
      'As darkness falls over Waterford’s oldest streets, the boats begin to move. There has never been a night like this in Ireland.',
    ],
  },
  {
    numeral: 'II',
    title: 'The Light Show',
    align: 'right' as const,
    image: IMAGES.lightshowAerialClose,
    imageAlt: 'Laser light show erupting from the North Quay over the River Suir',
    body: [
      'A laser and light show of international scale erupts from Waterford’s North Quay development. Inspired by the spectacle of the Paris 2024 Olympic opening ceremony on the Seine.',
      'Visible across the entire city. The River Suir becomes a mirror.',
    ],
  },
  {
    numeral: 'III',
    title: 'The City',
    align: 'left' as const,
    image: IMAGES.lightshowAerialWide,
    imageAlt: 'Wide aerial view of the light show reaching across Waterford city',
    body: [
      'This night belongs to Waterford. A citywide festival runs simultaneously across the quays, the streets, the pubs, the squares — for families, for children, for every resident of Ireland’s oldest city.',
      'Forty thousand people. One river. One night.',
    ],
  },
  {
    numeral: 'IV',
    title: 'Mount Congreve',
    align: 'right' as const,
    image: IMAGES.mountCongreveNight,
    imageAlt: 'Mount Congreve estate illuminated at night as the light show reaches the grounds',
    body: [
      'The procession ends at Mount Congreve, one of Ireland’s most extraordinary Georgian estates. The boats dock. The students arrive. The Ball begins.',
      'What follows is a formal celebration unlike anything this country has produced.',
    ],
  },
];

const px = 'px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32';

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={`relative flex h-[100svh] w-full flex-col justify-between overflow-hidden ${px} pb-10 pt-24 md:pb-16`}>
        <div className="absolute inset-0 z-0">
          <CoverImage
            src={IMAGES.lightshowAerialClose}
            alt="Aerial view of the light show over the River Suir at Waterford"
            overlay="full"
            priority
          />
        </div>

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

      {/* STATEMENT + IMAGE */}
      <FadeIn>
        <section className={`flex w-full flex-col gap-14 py-28 md:flex-row md:items-center md:gap-16 ${px} md:py-44`}>
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-6xl">
            Something is coming to Waterford.
          </p>
          <div className="relative h-64 w-full md:h-80 md:w-2/5">
            <CoverImage
              src={IMAGES.mountCongreveGolden}
              alt="Aerial view of Mount Congreve estate on the River Suir at golden hour"
              overlay="soft"
            />
          </div>
        </section>
      </FadeIn>

      {/* STATS */}
      <FadeIn>
        <section className={`w-full py-24 ${px} md:py-32`}>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
            {[
              { target: 4000, prefix: '', suffix: '', label: 'STUDENTS' },
              { target: 1, prefix: '', suffix: '', label: 'NIGHT' },
              { target: 2, prefix: '', suffix: '', label: 'YEARS IN THE MAKING' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`relative flex flex-col gap-4 px-0 md:px-14 ${
                  i !== 0 ? 'md:border-l md:border-electric/[0.08]' : ''
                }`}
              >
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  className="font-display text-6xl font-light text-tungsten md:text-8xl"
                />
                <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </FadeIn>

      {/* FOUNDER PULL QUOTE */}
      <FadeIn>
        <section className={`flex w-full flex-col items-center gap-8 py-40 text-center ${px} md:py-56`}>
          <p className="max-w-4xl font-display text-3xl font-light italic leading-[1.15] text-tungsten md:text-5xl">
            &ldquo;This is not a student event that got ambitious. This is a
            civic moment that happens to begin with a university.&rdquo;
          </p>
          <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
            — NATHAN SFENDJI, FOUNDING PRESIDENT
          </span>
        </section>
      </FadeIn>

      {/* ============ VISION ============ */}
      <section id="vision" className="anchor-offset">
        <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <CoverImage
              src={IMAGES.lightshowAerialWide}
              alt="Aerial view of the light show over the River Suir at Waterford"
              overlay="full"
            />
          </div>
          <p className={`relative z-10 max-w-4xl text-center font-display text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.15] text-tungsten ${px}`}>
            Why does our university have no ball?
          </p>
        </div>

        <FadeIn>
          <div className={`flex w-full flex-col items-center gap-10 py-28 ${px} md:py-40`}>
            <p className="max-w-[65ch] text-center font-body text-lg font-light leading-loose text-tungsten md:text-xl">
              That was the question. Asked at twenty years old, in 2026, by a
              student who had already built a company, delivered international
              projects, and refused to accept that scale was someone else&apos;s
              problem. The answer became two years of planning, a committee, a
              city&apos;s involvement, and a night that will outlast all of us.
            </p>
            <p className="max-w-[65ch] text-center font-body text-lg font-light leading-loose text-tungsten md:text-xl">
              Two years out, that answer already spans a full organising
              committee, engagement with Waterford City and County Council,
              and a delivery plan built around a single standard: could this
              stand next to the best civic spectacles anywhere in the world.
              Every decision, down to the placement of a single light rig on
              the North Quay, is made against that standard.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className={`flex w-full flex-col gap-10 py-24 md:flex-row md:items-center md:gap-16 ${px} md:py-32`}>
            <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-7xl">
              Inspired by Paris 2024.
            </p>
            <div className="relative h-64 w-full md:h-72 md:w-2/5">
              <CoverImage
                src={IMAGES.lightshowAerialClose}
                alt="Laser light show erupting from the North Quay over the River Suir"
                overlay="soft"
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={`flex w-full flex-col gap-10 py-24 md:flex-row-reverse md:items-center md:gap-16 ${px} md:py-32`}>
            <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-right md:text-7xl">
              Built for Waterford.
            </p>
            <div className="relative h-64 w-full md:h-72 md:w-2/5">
              <CoverImage
                src={IMAGES.mountCongreveBend}
                alt="Aerial view of Mount Congreve estate on the bend of the River Suir"
                overlay="soft"
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={`flex w-full flex-col gap-10 py-24 md:flex-row md:items-center md:gap-16 ${px} md:py-32`}>
            <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-7xl">
              Designed for history.
            </p>
            <div className="relative h-64 w-full md:h-72 md:w-2/5">
              <CoverImage
                src={IMAGES.mountCongreveGolden}
                alt="Aerial view of Mount Congreve estate at golden hour"
                overlay="soft"
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={`w-full py-24 ${px} md:py-32`}>
            <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
              {[
                { number: '€2M+', label: 'PROJECTED EVENT SCALE' },
                { number: '914 AD', label: 'WATERFORD FOUNDED' },
                { number: '2028', label: 'REIMAGINED' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-4 px-0 md:px-14 ${
                    i !== 0 ? 'md:border-l md:border-electric/[0.08]' : ''
                  }`}
                >
                  <span className="font-display text-5xl font-light text-tungsten md:text-7xl">
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
      </section>

      {/* ============ THE NIGHT ============ */}
      <section id="the-night" className="anchor-offset">
        <div className={`relative flex min-h-[70vh] w-full flex-col justify-center overflow-hidden py-32 ${px}`}>
          <div className="absolute inset-0 z-0">
            <CoverImage
              src={IMAGES.lightshowAerialWide}
              alt="Aerial view of the light show over the River Suir at Waterford"
              overlay="full"
            />
          </div>
          <h2 className="relative z-10 font-display leading-[1.1] text-tungsten">
            <span className="block text-[clamp(3rem,10vw,8rem)] font-light">
              One night.
            </span>
            <span className="block text-[clamp(3rem,10vw,8rem)] font-semibold">
              Designed for everyone.
            </span>
          </h2>
        </div>

        <FadeIn>
          <div className={`w-full py-16 ${px} md:py-20`}>
            <p className="max-w-[60ch] font-body text-lg font-light leading-loose text-tungsten md:text-xl">
              The night unfolds in four movements, each built to work at a
              different scale — intimate enough for four thousand students,
              vast enough for a city of forty thousand watching from the
              quays.
            </p>
          </div>
        </FadeIn>

        {nightSections.map((section) => (
          <FadeIn key={section.numeral}>
            <section className={`w-full py-24 ${px} md:py-32`}>
              <div
                className={`flex flex-col gap-10 md:gap-20 ${
                  section.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center`}
              >
                <div className="relative h-64 w-full shrink-0 md:h-[26rem] md:w-1/2">
                  <CoverImage
                    src={section.image}
                    alt={section.imageAlt}
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
                  <h3 className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-6xl">
                    {section.title}
                  </h3>
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
          <section className={`relative w-full overflow-hidden py-32 ${px} md:py-48`}>
            <div className="absolute inset-0 z-0">
              <CoverImage
                src={IMAGES.mountCongreveGolden}
                alt="Aerial view of Mount Congreve estate at golden hour"
                overlay="full"
              />
            </div>
            <p className="relative z-10 font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
              Global-level logistics. Irish heart.
            </p>
          </section>
        </FadeIn>
      </section>

      {/* ============ WATERFORD ============ */}
      <section id="waterford" className="anchor-offset">
        <div className={`relative flex min-h-[100svh] w-full flex-col justify-center overflow-hidden py-32 ${px}`}>
          <div className="absolute inset-0 z-0">
            <CoverImage
              src={IMAGES.mountCongreveBend}
              alt="Aerial view of Mount Congreve estate on the bend of the River Suir"
              overlay="full"
            />
          </div>
          <h2 className="relative z-10 font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[1.1] text-tungsten">
            Ireland&apos;s oldest city.
          </h2>
          <span className="vertical-text absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 font-body text-[0.65rem] font-light tracking-widest2 text-tungsten md:block">
            914 AD — 2028
          </span>
        </div>

        <FadeIn>
          <div className={`flex w-full flex-col items-center gap-10 py-24 ${px} md:py-32`}>
            <p className="max-w-[65ch] text-center font-body text-lg font-light leading-loose text-tungsten md:text-xl">
              Waterford was founded in 914 AD by the Vikings. It is the oldest
              city in Ireland. It sits on the River Suir, a tidal estuary that
              has shaped its identity for over a thousand years. On July 1,
              2028, that river will carry something it has never carried
              before.
            </p>
            <p className="max-w-[65ch] text-center font-body text-lg font-light leading-loose text-tungsten md:text-xl">
              Long before it was a stop on any map, Waterford was a working
              port — Viking-founded, English-walled, endlessly rebuilt around
              the same bend in the river. That instinct for reinvention
              without erasure is what the committee is building toward: a
              night that adds to the city&apos;s history rather than
              borrowing from it.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <section className={`relative flex min-h-[60vh] w-full items-center justify-end overflow-hidden py-24 ${px} md:py-32`}>
            <div className="absolute inset-0 z-0">
              <CoverImage
                src={IMAGES.lightshowCrowd}
                alt="Crowds gathered along the River Suir at Waterford"
                overlay="bottom"
              />
            </div>
            <p className="relative z-10 font-display text-4xl font-light leading-[1.15] text-tungsten md:text-right md:text-7xl">
              The oldest city in Ireland. Its greatest night.
            </p>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={`w-full py-24 ${px} md:py-32`}>
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
              <div className="flex items-start gap-6 md:w-1/3">
                <div className="mt-1 h-24 w-px shrink-0 bg-electric opacity-40" />
                <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
                  NORTH QUAY DEVELOPMENT
                </span>
              </div>
              <p className="max-w-2xl font-body text-lg font-light leading-loose text-tungsten md:w-2/3 md:text-xl">
                The North Quay development is the centrepiece of the light
                show — a new stretch of Waterford rising along the Suir, built
                for the century ahead. On the night of July 1, 2028, it
                becomes the stage. The new Waterford meets the ancient one,
                and for one night, the whole city watches the river carry
                both.
              </p>
            </div>
            <div className="relative mt-12 h-72 w-full md:h-96">
              <CoverImage
                src={IMAGES.lightshowAerialClose}
                alt="Laser light show erupting from the North Quay over the River Suir"
                overlay="soft"
              />
            </div>
          </section>
        </FadeIn>

        <FadeIn>
          <section className={`relative flex w-full items-center justify-center overflow-hidden py-40 text-center ${px} md:py-56`}>
            <div className="absolute inset-0 z-0">
              <CoverImage
                src={IMAGES.lightshowAerialWide}
                alt="Wide aerial view of the light show across Waterford"
                overlay="full"
              />
            </div>
            <p className="relative z-10 max-w-4xl font-display text-3xl font-light italic leading-[1.15] text-tungsten md:text-5xl">
              Waterford has always known what it is. July 1, 2028 is when the
              world finds out.
            </p>
          </section>
        </FadeIn>
      </section>

      {/* ============ CLOSING ============ */}
      <FadeIn>
        <section className={`relative flex min-h-[80vh] w-full flex-col items-center justify-center gap-6 overflow-hidden text-center ${px} py-32`}>
          <div className="absolute inset-0 z-0">
            <CoverImage
              src={IMAGES.lightshowCrowd}
              alt="Crowds gathered along the River Suir as the light show fills the sky"
              overlay="full"
              parallax={false}
            />
          </div>
          <span className="relative z-10 font-body text-[0.65rem] font-light tracking-widest2 text-electric">
            TWO YEARS TO PREPARE. ONE NIGHT TO REMEMBER.
          </span>
          <p className="relative z-10 font-display text-[clamp(2.5rem,9vw,7rem)] font-light leading-[1.1] text-tungsten">
            July 1, 2028.
          </p>
          <span className="relative z-10 font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
            WATERFORD, IRELAND
          </span>
        </section>
      </FadeIn>
    </>
  );
}
