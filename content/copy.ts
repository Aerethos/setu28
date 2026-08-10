// Page copy. Plain, declarative, unhurried — but there is more of it now.

type ExplainerItem = {
  index: string;
  eyebrow: string;
  title: string;
  gloss?: string;
  body: string;
  meta: string;
  href: string;
  linkLabel: string;
};

export const home: {
  manifesto: string[];
  banksLine: string;
  movements: ExplainerItem[];
  processionTitle: string;
  factsTitle: string;
  programmeTitle: string;
  faqTitle: string;
  ctaTitle: string;
  ctaBody: string;
} = {
  manifesto: [
    'On the first night of July 2028, a city turns to face its river.',
    'A flotilla carries students from the Waterford quays upriver to Mount Congreve, the Georgian estate on the water, where a black-tie ball runs till morning. Along the way the whole city comes to the banks — Waterford to the south, Kilkenny to the north — for a free festival on the water.',
    'One river. Two counties. One night.',
  ],
  banksLine:
    'Free to watch from both banks — Waterford to the south, Kilkenny to the north. Two counties, one river, a single line of light between them.',
  movements: [
    {
      index: '01',
      eyebrow: 'The river',
      title: 'The Suir carries the night',
      body: 'The river is both the stage and the route. One of the Three Sisters, it runs through the heart of the oldest city in Ireland — and for one night the whole evening moves with the water, from the quays out to the estate.',
      meta: 'The route',
      href: '/festival',
      linkLabel: 'The procession',
    },
    {
      index: '02',
      eyebrow: 'The festival',
      title: 'Féile na Siúire',
      gloss: 'Festival of the Suir',
      body: 'A flotilla moves upriver at dusk, free to watch from both banks, with a public festival alongside it — food, music and light on the quays for anyone who turns up. No ticket, no gate. The city’s own.',
      meta: 'Free · both banks',
      href: '/festival',
      linkLabel: 'The festival',
    },
    {
      index: '03',
      eyebrow: 'The ball',
      title: 'The SETU Ball',
      body: 'At the end of the river, Mount Congreve is transformed. A black-tie ball for students — reception, dinner and dancing beneath the trees of a Georgian estate, running till the light comes back.',
      meta: 'Black tie · till morning',
      href: '/ball',
      linkLabel: 'The SETU Ball',
    },
  ],
  processionTitle: 'The procession',
  factsTitle: 'The measure of it',
  programmeTitle: 'How the night unfolds',
  faqTitle: 'Questions',
  ctaTitle: 'Be part of the night',
  ctaBody:
    'Sign-ups open soon — as a guest at the ball, or to work with us on the crew that makes the night happen. Register your interest and we’ll be in touch.',
};

export const festival = {
  title: 'Féile na Siúire',
  gloss: 'Festival of the Suir',
  lede: 'The heart of the night. Free, open, and unticketed — the procession is the spectacle, and the whole city is invited to the water.',
  body: [
    'Féile na Siúire is the river procession and the public festival that runs alongside it. As the light goes, a flotilla takes to the water at the Waterford quays and moves upriver, together, out to Mount Congreve.',
    'It is free to attend and open to anyone who turns up. You can watch from either bank — Waterford to the south, Kilkenny to the north — and along the quays there is a festival of food, music and light for the evening.',
    'There is no ticket and no gate. Come to the water and watch the city move.',
  ],
  festivalSection: {
    title: 'On the banks',
    body: 'While the flotilla passes, the quays come alive. Food and drink from the region, music through the evening, and light on the water — a free festival for the whole city and everyone who travels to it.',
    points: [
      'Food and drink along the quays',
      'Music through the evening',
      'Light on the water, both banks',
      'Big screens at the overflow sites',
    ],
  },
  viewingLinkLabel: 'Where to watch — both banks',
};

export const viewingPage = {
  title: 'Viewing points',
  status: 'Indicative viewing areas — subject to confirmation.',
  lede: 'The procession moves upriver between the two banks. These are named vantage points along the water — nothing here is final, and there are no access details yet.',
};

