import Typography from 'theme/Typography'

type TypoType =
  | 'body1'
  | 'body2'
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

type TypoOptions = {
  color?: string
  fontWeight?: number
  lineHeight?: string | number
}

export const setTypography = (type: TypoType, options?: TypoOptions) => {
  return `
    color: ${options?.color ? options.color : Typography[type].color};
    font-family: ${Typography[type].fontFamily};
    font-weight: ${
      options?.fontWeight ? options.fontWeight : Typography[type].fontWeight
    };
    font-size: ${Typography[type].fontSize};
    letter-spacing: ${Typography[type].letterSpacing};
    line-height: ${
      options?.lineHeight ? options.lineHeight : Typography[type].lineHeight
    };
  `
}
