/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // Derived from the river and the estate. Dark water, night sky,
        // stone, and a single warm accent used sparingly.
        night: '#08141A', // night sky — deepest ground
        water: '#0F2A31', // deep water — primary dark surface
        south: '#102A30', // Waterford, south bank (a touch warmer/teal)
        north: '#0C232C', // Kilkenny, north bank (a touch cooler/slate)
        stone: '#E9E3D5', // limestone — primary light
        mist: '#8FA0A2', // muted slate — secondary text
        brass: '#C2A268', // warm accent — sparingly
        line: 'rgba(233, 227, 213, 0.12)', // hairline on dark
      },
      fontFamily: {
        // One family only, across the whole site.
        sans: ['var(--font-fraunces)', 'Georgia', 'serif'],
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      letterSpacing: {
        wordmark: '0.34em',
        wide2: '0.18em',
        wide3: '0.24em',
      },
      maxWidth: {
        prose2: '64ch',
      },
      transitionTimingFunction: {
        estate: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
