import type {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Space,
  BorderRadius,
  Media,
} from "../type/variablesType";

export const color: Color = {
  font1: "#dddddd",
  font2: "#aaaaaa",
  font3: "#888888",
  bg1: "#363535",
  bg2: "#2a2a2a",
  bg3: "#dddddd",
  border: "#555555",
  main: "#9EEC21",
};

export const fontFamily: FontFamily = {
  base: '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif',
  fontSans:
    '"system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSelf: 'Georgia, Cambria, "Times New Roman", Times, serif',
  fontMono: 'Georgia, Cambria, "Times New Roman", Times, serif',
};

export const fontSize: FontSize = {
  xxs: 10,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xl2: 24,
  xl3: 30,
  xl4: 36,
  xl5: 48,
  xl6: 64,
  xl7: 72,
  xl8: 80,
  xl9: 96,
};

export const fontWeight: FontWeight = {
  thin: 100,
  extraLight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
};

export const lineHeight: LineHeight = {
  none: 1,
  tight: 1.25,
  snug: 1.35,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
};

export const space: Space = {
  xxs: 2,
  xs: 4,
  s: 8,
  m: 16,
  l: 32,
  xl: 64,
  xxl: 128,
};

export const borderRadius: BorderRadius = {
  xs: 2,
  s: 4,
  m: 8,
  l: 16,
  xl: 32,
  full: 9999,
};

export const media: Media = {
  narrowPc: "(max-width: 1024px)",
  tablet: "(max-width: 768px)",
  sp: "(max-width: 480px)",
};

export const Variables = {
  Color: color,
  FontFamily: fontFamily,
  FontSize: fontSize,
  FontWeight: fontWeight,
  LineHeight: lineHeight,
  Space: space,
  BorderRadius: borderRadius,
  Media: media,
};
