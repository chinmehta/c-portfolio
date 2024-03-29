module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "title-light": "#aaa",
        title: "#777",
        red: "#e9333c",
        white: "#fff",
        "primary-blue": "#627bc0",
        "site-primary": "#111",
        pink: "#fdcbf1",
        purple: "#e6dee9",
        mypeach: "#f5efef",
        mypeachy: "#feada6",
        lightgreygradient: "#2b5876",
        darkgreygradient: "#4e4376",
      },
      letterSpacing: {
        1: "0em",
        2: "0.025em",
        3: "0.05em",
        4: "0.1em",
      },
      rotate: {
        30: "30deg",
      },
      animation: {
        "spin-slow": "animate 10s linear infinite",
      },
    },
  },
  plugins: [],
};
