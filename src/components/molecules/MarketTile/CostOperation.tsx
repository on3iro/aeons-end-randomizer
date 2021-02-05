import styled from 'styled-components/macro'

import Colors from 'theme/Colors'
import { setTypography } from 'theme/helpers'

const CostOperation = styled('p')`
  ${setTypography('body2', { color: Colors.text.secondary })}

  margin: 0;
`

export default CostOperation
