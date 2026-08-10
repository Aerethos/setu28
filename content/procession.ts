// The procession upriver — the flotilla's route from the city to the estate.
// Atmospheric, in the light of the evening rather than clock times (no
// timetable is published). Named places along the real course of the Suir.

export type Stop = {
  index: string;
  place: string;
  bank: 'South' | 'North' | 'River';
  light: string; // where the evening is, not a clock time
  note: string;
};

export const processionIntro =
  'At the close of the day the boats gather at the city quays. As the light goes, they move as one — upriver, unhurried, carried by the tide of the Suir toward Mount Congreve. From both banks, the whole city watches the water.';

export const procession: Stop[] = [
  {
    index: '01',
    place: 'Adelphi Quay',
    bank: 'South',
    light: 'Last light',
    note: 'The flotilla forms on the Waterford quays. Lanterns are lit; the city gathers along the water.',
  },
  {
    index: '02',
    place: 'Custom House Quay',
    bank: 'South',
    light: 'Dusk',
    note: 'The boats slip their moorings and take to the river together, the current at their backs.',
  },
  {
    index: '03',
    place: "Meagher's Quay · Reginald's Tower",
    bank: 'South',
    light: 'Blue hour',
    note: 'Past the oldest stone in Ireland’s oldest city — a thousand years of quayside looking on.',
  },
  {
    index: '04',
    place: 'Ferrybank Embankment',
    bank: 'North',
    light: 'Nightfall',
    note: 'Kilkenny answers from the far bank. Two counties, one river, a single line of light between them.',
  },
  {
    index: '05',
    place: 'Bilberry Rock',
    bank: 'South',
    light: 'Full dark',
    note: 'The city falls away behind. The river widens and the estate woods begin to gather on the water.',
  },
  {
    index: '06',
    place: 'Grannagh Castle',
    bank: 'North',
    light: 'Full dark',
    note: 'A Norman keep stands over the bend, floodlit above the reeds, marking the turn toward Mount Congreve.',
  },
  {
    index: '07',
    place: 'Mount Congreve Riverbank',
    bank: 'River',
    light: 'The night',
    note: 'Journey’s end. The estate rises from the dark, lit for arrival — and the ball begins.',
  },
];
