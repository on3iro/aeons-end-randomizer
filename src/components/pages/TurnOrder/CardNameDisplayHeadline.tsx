import styled from 'styled-components/macro'

import LargeParagraph from 'components/atoms/_styled_/LargeParagraph'

const CardNameDisplayHeadline = styled(LargeParagraph)`
  margin: 0 0 12px;
  color: ${props => props.theme.colors.text.secondary};
`

export default CardNameDisplayHeadline
