import Link from 'next/link';
import { Wordmark } from '@/components/Wordmark';

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[70vh] flex-col justify-center py-20">
      <Wordmark size="sm" />
      <h1 className="mt-8 text-4xl sm:text-6xl" style={{ fontWeight: 320 }}>
        This page has drifted downstream.
      </h1>
      <p className="measure mt-6 text-lg text-mist">
        The page you were looking for isn’t here. Follow the river back to the start.
      </p>
      <Link href="/" className="link-underline mt-8 self-start text-lg text-brass">
        Return home →
      </Link>
    </section>
  );
}
