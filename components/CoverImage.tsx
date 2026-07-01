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
  credit,
  overlay = 'bottom',
  priority = false,
  motion = true,
  className = '',
}: {
  src: string;
  alt: string;
  credit?: string;
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
          filter: 'grayscale(25%) contrast(1.08) brightness(0.8) saturate(0.85)',
        }}
      />
      <div className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} />
      {credit && (
        <span className="absolute bottom-3 right-4 z-10 font-body text-[0.55rem] font-light tracking-widest2 text-tungsten opacity-40">
          {credit}
        </span>
      )}
    </div>
  );
}
