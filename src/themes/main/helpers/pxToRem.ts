import { HTML_FONT_SIZE } from 'themes/main/global/Typography'

export const pxToRem = (pixelValue: number) =>
  `${pixelValue / HTML_FONT_SIZE}rem`
