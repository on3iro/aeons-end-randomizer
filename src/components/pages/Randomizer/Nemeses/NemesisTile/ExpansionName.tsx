import styled from 'styled-components/macro'

import { setTypography } from 'theme/helpers'

const ExpansionName = styled('p')`
  ${setTypography('body2', { color: '#fff' })}

  margin: 0;
`

export default ExpansionName
