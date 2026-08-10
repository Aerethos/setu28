import { ImageResponse } from 'next/og';
import { site } from '@/content/site';

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = 'image/png';

// Typographic OG card — no logo, no photography. Dark water + brass.
export function ogImage(title: string, subtitle: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'linear-gradient(160deg, #08141A 0%, #0F2A31 100%)',
          padding: '72px 80px',
          color: '#E9E3D5',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', letterSpacing: 8, fontSize: 30, textTransform: 'uppercase' }}>
          <span>WATERFORD&nbsp;</span>
          <span style={{ color: '#C2A268' }}>2028</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontWeight: 500 }}>{title}</div>
          <div style={{ marginTop: 20, fontSize: 34, color: '#8FA0A2' }}>{subtitle}</div>
        </div>

        <div style={{ display: 'flex', fontSize: 26, color: '#8FA0A2', letterSpacing: 2 }}>
          {site.dateLine}
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
