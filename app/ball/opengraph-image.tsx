import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';

export const alt = 'The SETU Ball at Mount Congreve';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage('The SETU Ball', 'Black tie · Mount Congreve · till morning');
}
