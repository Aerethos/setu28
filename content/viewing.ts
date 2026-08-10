// Indicative viewing areas. Named locations only — no maps, no pin data,
// no capacity figures, no access instructions.

export type Bank = {
  county: string;
  side: string;
  reach: string;
  points: string[];
};

export const southBank: Bank = {
  county: 'Waterford',
  side: 'South bank',
  reach: 'City quays to Mount Congreve',
  points: [
    'Adelphi Quay',
    'Custom House Quay',
    "Meagher's Quay / Reginald's Tower",
    'Bilberry Rock',
    'Mount Congreve Riverbank',
  ],
};

export const northBank: Bank = {
  county: 'Kilkenny',
  side: 'North bank',
  reach: 'Ferrybank upstream to Dunkitt',
  points: [
    'Snowhill Point',
    'Ferrybank Embankment',
    'Rockshire Slope',
    'Grannagh Castle Meadow',
    'Dunkitt Marshes Walk',
  ],
};

export const overflow = {
  title: 'Unticketed overflow, with big screens',
  points: ['The People’s Park', 'Ferrybank screen site'],
};
