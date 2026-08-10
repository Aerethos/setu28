import { ogImage, OG_SIZE, OG_CONTENT_TYPE } from '@/components/og';

export const alt = 'Féile na Siúire — the river procession and public festival';
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return ogImage('Féile na Siúire', 'The river procession — free, both banks');
}
