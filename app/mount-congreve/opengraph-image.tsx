import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';

export const alt = 'Mount Congreve — the Georgian estate on the River Suir';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage('Mount Congreve', 'The Georgian estate on the river');
}
