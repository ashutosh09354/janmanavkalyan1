/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Palette inspired by goonj.org: warm orange + charcoal + sunny yellow on white/cream.
      // Existing class names (royal / leaf / saffron) are re-mapped so older pages restyle automatically.
      colors: {
        royal: { DEFAULT: '#1D1D1F', 700: '#0F0F10', 50: '#F3F1EE' }, // charcoal (headings, dark sections)
        leaf: { DEFAULT: '#E4572E', 700: '#C94520', 50: '#FDF1EC' },  // brand orange
        brand: { DEFAULT: '#E4572E', dark: '#C94520', light: '#FDF1EC' },
        saffron: { DEFAULT: '#F6B21A', 700: '#E0A00C' },              // sunny yellow
        gold: '#F6B21A',
        ink: '#2B2B2B',
        warm: '#FFFFFF',
        sand: '#FBF4E8',
      },
      fontFamily: {
        sans: ['Poppins', 'DM Sans', 'system-ui', 'sans-serif'],
        serif: ['Poppins', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(0,0,0,0.12)',
        lift: '0 18px 40px -14px rgba(0,0,0,0.25)',
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
      },
      animation: { marquee: 'marquee 38s linear infinite' },
    },
  },
  plugins: [],
}
