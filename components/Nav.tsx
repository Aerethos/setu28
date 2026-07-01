'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const LINKS = [
  { href: '/the-night', label: 'THE NIGHT' },
  { href: '/vision', label: 'THE VISION' },
  { href: '/waterford', label: 'WATERFORD' },
  { href: '/contact', label: 'CONTACT' },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [visible, setVisible] = useState(!isHome);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }

    setVisible(false);

    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };

    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-opacity duration-500 md:px-12"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      >
        <Link
          href="/"
          className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten transition-colors duration-200 hover:text-electric"
        >
          SETU BALL 2028
        </Link>

        <div className="hidden items-center gap-6 md:flex lg:gap-10">
          {LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-[0.65rem] font-light tracking-widest2 transition-colors duration-200 hover:text-electric"
                style={{ color: active ? 'var(--electric)' : 'var(--tungsten)' }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <button
          aria-label="Open menu"
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setMenuOpen(true)}
        >
          <span className="block h-px w-6 bg-tungsten" />
          <span className="block h-px w-6 bg-tungsten" />
          <span className="block h-px w-6 bg-tungsten" />
        </button>
      </nav>

      <div
        className="fixed inset-0 z-50 flex flex-col items-start justify-center gap-8 bg-abyss px-8 transition-opacity duration-300 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        <button
          aria-label="Close menu"
          className="absolute right-8 top-8 font-body text-[0.65rem] font-light tracking-widest2 text-tungsten"
          onClick={() => setMenuOpen(false)}
        >
          CLOSE
        </button>

        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-4xl font-light transition-colors duration-200"
              style={{ color: active ? 'var(--electric)' : 'var(--tungsten)' }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
