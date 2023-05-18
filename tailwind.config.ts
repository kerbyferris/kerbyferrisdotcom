import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header_bg_image: "url('/img/showshop.gif')",
      },
    },
  },
  plugins: [],
} satisfies Config;
