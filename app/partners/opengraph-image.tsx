import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';

export const alt = 'Partners and sponsorship — Waterford 2028';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage('Partners', 'Built with partners who share the intent');
}
