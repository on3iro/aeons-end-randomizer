import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const Title = styled('h6')`
  ${setTypography('h6', { color: 'inherit' })}

  margin: 0;
`

export default Title
