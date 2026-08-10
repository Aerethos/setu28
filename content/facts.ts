// Scale of the night, told through heritage. These lean on real facts about
// the river and the city rather than invented attendance figures.

export type Fact = { value: string; label: string };

export const facts: Fact[] = [
  { value: '2', label: 'Counties, one river' },
  { value: '914', label: 'AD — Ireland’s oldest city' },
  { value: '184', label: 'km — the length of the Suir' },
  { value: '1', label: 'Night on the water' },
];

// The estate, in true heritage detail (Mount Congreve, Co. Waterford).
export const venueFacts: Fact[] = [
  { value: '1760s', label: 'The Georgian house' },
  { value: '70', label: 'Acres of woodland gardens' },
  { value: '3,000+', label: 'Trees and rare plantings' },
];
