import { Typography } from '../global/Typography'

const BASE_FONT_SIZE = Typography.htmlFontSize

export const pxToRem = (pixelValue: number) =>
  `${pixelValue / BASE_FONT_SIZE}rem`
