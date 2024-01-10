import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // header_bg_image: "url('/img/showshop.gif')",
        header_bg_image:
          "url('https://www.dropbox.com/scl/fi/ooa0x727wtx5nte4vk0hy/showshop.gif?rlkey=y9qp9zgst43b2unta13xq8cxr&dl=0&raw=1')",
      },
    },
  },
  plugins: [],
} satisfies Config;
