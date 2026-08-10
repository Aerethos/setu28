import { faq } from '@/content/faq';

// Native <details> — accessible and keyboard-operable with no JS.
export function FAQ() {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faq.map((item) => (
        <details key={item.q} className="group">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-xl text-stone transition-colors hover:text-brass [&::-webkit-details-marker]:hidden">
            <span style={{ fontWeight: 340 }}>{item.q}</span>
            <span
              className="shrink-0 text-brass transition-transform duration-300 ease-estate group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <p className="measure pb-6 leading-relaxed text-mist">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
