import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';

export const alt = 'Join Waterford 2028 — sign-ups open soon';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage('Join', 'Sign-ups open soon');
}
