const colors = require("tailwindcss/colors");
const tinycolor = require("tinycolor2");

const getFullPalette = require("./utils/getFullPalette");
const getInstance = require("./utils/getInstance");
const instance = getInstance();

// Custom color palette based on provided colors
const customColors = {
  richGold: "#b5852a",
  warmWhite: "#f9f7f4",
  charcoalBlack: "#2e2e2e",
  softDoveGrey: "#dcd8d4",
  dustyTaupe: "#a68a64",
  white: "#ffffff",
};

// Map custom colors to theme
// Use built-in palettes closest to the custom colours for extended shades
const primary = "amber";
const secondary = "stone";
const success = "emerald";
const error = "red";
const info = "blue";
const warning = "orange";
const progress = "yellow";
const neutral = "slate"; // Using slate for neutrals to match oxford blue

const light = {
  name: "base", // At least one theme must have a name field called 'base'
  type: "light",
  value: "light",
  label: "Light",
  selectors: [":root", ".light"],
  theme: {
    colors: {
      // Primary colour - rich gold
      "elements-primary-dimmed": customColors.richGold,
      "elements-primary-main": tinycolor(customColors.richGold)
        .darken(0)
        .toString(),
      "elements-primary-shadow": tinycolor(customColors.richGold)
        .darken(5)
        .toString(),
      "elements-primary-shadow-heavy": tinycolor(customColors.richGold)
        .darken(10)
        .toString(),
      "elements-primary-highlight": tinycolor(customColors.richGold)
        .lighten(5)
        .toString(),
      "elements-primary-light": tinycolor(customColors.richGold)
        .lighten(10)
        .toString(),
      "elements-primary-contrastText": customColors.white,
      "elements-primary-bg": tinycolor(customColors.richGold)
        .lighten(30)
        .toString(),

      // Secondary colour - dusty taupe
      "elements-secondary-dimmed": tinycolor(customColors.dustyTaupe)
        .lighten(15)
        .toString(),
      "elements-secondary-main": customColors.dustyTaupe,
      "elements-secondary-shadow": tinycolor(customColors.dustyTaupe)
        .darken(5)
        .toString(),
      "elements-secondary-shadow-heavy": tinycolor(customColors.dustyTaupe)
        .darken(10)
        .toString(),
      "elements-secondary-highlight": tinycolor(customColors.dustyTaupe)
        .lighten(30)
        .toString(),
      "elements-secondary-contrastText": customColors.dustyTaupe,
      ...getFullPalette("elements-secondary", secondary),

      // Alert
      "helpers-error-dimmed": colors[error]["50"],
      "helpers-error-main": colors[error]["500"],
      "helpers-error-button": colors[error]["600"],
      "helpers-error-button-hover": colors[error]["500"],

      "helpers-warning-dimmed": colors[warning]["50"],
      "helpers-warning-main": colors[warning]["500"],
      "helpers-warning-button": colors[warning]["600"],
      "helpers-warning-button-hover": colors[warning]["700"],

      "helpers-remove-button": tinycolor(customColors.charcoalBlack)
        .lighten(15)
        .toString(),
      "helpers-remove-button-hover": customColors.charcoalBlack,

      "helpers-success-dimmed": colors[success]["50"],
      "helpers-success-main": colors[success]["500"],
      "helpers-success-button":
        instance === "default" ? colors[success]["600"] : customColors.richGold,
      "helpers-success-button-hover":
        instance === "default"
          ? colors[success]["700"]
          : tinycolor(customColors.richGold).darken(10).toString(),

      "helpers-info-dimmed": colors[info]["50"],
      "helpers-info-main": colors[info]["500"],
      "helpers-info-button": colors[info]["600"],
      "helpers-info-button-hover": colors[info]["700"],

      "helpers-progress-dimmed": colors[progress]["50"],
      "helpers-progress-main": colors[progress]["500"],

      // Invalid
      "helpers-invalid-dimmed": tinycolor(customColors.charcoalBlack)
        .lighten(50)
        .toString(),
      "helpers-invalid-main": tinycolor(customColors.charcoalBlack)
        .lighten(20)
        .toString(),
      "helpers-invalid-button": tinycolor(customColors.charcoalBlack)
        .lighten(10)
        .toString(),
      "helpers-invalid-button-hover": customColors.charcoalBlack,

      // Text
      "text-primary": colors[neutral]["900"],
      "text-secondary": colors[neutral]["700"],
      "text-clear": colors[neutral]["50"],
      "text-tertiary": colors[neutral]["500"],
      "text-dimmed": colors[neutral]["400"],
      "text-disabled": colors[neutral]["300"],
      "text-theme": "#6b5988",
      "text-signout": colors[error]["500"],

      // Dividers
      "divider-shadow-heavy": tinycolor(customColors.softDoveGrey)
        .lighten(60)
        .toString(),
      "divider-shadow": tinycolor(customColors.softDoveGrey)
        .lighten(65)
        .toString(),
      "divider-main": tinycolor(customColors.softDoveGrey).lighten(70).toString(),
      "divider-dimmed": tinycolor(customColors.softDoveGrey)
        .lighten(75)
        .toString(),

      // Borders
      "border-shadow": tinycolor(customColors.softDoveGrey)
        .lighten(65)
        .toString(),
      "border-main": tinycolor(customColors.softDoveGrey).lighten(70).toString(),
      "border-dimmed": tinycolor(customColors.softDoveGrey)
        .lighten(75)
        .toString(),
      "border-white": customColors.white,
      "button-hover": tinycolor(customColors.warmWhite).darken(5).toString(),

      // Backgrounds
      "main-background": customColors.warmWhite,
      "card-background": customColors.white,
      "modal-background": tinycolor(customColors.warmWhite)
        .darken(5)
        .toString(),

      "neutral-dimmed-heavy": customColors.white,
      "neutral-dimmed": customColors.warmWhite,
      neutral: tinycolor(customColors.warmWhite).darken(5).toString(),
      "neutral-shadow": tinycolor(customColors.warmWhite)
        .darken(10)
        .toString(),
      "neutral-shadow-heavy": tinycolor(customColors.warmWhite)
        .darken(15)
        .toString(),
    },
  },
  muiThemeBase: {
    palette: {
      mode: "light",
      primary: {
        main: customColors.richGold,
      },
      secondary: {
        main: customColors.dustyTaupe,
      },
      error: {
        main: colors[error]["500"],
      },
    },
  },
};

module.exports = light;
