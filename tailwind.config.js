/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // AI lab palette: deep navy canvas, cyan signal, lime status accent.
        aerospace: {
          sky: '#16324F',
          cloud: '#07111F',
          accent: '#42D9FF',
          navy: '#F3F8FC',
          text: '#C3D2DF',
          lime: '#B8F36B',
          panel: '#0D1D2E',
        }
      },
      backgroundImage: {
        'aerospace-gradient': 'linear-gradient(to bottom, #E0F2FE 0%, #FFFFFF 100%)', // Sky to White
        'glass-card': 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.4) 100%)',
      }
    },
  },
  plugins: [],
}
