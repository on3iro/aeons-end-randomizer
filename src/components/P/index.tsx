import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const P = styled('p')`
  ${setTypography('body1')}

  margin: 10px 0;
`

export default P
