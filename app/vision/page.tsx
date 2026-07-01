import FadeIn from '../../components/FadeIn';

export default function Vision() {
  return (
    <>
      <section className="flex min-h-[100svh] w-full items-center justify-center px-6 md:px-12">
        <p className="max-w-4xl text-center font-display text-[clamp(2rem,6vw,4.5rem)] font-light leading-[1.15] text-tungsten">
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
        <section className="w-full px-6 py-28 md:px-12 md:py-40">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            Inspired by Paris 2024.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="w-full px-6 py-28 text-right md:px-12 md:py-40">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            Built for Waterford.
          </p>
        </section>
      </FadeIn>

      <FadeIn>
        <section className="w-full px-6 py-28 md:px-12 md:py-40">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            Designed for history.
          </p>
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
