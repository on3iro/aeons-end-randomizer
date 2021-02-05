import styled from 'styled-components/macro'

import Colors from 'theme/Colors'
import { setTypography } from 'theme/helpers'

const InfoLabel = styled('p')`
  ${setTypography('body2', { color: Colors.text.secondary })}

  margin: 0 8px 0 0;
  display: inline-block;
`

export default InfoLabel
