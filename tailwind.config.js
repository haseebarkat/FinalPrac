module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          100: "#f2f2f2",
          300: "#e2e2e2",
          400: "#bcbcbc",
          600: "#828282",
          900: "#1f1d2b",
          "300_01": "#e0e0e0",
          "400_01": "#c4c4c4",
        },
        deep_purple: { "300_00": "#9b6fee00" },
        blue_gray: { 100: "#d7d7d7", "800_14": "#41305a14" },
        blue: { A400: "#3080ed", "600_cc": "#3081edcc", "700_14": "#3a81bf14" },
        cyan: { 400: "#1bb2de", "400_01": "#18b2de" },
        purple: { 400: "#9b51e0", A200: "#fb37ff" },
        indigo: { "300_00": "#7b7fea00" },
        white: { A700: "#ffffff" },
      },
      backgroundImage: {
        gradient: "linear-gradient(132deg ,#9b51e0,#3081edcc)",
        gradient1: "linear-gradient(125deg ,#9b51e0,#3080ed)",
        gradient2: "linear-gradient(138deg ,#3a81bf14,#41305a14)",
      },
      fontFamily: { poppins: "Poppins" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
