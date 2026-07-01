import FadeIn from '../../components/FadeIn';

export default function Waterford() {
  return (
    <>
      <section className="relative flex min-h-[100svh] w-full flex-col justify-center px-6 py-32 md:px-12">
        <h1 className="font-display text-[clamp(3rem,10vw,9rem)] font-light leading-[1.1] text-tungsten">
          Ireland&apos;s oldest city.
        </h1>
        <span className="vertical-text absolute right-6 top-1/2 hidden -translate-y-1/2 font-body text-[0.65rem] font-light tracking-widest2 text-tungsten md:block">
          914 AD — 2028
        </span>
      </section>

      <FadeIn>
        <section className="flex w-full justify-center px-6 py-24 md:px-12 md:py-32">
          <p className="max-w-[65ch] font-body text-lg font-light leading-loose text-tungsten md:text-xl">
            Waterford was founded in 914 AD by the Vikings. It is the oldest
            city in Ireland. It sits on the River Suir, a tidal estuary that
            has shaped its identity for over a thousand years. On July 1,
            2028, that river will carry something it has never carried
            before.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="w-full px-6 py-28 text-right md:px-12 md:py-40">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            The oldest city in Ireland. Its greatest night.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="w-full px-6 py-24 md:px-12 md:py-32">
          <div className="flex flex-col gap-16 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-6 md:w-1/3">
              <div className="mt-1 h-24 w-px shrink-0 bg-electric opacity-40" />
              <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
                NORTH QUAY DEVELOPMENT
              </span>
            </div>
            <p className="max-w-2xl font-body text-lg font-light leading-loose text-tungsten md:w-2/3 md:text-xl">
              The North Quay development is the centrepiece of the light
              show — a new stretch of Waterford rising along the Suir, built
              for the century ahead. On the night of July 1, 2028, it becomes
              the stage. The new Waterford meets the ancient one, and for one
              night, the whole city watches the river carry both.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="flex w-full justify-center px-6 py-32 text-center md:px-12 md:py-48">
          <p className="max-w-4xl font-display text-3xl font-light italic leading-[1.15] text-tungsten md:text-5xl">
            Waterford has always known what it is. July 1, 2028 is when the
            world finds out.
          </p>
        </section>
      </FadeIn>
    </>
  );
}
