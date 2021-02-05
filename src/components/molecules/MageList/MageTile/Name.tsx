import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const Name = styled('h2')`
  ${setTypography('h6', { color: '#fff' })}

  margin: 0;
`

export default Name
