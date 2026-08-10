import Link from 'next/link';
import { Wordmark } from './Wordmark';
import { nav, site, governance, partner } from '@/content/site';

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Wordmark as="link" size="sm" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">{governance}</p>
            <p className="mt-4 text-sm text-mist">
              {partner.role}: <span className="text-stone">{partner.name}</span>
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-mist hover:text-stone">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>{site.dateLine}</p>
          <p>
            © {new Date().getFullYear()} {site.brand} · {site.domain}
          </p>
        </div>
      </div>
    </footer>
  );
}
