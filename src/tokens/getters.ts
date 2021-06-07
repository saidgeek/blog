import defaultTheme, {
  ColorType,
  FontFamilyType,
  FontLineHeightType,
  FontWeightType,
  FontSizeType,
  SpacingType,
  BoxShadowType,
  BorderRadiusType,
  BorderWidthType,
  OpacityType,
  Theme,
  ThemeProps,
} from './theme';

const getTheme = (props: ThemeProps): Theme =>
  props.theme ? props.theme : defaultTheme;

export const getColor = (type: ColorType, props: ThemeProps): string =>
  getTheme(props).colors[type];

export const getFontFamily = (
  type: FontFamilyType,
  props: ThemeProps
): string => getTheme(props).fontFamily[type].join(',');

export const getFontLineHeight = (
  type: FontLineHeightType,
  props: ThemeProps
): string => getTheme(props).fontLineHeight[type];

export const getFontWeight = (
  type: FontWeightType,
  props: ThemeProps
): number => getTheme(props).fontWeight[type];
export const getFontSize = (type: FontSizeType, props: ThemeProps): string =>
  getTheme(props).fontSize[type];

export const getSpacing = (type: SpacingType, props: ThemeProps): string =>
  getTheme(props).spacing[type];

export const getBoxShadow = (type: BoxShadowType, props: ThemeProps): string =>
  getTheme(props).boxShadow[type];

export const getBorderRadius = (
  type: BorderRadiusType,
  props: ThemeProps
): string => getTheme(props).borderRadius[type];

export const getBorderWidth = (
  type: BorderWidthType,
  props: ThemeProps
): string => getTheme(props).borderWidth[type];

export const getOpacity = (type: OpacityType, props: ThemeProps): string =>
  getTheme(props).opacity[type];
