import { ImageResponse } from 'next/og';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

// Typographic favicon — the wordmark's initial in brass on night.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#08141A',
          color: '#C2A268',
          fontSize: 44,
          fontFamily: 'serif',
          fontWeight: 600,
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
