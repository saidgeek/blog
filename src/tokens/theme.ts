const choices = {
  color: {
    brand: {
      brinkPink: 'hsla(357, 94%, 68%, 1.00)',
      malibu: 'hsla(199, 62%, 63%, 1.00)',
      pumice: 'hsla(109, 0%, 78%, 1.00)',
      steelGray: 'hsla(228, 4%, 28%, 1.00)',
      supernova: 'hsla(36, 97%, 61%, 1.00)',
    },

    base: {
      black: 'hsla(0, 0%, 10%, 1.00)',
      white: 'hsla(0, 0%, 95%, 1.00)',
      transparent: 'transparent',
    },
  },
  fontFamily: {
    sans: ['Raleway', 'Open Sans', 'Arial', 'sans-serif'],
    mono: ['Inconsolata', 'Open Sans', "'Roboto Mono'", 'monospace'],
  },
  fontLineHeight: {
    lg: '1.3125rem',
    xl: '1.75rem',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    Bold: 700,
  },
  fontSize: {
    base: '16px',
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1.125rem',
    xl: '1.5rem',
  }, // in rem
  spacing: {
    sm: '0.1875rem',
    md: '1rem',
    lg: '1.75rem',
    xl: '2rem',
  },
  boxShadow: {
    none: 'none',
    xs: '0px 3px 6px rgba(0, 0, 0, 0.25)',
  },
  borderRadius: {
    none: '0',
    sm: '3px',
  },
  borderWidth: {
    none: '0',
    thin: '1px',
  },
  opacity: {
    0: '0',
    25: '0.25',
    50: '0.5',
    75: '0.75',
    100: '1',
  },
} as const;

const theme = {
  ...choices,
  colors: {
    primary: choices.color.brand.malibu,
    secondary: choices.color.brand.steelGray,
    text: choices.color.brand.steelGray,
    background: choices.color.base.white,
    accent: choices.color.brand.brinkPink,
    highlight: choices.color.brand.supernova,
    muted: choices.color.base.white,
    white: choices.color.base.white,
    black: choices.color.base.black,
    transparent: choices.color.base.transparent,
  },
} as const;

export type Theme = typeof theme;

export type ThemeProps = { theme?: Theme };

export type ColorType = keyof Theme['colors'];
export type FontFamilyType = keyof Theme['fontFamily'];
export type FontLineHeightType = keyof Theme['fontLineHeight'];
export type FontWeightType = keyof Theme['fontWeight'];
export type FontSizeType = keyof Theme['fontSize'];
export type SpacingType = keyof Theme['spacing'];
export type BoxShadowType = keyof Theme['boxShadow'];
export type BorderRadiusType = keyof Theme['borderRadius'];
export type BorderWidthType = keyof Theme['borderWidth'];
export type OpacityType = keyof Theme['opacity'];

export default theme;
