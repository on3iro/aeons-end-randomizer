import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const Text = styled('p')`
  ${setTypography('body2')}

  margin: 0;
`

export default Text
