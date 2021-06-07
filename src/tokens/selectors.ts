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
import { createSelector } from './utils';

export const color = createSelector(getColor);
export const fontFamily = createSelector(getFontFamily);
export const fontLineHeight = createSelector(getFontLineHeight);
export const fontWeight = createSelector(getFontWeight);
export const fontSize = createSelector(getFontSize);
export const spacing = createSelector(getSpacing);
export const boxShadow = createSelector(getBoxShadow);
export const borderRadius = createSelector(getBorderRadius);
export const borderWidth = createSelector(getBorderWidth);
export const opacity = createSelector(getOpacity);
