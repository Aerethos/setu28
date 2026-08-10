// Global, site-wide content. Editable without touching layout.

export const EVENT_DATE_ISO = '2028-07-01T00:00:00+01:00';

export const site = {
  brand: 'Waterford 2028',
  wordmark: ['WATERFORD', '2028'] as const,
  tagline: 'One night on the Suir.',
  taglineAlternates: ['Both banks, one river.', 'The city moves to the water.'],
  dateLine: '1 July 2028 · River Suir · Mount Congreve',
  domain: 'setu28.com',
  url: 'https://setu28.com',
  description:
    'Waterford 2028 — one night on the River Suir. A river procession from the city quays to Mount Congreve, free to watch from both banks, on 1 July 2028.',
};

export const nav: { href: string; label: string }[] = [
  { href: '/festival', label: 'Féile na Siúire' },
  { href: '/festival/viewing', label: 'Viewing' },
  { href: '/ball', label: 'The SETU Ball' },
  { href: '/mount-congreve', label: 'Mount Congreve' },
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/join', label: 'Join' },
];

export const governance =
  'Waterford 2028 is an independent, student-founded project. It is not affiliated with or endorsed by South East Technological University. We hope to work with the university as the project develops.';

export type CommitteeMember = { name: string; role: string };

export const committee: CommitteeMember[] = [
  { name: 'Nathan Sfendji', role: 'Founder & President' },
  { name: 'Conor Maxim', role: 'Vice President' },
  { name: 'Chloe Zhao', role: 'Board Member' },
  { name: 'Jack Jones', role: 'Board Member' },
  { name: 'Leon McGhee', role: 'Board Member' },
  { name: 'Orlaith McGuire', role: 'Board Member' },
];

export const partner = {
  name: 'AerEthos',
  role: 'Main partner',
  contactEmail: 'partners@setu28.com',
};
