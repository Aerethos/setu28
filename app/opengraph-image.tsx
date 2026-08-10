import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';
import { site } from '@/content/site';

export const alt = `${site.brand} — ${site.tagline}`;
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage(site.tagline, 'A night on the River Suir');
}
