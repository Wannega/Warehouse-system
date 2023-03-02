import { colors } from './colors'

export const lightTheme = {
  button: {
    border: colors.deep_blue,
    color: colors.white,
    bg: colors.deep_blue,
    hover: colors.light_blue,
  },
  content: {
    bg: colors.dark_white,
  },
  section: {
    bg: colors.white,
  },
  forecast: {
    negative: {
      bg: colors.light_red,
      color: colors.dark_red,
    },
    positive: {
      bg: colors.light_green,
      color: colors.dark_green,
    },
  },
  alert: {
    failed: {
      bg: colors.bright_red,
      color: colors.dark_red,
    },
    succeded: {
      bg: colors.light_green,
      color: colors.dark_green,
    },
  },
}
