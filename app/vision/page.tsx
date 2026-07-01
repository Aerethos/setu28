import FadeIn from '../../components/FadeIn';
import CoverImage from '../../components/CoverImage';
import { IMAGES, CREDITS } from '../../lib/images';

export default function Vision() {
  return (
    <>
      <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <CoverImage
            src={IMAGES.waterfordAerial}
            alt="Aerial view of Waterford and the River Suir"
            overlay="full"
            priority
          />
        </div>
        <p className="relative z-10 max-w-4xl text-center font-display text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.15] text-tungsten">
          Why does our university have no ball?
        </p>
      </section>

      <FadeIn>
        <section className="flex w-full justify-center px-6 py-24 md:px-12 md:py-32">
          <p className="max-w-[65ch] font-body text-lg font-light leading-loose text-tungsten md:text-xl">
            That was the question. Asked at twenty years old, in 2026, by a
            student who had already built a company, delivered international
            projects, and refused to accept that scale was someone else&apos;s
            problem. The answer became two years of planning, a committee, a
            city&apos;s involvement, and a night that will outlast all of us.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="flex w-full flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:gap-8 md:px-12 md:py-32">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-7xl">
            Inspired by Paris 2024.
          </p>
          <div className="relative h-64 w-full md:h-72 md:w-2/5">
            <CoverImage
              src={IMAGES.waterfordNight}
              alt="The River Suir at night, mirroring the city lights"
              credit={CREDITS.waterfordNight}
              overlay="soft"
            />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="flex w-full flex-col gap-10 px-6 py-24 md:flex-row-reverse md:items-center md:gap-8 md:px-12 md:py-32">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-right md:text-7xl">
            Built for Waterford.
          </p>
          <div className="relative h-64 w-full md:h-72 md:w-2/5">
            <CoverImage
              src={IMAGES.reginaldsTower}
              alt="Reginald's Tower, the oldest civic building in Ireland"
              credit={CREDITS.reginaldsTower}
              overlay="soft"
            />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="flex w-full flex-col gap-10 px-6 py-24 md:flex-row md:items-center md:gap-8 md:px-12 md:py-32">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:w-3/5 md:text-7xl">
            Designed for history.
          </p>
          <div className="relative h-64 w-full md:h-72 md:w-2/5">
            <CoverImage
              src={IMAGES.mountCongreveHouse}
              alt="Mount Congreve House, a Georgian estate in County Waterford"
              credit={CREDITS.mountCongreveHouse}
              overlay="soft"
            />
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="w-full px-6 py-24 md:px-12 md:py-32">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-0">
            {[
              { number: '€2M+', label: 'PROJECTED EVENT SCALE' },
              { number: '914 AD', label: 'WATERFORD FOUNDED' },
              { number: '2028', label: 'REIMAGINED' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-4 px-0 md:px-12 ${
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
    </>
  );
}
