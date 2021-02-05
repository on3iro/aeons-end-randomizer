import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const Name = styled('h2')`
  ${setTypography('h6', { color: 'rgba(0, 0, 0, 0.87)' })}

  padding-right: 48px;
  margin: 0;
`

export default Name
