// How the night unfolds. Framed as intent, by the light of the evening —
// not a published running order, and no clock times.

export type Phase = {
  index: string;
  phase: string;
  when: string;
  body: string;
};

export const programmeIntro =
  'One night, told in movements — from the gathering on the quays to the last of the music at dawn. Times and detail will follow; this is the shape of the evening.';

export const programme: Phase[] = [
  {
    index: '01',
    phase: 'The gathering',
    when: 'Evening',
    body: 'The city comes to the river. The festival opens along both banks — food, music and light on the quays, free and open to everyone.',
  },
  {
    index: '02',
    phase: 'The procession',
    when: 'Dusk',
    body: 'The flotilla takes to the water and begins its passage upriver. The banks fall quiet, then loud, as it passes.',
  },
  {
    index: '03',
    phase: 'The arrival',
    when: 'Nightfall',
    body: 'The boats reach Mount Congreve. The estate is lit for the night; guests come ashore beneath the trees.',
  },
  {
    index: '04',
    phase: 'The ball',
    when: 'Into the night',
    body: 'Reception, dinner and dancing in the transformed estate. Black tie, and the river still moving beyond the windows.',
  },
  {
    index: '05',
    phase: 'Till morning',
    when: 'Dawn',
    body: 'The music runs until the light comes back over the Suir, and the last of the night walks out into the morning.',
  },
];
