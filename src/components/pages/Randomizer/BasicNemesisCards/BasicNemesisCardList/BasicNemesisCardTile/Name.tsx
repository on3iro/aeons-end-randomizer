import styled from 'styled-components/macro'

import Typography from 'theme/Typography'
import { setTypography } from 'theme/helpers'

const Name = styled('p')`
  ${setTypography('body2', { fontWeight: Typography.fontWeightBold })}

  margin: 0;
`

export default Name
