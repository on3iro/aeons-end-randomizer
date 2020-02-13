import { pxToRem } from 'themes/main/helpers/pxToRem'

import Colors from 'themes/main/global/Colors'
import Typography from 'themes/main/global/Typography'

const ExpansionPanel = {
  backgroundColor: Colors.white,
  borderRadius: '4px',
  boxShadow:
    '0px 1px 3px 0px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 2px 1px -1px rgba(0, 0, 0, .12)',
  summary: {
    height: '48px',
    heading: {
      fontSize: Typography.heading.fontSize,
    },
    iconButton: {
      color: Colors.text.secondary,
      fontSize: pxToRem(24),
    },
  },
}

export default ExpansionPanel
