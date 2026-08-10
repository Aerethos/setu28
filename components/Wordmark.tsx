import Link from 'next/link';
import { site } from '@/content/site';

type Props = {
  as?: 'link' | 'plain';
  size?: 'sm' | 'lg' | 'xl';
  className?: string;
};

const sizes = {
  sm: 'text-sm tracking-wide2',
  lg: 'text-xl sm:text-2xl tracking-wordmark',
  xl: 'text-4xl sm:text-6xl lg:text-7xl tracking-wordmark',
};

// Typographic wordmark — no logo asset. Personality from case and tracking.
export function Wordmark({ as = 'plain', size = 'lg', className = '' }: Props) {
  const [line1, line2] = site.wordmark;
  const content = (
    <span
      className={`inline-flex items-baseline gap-[0.3em] font-sans uppercase ${sizes[size]} ${className}`}
      style={{ fontWeight: 380 }}
    >
      <span>{line1}</span>
      <span className="text-brass">{line2}</span>
    </span>
  );

  if (as === 'link') {
    return (
      <Link href="/" aria-label={`${site.brand} — home`} className="inline-block">
        {content}
      </Link>
    );
  }
  return content;
}
