'use client';

import { useEffect, useState } from 'react';

const LINKS = [
  { href: '#vision', label: 'THE VISION' },
  { href: '#the-night', label: 'THE NIGHT' },
  { href: '#waterford', label: 'WATERFORD' },
];

export default function Nav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = (href: string) => {
    setMenuOpen(false);
    const el = document.getElementById(href.slice(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-6 transition-opacity duration-500 sm:px-10 md:px-16"
        style={{ opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none' }}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="font-body text-[0.65rem] font-light tracking-widest2 text-tungsten transition-colors duration-200 hover:text-electric"
        >
          SETU BALL 2028
        </button>

        <div className="hidden items-center gap-8 md:flex lg:gap-12">
          {LINKS.map((link) => {
            const active = activeId === link.href.slice(1);
            return (
              <button
                key={link.href}
                onClick={() => handleNavigate(link.href)}
                className="font-body text-[0.65rem] font-light tracking-widest2 transition-colors duration-200 hover:text-electric"
                style={{ color: active ? 'var(--electric)' : 'var(--tungsten)' }}
              >
                {link.label}
              </button>
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
          const active = activeId === link.href.slice(1);
          return (
            <button
              key={link.href}
              onClick={() => handleNavigate(link.href)}
              className="font-display text-4xl font-light transition-colors duration-200"
              style={{ color: active ? 'var(--electric)' : 'var(--tungsten)' }}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </>
  );
}
