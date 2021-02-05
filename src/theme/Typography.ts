import Colors from 'theme/Colors'

const TypographyBase = {
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontSize: '1rem',
  letterSpacing: '0.00938em',
  lineHeight: 1.5,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
}

const Typography = {
  ...TypographyBase,
  body1: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    lineHeight: 1.5,
  },
  body2: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '0.875rem',
    letterSpacing: '0.01071em',
    lineHeight: 1.5,
  },
  button: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightMedium,
    fontSize: '0.875rem',
    letterSpacing: '0.02857em',
    lineHeight: 1.75,
    textTransform: 'uppercase',
  },
  caption: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '0.75rem',
    letterSpacing: '0.03333em',
    lineHeight: 1.66,
  },
  h1: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1.6rem',
    letterSpacing: '0.01071em',
    lineHeight: 1.5,
  },
  h2: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1.4rem',
    letterSpacing: '0.01071em',
    lineHeight: 1.5,
  },
  h3: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1.4rem',
    letterSpacing: '0.01071em',
    lineHeight: 1.04,
  },
  h4: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1.35rem',
    letterSpacing: '0.0075em',
    lineHeight: 1.17,
  },
  h5: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightRegular,
    fontSize: '1.3rem',
    letterSpacing: '0.0075em',
    lineHeight: 1.33,
  },
  h6: {
    color: Colors.text.primary,
    fontFamily: TypographyBase.fontFamily,
    fontWeight: TypographyBase.fontWeightMedium,
    fontSize: '1.25rem',
    letterSpacing: '0.0075em',
    lineHeight: 1.6,
  },
}

export default Typography
