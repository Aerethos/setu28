import Image from 'next/image';

type Overlay = 'bottom' | 'top' | 'full' | 'soft';

const OVERLAY_CLASS: Record<Overlay, string> = {
  bottom: 'bg-gradient-to-t from-abyss via-abyss/50 to-transparent',
  top: 'bg-gradient-to-b from-abyss via-abyss/40 to-transparent',
  full: 'bg-gradient-to-b from-abyss/70 via-abyss/55 to-abyss/85',
  soft: 'bg-abyss/45',
};

export default function CoverImage({
  src,
  alt,
  overlay = 'bottom',
  priority = false,
  motion = true,
  className = '',
}: {
  src: string;
  alt: string;
  overlay?: Overlay;
  priority?: boolean;
  motion?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-prussian ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={motion ? 'object-cover animate-kenburns' : 'object-cover'}
        style={{
          filter: 'contrast(1.08) saturate(0.95) brightness(0.92)',
        }}
      />
      <div className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} />
    </div>
  );
}