export const ball = {
  title: 'The SETU Ball',
  lede: 'Black tie. A Georgian estate on the river, transformed. Music till morning.',
  intro: [
    'The SETU Ball is the private event at the end of the river. When the procession reaches Mount Congreve, the estate becomes the setting for a black-tie ball that runs till the light comes back over the Suir.',
    'Guests arrive by water and come ashore beneath the trees. What follows is a single, unhurried night — reception, dinner, and dancing in a place made for it.',
  ],
  arc: [
    {
      index: '01',
      title: 'Arrival by river',
      body: 'The estate lit for the night, and the last of the procession coming ashore at the water’s edge.',
    },
    {
      index: '02',
      title: 'Reception under the trees',
      body: 'Drinks in the grounds of one of Ireland’s great gardens, the river still moving beyond the lawns.',
    },
    {
      index: '03',
      title: 'Dinner in the estate',
      body: 'A seated dinner in the transformed house — the centrepiece of the evening.',
    },
    {
      index: '04',
      title: 'Dancing till morning',
      body: 'Music into the night and out the far side of it, until dawn walks in over the Suir.',
    },
  ],
  dressCode: {
    title: 'Dress',
    body: 'Black tie. This is a formal night — the estate, and the occasion, ask for it.',
  },
  eligibility:
    'The SETU Ball is a student event. Places will be offered to students in third year and above, with SETU students first. Ticketing details will follow — we’re still working on this.',
  ctaLabel: 'Register interest',
};

export const venue = {
  title: 'Mount Congreve',
  lede: 'A Georgian estate on the banks of the Suir, and one of the great gardens of Ireland — the ball’s setting.',
  body: [
    'Mount Congreve sits above the river a little upstream of Waterford city, near Kilmeaden. The Georgian house dates to the eighteenth century; the gardens that surround it were shaped over a lifetime into some seventy acres of woodland, walks and rare plantings that run down toward the water.',
    'It is a place built for arrival — long avenues, old trees, and the river below. For one night it becomes the end of the procession and the setting for the ball.',
    'More about the estate, and how the night will use it, will follow.',
  ],
  gardenNote:
    'Mount Congreve’s gardens are among the most significant in the country — decades in the making, at their best in the long light of early summer.',
};

export const about = {
  title: 'The project',
  lede: 'Waterford 2028 is a student-founded civic event, built for the city that hosts it — and for the river that gives it its shape.',
  body: [
    'The idea is simple. One night that belongs to the river and the two counties on either side of it: a free procession and public festival for everyone, and a ball for students at the end of it.',
    'It began with a small group of students who thought the city deserved a night of its own — something on the scale of the place, held on the water that made it. From there it grew into Waterford 2028.',
    'It is early, and much is still being worked out. What is fixed is the date, the river, and the intent.',
  ],
  principlesTitle: 'What we hold to',
  principles: [
    {
      title: 'The city first',
      body: 'The festival is free and open to everyone. Whatever else the night becomes, the river stays the city’s.',
    },
    {
      title: 'Both banks',
      body: 'Waterford and Kilkenny, south and north. The river belongs to both, and so does the night.',
    },
    {
      title: 'Say only what’s true',
      body: 'Where something isn’t decided, we say so. We would rather be brief than invent.',
    },
  ],
  committeeTitle: 'The committee',
  governanceTitle: 'Governance',
};

export const partners = {
  title: 'Partners',
  lede: 'Waterford 2028 is built with a small number of partners who share the intent — a night made properly, for the city and the river.',
  whyTitle: 'Why partner',
  why: [
    'A once-in-a-generation civic moment on the water, watched from both banks and carried by a student generation building it themselves.',
    'A partnership that reaches a city, two counties, and a university community — in the year the night arrives, and the two building up to it.',
  ],
  waysTitle: 'Ways to partner',
  ways: [
    { title: 'Principal partner', body: 'Lead the night alongside us, across the festival and the ball.' },
    { title: 'The festival', body: 'Support the free public festival on the banks — the part that belongs to everyone.' },
    { title: 'The estate', body: 'Bring the ball at Mount Congreve to life, from arrival to morning.' },
  ],
  withUsTitle: 'Partner with us',
  withUsBody:
    'If you’d like to be part of the night, we’d be glad to talk. There’s no form yet — just an email.',
};

export const join = {
  title: 'Join',
  lede: 'Two ways to be part of Waterford 2028. Sign-ups open soon — build the night with us, or come to the water.',
  attend: {
    title: 'Attend',
    body: 'Register your interest as a guest and we’ll let you know when details are confirmed.',
  },
  work: {
    title: 'Work with us',
    body: 'Volunteers and crew make the night happen — on the water, on the banks, and at the estate. Tell us you’d like to help.',
  },
  closedNotice: 'Sign-ups open soon.',
};
