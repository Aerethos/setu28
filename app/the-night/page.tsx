import FadeIn from '../../components/FadeIn';

const sections = [
  {
    numeral: 'I',
    title: 'The Procession',
    align: 'left',
    body: [
      'Four thousand students. Formal wear. The River Suir at night.',
      'As darkness falls over Waterford’s oldest streets, the boats begin to move. There has never been a night like this in Ireland.',
    ],
  },
  {
    numeral: 'II',
    title: 'The Light Show',
    align: 'right',
    body: [
      'A laser and light show of international scale erupts from Waterford’s North Quay development. Inspired by the spectacle of the Paris 2024 Olympic opening ceremony on the Seine.',
      'Visible across the entire city. The River Suir becomes a mirror.',
    ],
  },
  {
    numeral: 'III',
    title: 'The City',
    align: 'left',
    body: [
      'This night belongs to Waterford. A citywide festival runs simultaneously across the quays, the streets, the pubs, the squares — for families, for children, for every resident of Ireland’s oldest city.',
      'Forty thousand people. One river. One night.',
    ],
  },
  {
    numeral: 'IV',
    title: 'Mount Congreve',
    align: 'right',
    body: [
      'The procession ends at Mount Congreve, one of Ireland’s most extraordinary Georgian estates. The boats dock. The students arrive. The Ball begins.',
      'What follows is a formal celebration unlike anything this country has produced.',
    ],
  },
];

export default function TheNight() {
  return (
    <>
      <section className="flex min-h-[80vh] w-full flex-col justify-center px-6 py-32 md:px-12">
        <h1 className="font-display leading-[1.1] text-tungsten">
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
          <section className="w-full px-6 py-28 md:px-12 md:py-40">
            <div
              className={`flex flex-col gap-8 ${
                section.align === 'right'
                  ? 'md:items-end md:text-right'
                  : 'md:items-start md:text-left'
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
                    className="max-w-2xl font-body text-lg font-light leading-relaxed text-tungsten md:text-xl"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </FadeIn>
      ))}

      <FadeIn>
        <section className="w-full px-6 py-32 md:px-12 md:py-48">
          <p className="font-display text-4xl font-light leading-[1.15] text-tungsten md:text-7xl">
            Global-level logistics. Irish heart.
          </p>
        </section>
      </FadeIn>
    </>
  );
}
