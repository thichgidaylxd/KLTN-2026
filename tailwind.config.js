export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        prompt: ["Prompt", "sans-serif"],
      },
      colors: {
        "cta-yellow": "#F8FF5B",
        "light-yellow-1": "#FDFFDD",
        "light-yellow-2": "#FDFFD4",
        "light-yellow-3": "#FEFFE7",
        "dark-olive": "#3A3D00",
        cream: "#FAF7F0",
        "leaf-green": "#99C23B",
        "near-black": "#0D0C0C",
        "body-dark": "#292D32",
        "glass-start": "#ECF0A4",
        "glass-end": "#DCDEAD",
      },
    },
  },
};
