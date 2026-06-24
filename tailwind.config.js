/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#1A56DB",
        secondary: "#059669",
        dark:      "#111827",
        light:     "#F0F4FF",
        accent:    "#F59E0B",
        danger:    "#DC2626",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0,0,0.2,1) infinite',
      },
      boxShadow: {
        'glow-blue':  '0 0 30px rgba(26,86,219,0.3)',
        'glow-green': '0 0 30px rgba(5,150,105,0.3)',
        'card':       '0 4px 24px rgba(0,0,0,0.08)',
        'card-lg':    '0 8px 48px rgba(0,0,0,0.12)',
      },
    },
  },
  plugins: [],
}
