import type { Config } from 'tailwindcss'

const baseConfig: Omit<Config, 'content'> = {
  theme: {
    extend: {
      colors: {
        primary: {
          // depends on the primary color of your project
          50: "#E9EDFC",
          100: "#D2DBF9",
          200: "#A5B7F3",
          300: "#7893ED",
          400: "#4B6FE7",
          500: "#1E4BDF",
          600: "#183CB4",
          700: "#122D87",
          800: "#0C1E5A",
          900: "#060F2D",
          950: "#030816",
        },
        secondary: {
          // depends on the secondary color of your project
          50: "#FFF5E5",
          100: "#FFEBCC",
          200: "#FFD494",
          300: "#FFC061",
          400: "#FFA929",
          500: "#F59500",
          600: "#C27400",
          700: "#945900",
          800: "#613A00",
          900: "#331F00",
          950: "#190F00"
        },
        tertiary: {
          // depends on the primary color of your project
          50: "#FEE9E7",
          100: "#FDD3CE",
          200: "#FBA69D",
          300: "#F97A6C",
          400: "#F74E3B",
          500: "#F5250D",
          600: "#C41B08",
          700: "#931406",
          800: "#620D04",
          900: "#310702",
          950: "#180301"
        },
        'light-accent': {
          // depends on the accent color of your project
          50: "#FDFAFF",
          100: "#FAF5FE",
          200: "#F6ECFE",
          300: "#F1E2FD",
          400: "#EDD9FD",
          500: "#E9D0FC",
          600: "#C079F6",
          700: "#9722F1",
          800: "#670BAD",
          900: "#330656",
          950: "#1A032B"
        },
        'dark-accent': {
          50: "#DEE6FC",
          100: "#B9CAF8",
          200: "#7899F2",
          300: "#3364EB",
          400: "#1340BE",
          500: "#0C297A",
          600: "#0A2162",
          700: "#07194A",
          800: "#051133",
          900: "#020817",
          950: "#01050E"
        },
        success: {
          // depends on the success color of your project
          50: "#E3F7EC",
          100: "#CBF0DD",
          200: "#98E2BA",
          300: "#60D295",
          400: "#35BB73",
          500: "#268754",
          600: "#1E6B42",
          700: "#165031",
          800: "#103822",
          900: "#081C11",
          950: "#030C07"
        },
        warning: {
          // depends on the warning color of your project
          50: "#FEF9E6",
          100: "#FEF2CD",
          200: "#FDE69B",
          300: "#FBD96A",
          400: "#FACD38",
          500: "#F9C109",
          600: "#C79A05",
          700: "#957304",
          800: "#644D02",
          900: "#322601",
          950: "#191301"
        },
        danger: {
          // depends on the danger color of your project
          50: "#FBE9EB",
          100: "#F8D8DB",
          200: "#F1ACB3",
          300: "#EA858F",
          400: "#E45D6B",
          500: "#DD3545",
          600: "#BC202F",
          700: "#8C1823",
          800: "#5C0F17",
          900: "#30080C",
          950: "#160405"
        },
        info: {
          // depends on the info color of your project
          50: "#ECFAFE",
          100: "#D9F4FC",
          200: "#B3EAF9",
          300: "#8EDFF6",
          400: "#68D5F3",
          500: "#42CAF0",
          600: "#12B6E3",
          700: "#0D88AA",
          800: "#095B71",
          900: "#042D39",
          950: "#02171C"
        },
        light: {
          // depends on the light color of your project
          50: "#FFFFFF",
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#BFBFBF",
          400: "#A6A6A6",
          500: "#8C8C8C",
          600: "#737373",
          700: "#595959",
          800: "#404040",
          900: "#262626",
          950: "#1A1A1A"
        },
        dark: {
          // depends on the dark color of your project
          50: "#E6E6E6",
          100: "#D9D9D9",
          200: "#BFBFBF",
          300: "#A6A6A6",
          400: "#8C8C8C",
          500: "#737373",
          600: "#595959",
          700: "#404040",
          800: "#262626",
          900: "#0D0D0D",
          950: "#000000"
        },
        default: {
          50: "#FCFCFC",
          100: "#F7F7F7",
          200: "#F2F2F2",
          300: "#EAEBEB",
          400: "#E5E6E6",
          500: "#DEDFDF",
          600: "#B1B4B4",
          700: "#838686",
          800: "#585B5B",
          900: "#2B2C2C",
          950: "#171717"
        },
        'primary-text': '#E9EDFC',
        'secondary-text': '#0C297A',
        'tertiary-text': '#FEE9E7'
      }
    }
  },
  plugins: [],
}
export default baseConfig
