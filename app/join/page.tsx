import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { Reveal } from '@/components/Reveal';
import { DisabledSignup } from '@/components/DisabledSignup';
import { join } from '@/content/copy';

export const metadata: Metadata = {
  title: 'Join',
  description:
    'Register your interest in Waterford 2028 — as a guest, or to work with us on the crew. Sign-ups open soon.',
};

export default function JoinPage() {
  return (
    <>
      <PageHero eyebrow="Sign-up" title={join.title} lede={join.lede} />

      <section className="container-page pb-28">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <DisabledSignup
              id="attend"
              title={join.attend.title}
              body={join.attend.body}
              cta="Register interest"
              fields={[
                { label: 'Full name', type: 'text', autoComplete: 'name' },
                { label: 'Email', type: 'email', autoComplete: 'email' },
              ]}
            />
          </Reveal>

          <Reveal delay={90}>
            <DisabledSignup
              id="work"
              title={join.work.title}
              body={join.work.body}
              cta="Offer to help"
              fields={[
                { label: 'Full name', type: 'text', autoComplete: 'name' },
                { label: 'Email', type: 'email', autoComplete: 'email' },
                { label: 'How you’d like to help', type: 'text' },
              ]}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
