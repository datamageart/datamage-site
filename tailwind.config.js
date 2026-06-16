/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./installs/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        ink: "#0b0d12",
        phosphor: "#c8ff00",
        magenta: "#ff1bd6",
        cyan: "#00eaff",
        violet: "#8f43ff",
        warning: "#fffb00",
        signal: "#f4f7ff"
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "Arial", "sans-serif"],
        mono: ["IBM Plex Mono", "Consolas", "monospace"]
      }
    }
  },
  plugins: []
};
