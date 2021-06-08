import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  getColor,
  getFontFamily,
  getFontLineHeight,
  getFontWeight,
  getFontSize,
  getSpacing,
  getBoxShadow,
  getBorderRadius,
  getBorderWidth,
  getOpacity,
} from './getters';
import { createPartialGetter } from './utils';

const useTheme = () => {
  const theme = useContext(ThemeContext);
  const themeProps = { theme };

  return {
    color: createPartialGetter(getColor, themeProps),
    fontFamily: createPartialGetter(getFontFamily, themeProps),
    fontLineHeight: createPartialGetter(getFontLineHeight, themeProps),
    fontWeight: createPartialGetter(getFontWeight, themeProps),
    fontSize: createPartialGetter(getFontSize, themeProps),
    spacing: createPartialGetter(getSpacing, themeProps),
    boxShadow: createPartialGetter(getBoxShadow, themeProps),
    borderRadius: createPartialGetter(getBorderRadius, themeProps),
    borderWidth: createPartialGetter(getBorderWidth, themeProps),
    opacity: createPartialGetter(getOpacity, themeProps),
  };
};

export default useTheme;
