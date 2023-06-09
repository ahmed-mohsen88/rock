/** @type {import('tailwindcss').Config} */
import { screens as _screens } from "tailwindcss/defaultTheme";

export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  "./public/**/*.{js,jsx,ts,tsx}",
  " ./src/**/*.{html,js}",
];
export const theme = {
  extend: {
    colors: {
      "regal-blue": "#243c5a",
      DarkText: "hsl(229, 25%, 31%)",
      ScoreText: "hsl(229, 64%, 46%)",
      headerOutline: "hsl(217, 16%, 45%)",
      circleBg: "#D9D9D9",
    },
    backgroundImage: {
      ScissorsGradient:
        "radial-gradient(circle, hsl(39, 89%, 49%) , hsl(40, 84%, 53%))",
      PaperGradient:
        "radial-gradient(circle,hsl(230, 89%, 62%) , hsl(230, 89%, 65%))",
      RockGradient:
        "radial-gradient(circle,hsl(349, 71%, 52%) , hsl(349, 70%, 56%))",
      LizardGradient:
        "radial-gradient(circle,hsl(261, 73%, 60%) , hsl(261, 72%, 63%))",
      Cyan: "radial-gradient(circle,hsl(189, 59%, 53%) , hsl(189, 58%, 57%))",
      trianglebg: "url(./images/bg-triangle.svg)",
      DarkText: "hsl(229, 25%, 31%)",
      headerOutline: "hsl(217, 16%, 45%)",
    },
    boxShadow: {
      innerShadow: "inset 0px 6px 2px hsl(0, 0%, 75%)",
      outerShadowPaper: "inset 0px -8px 2px hsl(220, 97%, 37%)",
      outerShadowRock: "inset 0px -8px 2px hsl(349, 70%, 40%) ",
      outerShadowScissor: "inset 0px -8px 2px hsl(40, 84%, 40%)",
    },
    width: {
      vw_10: "10vw",
    },
    height: {
      vh_10: "10vw",
      vh_100: "100vh",
    },
    screens: {
      xs: "150px",
      sm: "500px",
      md: "700px",
      lg: "1000px",
      xl: "1500px",
      // ..._screens,
    },
  },
};
export const plugins = [];
