const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'border-dfac': '#dfac13',
        'cs-grey': '#F7F7F7',
      },
    },
  },
  plugins: [],
});

