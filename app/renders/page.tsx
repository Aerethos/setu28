import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import FadeIn from '../../components/FadeIn';

const RENDERS_DIR = path.join(process.cwd(), 'public', 'images', 'renders');
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

function getRenderFiles(): string[] {
  try {
    return fs
      .readdirSync(RENDERS_DIR)
      .filter((file) => VALID_EXTENSIONS.includes(path.extname(file).toLowerCase()))
      .sort();
  } catch {
    return [];
  }
}

export default function Renders() {
  const files = getRenderFiles();

  return (
    <>
      <section className="flex min-h-[60vh] w-full flex-col justify-center px-6 py-32 md:px-12">
        <span className="font-body text-[0.65rem] font-light tracking-widest2 text-electric">
          CONCEPT IMAGERY
        </span>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,8vw,7rem)] font-light leading-[1.1] text-tungsten">
          Early renders.
        </h1>
        <p className="mt-8 max-w-xl font-body text-base font-light leading-loose text-tungsten md:text-lg">
          First visualisations of the night, ahead of July 1, 2028. Committee
          renders are added here as they are finalised.
        </p>
      </section>

      <div className="rule mx-6 md:mx-12" />

      {files.length === 0 ? (
        <section className="w-full px-6 py-32 md:px-12 md:py-40">
          <p className="max-w-md font-body text-sm font-light leading-loose tracking-wide text-tungsten opacity-50">
            No renders published yet. Check back closer to the night.
          </p>
        </section>
      ) : (
        <section className="w-full px-6 py-20 md:px-12 md:py-28">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-2">
            {files.map((file, i) => (
              <FadeIn key={file} delay={(i % 2) * 120}>
                <div className="group relative aspect-[4/3] w-full overflow-hidden bg-prussian">
                  <Image
                    src={`/images/renders/${file}`}
                    alt={`SETU Ball 2028 concept render ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
