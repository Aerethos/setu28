import { join } from '@/content/copy';

type Field = { label: string; type: string; placeholder?: string; autoComplete?: string };

// A real, visible sign-up UI that is deliberately inert. No action, no
// success state — the form visibly does not work yet.
export function DisabledSignup({
  id,
  title,
  body,
  fields,
  cta,
}: {
  id: string;
  title: string;
  body: string;
  fields: Field[];
  cta: string;
}) {
  const noticeId = `${id}-notice`;
  return (
    <div className="rounded-lg border border-line bg-water/30 p-8 sm:p-10">
      <h2 className="text-2xl sm:text-3xl" style={{ fontWeight: 340 }}>
        {title}
      </h2>
      <p className="mt-3 leading-relaxed text-mist">{body}</p>

      <form aria-describedby={noticeId} className="mt-8 flex flex-col gap-5">
        <fieldset disabled aria-disabled="true" className="flex flex-col gap-5 opacity-60">
          <legend className="sr-only">{title} — not yet open</legend>
          {fields.map((f) => {
            const fieldId = `${id}-${f.label.toLowerCase().replace(/\s+/g, '-')}`;
            return (
              <div key={fieldId} className="flex flex-col gap-2">
                <label htmlFor={fieldId} className="text-sm uppercase tracking-wide2 text-mist">
                  {f.label}
                </label>
                <input
                  id={fieldId}
                  type={f.type}
                  placeholder={f.placeholder}
                  autoComplete={f.autoComplete}
                  disabled
                  className="rounded-md border border-line bg-night px-4 py-3 text-stone placeholder:text-mist/60"
                />
              </div>
            );
          })}
          <button
            type="submit"
            disabled
            className="mt-2 cursor-not-allowed self-start border border-line px-6 py-3 text-sm uppercase tracking-wide2 text-mist"
          >
            {cta}
          </button>
        </fieldset>
      </form>

      <p
        id={noticeId}
        className="mt-6 inline-block rounded-full border border-brass/50 px-4 py-1.5 text-xs uppercase tracking-wide2 text-brass"
      >
        {join.closedNotice}
      </p>
    </div>
  );
}
