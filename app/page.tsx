import Image from 'next/image';
import { IMAGES } from '../lib/images';

export default function Home() {
  return (
    <section className="relative flex h-[100svh] w-full flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={IMAGES.lightshowAerialWide}
          alt="Aerial view of the light show over the River Suir at Waterford"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ filter: 'contrast(1.08) saturate(0.95) brightness(0.85)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-abyss/70 via-abyss/50 to-abyss/85" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        <span className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten">
          SETU BALL 2028 — WATERFORD, IRELAND
        </span>
        <p className="font-display text-[clamp(2.75rem,10vw,7rem)] font-light leading-[1.1] text-tungsten">
          July 1, 2028.
        </p>
        <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
          MORE TO COME SOON
        </span>
      </div>
    </section>
  );
}
