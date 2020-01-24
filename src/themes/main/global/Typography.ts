const generalTypo = {
  htmlFontSize: 16,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
}

export const Typography = {
  ...generalTypo,
  h1: {
    fontWeight: generalTypo.fontWeightLight,
    fontSize: '2rem',
    lineHeight: 1.167,
    letterSpacing: '-0.01562em',
  },
  h2: {
    fontWeight: generalTypo.fontWeightLight,
    fontSize: '1.6rem',
    lineHeight: 1.2,
    letterSpacing: '-0.00833em',
  },
  h3: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '3rem',
    lineHeight: 1.167,
    letterSpacing: '0em',
  },
  h4: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '2.125rem',
    lineHeight: 1.235,
    letterSpacing: '0.00735em',
  },
  h5: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '1.5rem',
    lineHeight: 1.334,
    letterSpacing: '0em',
  },
  h6: {
    fontWeight: generalTypo.fontWeightMedium,
    fontSize: '1.25rem',
    lineHeight: 1.6,
    letterSpacing: '0.0075em',
  },
  p: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '1rem',
    lineHeight: 1.5,
    letterSpacing: '0.00938em',
  },
  smallParagraph: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '0.875rem',
    lineHeight: 1.43,
    letterSpacing: '0.01071em',
  },
  button: {
    fontWeight: generalTypo.fontWeightMedium,
    fontSize: '0.875rem',
    lineHeight: 1.75,
    letterSpacing: '0.02857em',
    textTransform: 'uppercase',
  },
  caption: {
    fontWeight: generalTypo.fontWeightRegular,
    fontSize: '0.75rem',
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
}
