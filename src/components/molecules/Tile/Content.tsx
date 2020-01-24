import styled from 'styled-components/macro'

import CardContent from 'components/atoms/_styled_/CardContent'

type Props = {
  color: string
}

const Content = styled(CardContent)<Props>`
  color: ${props => props.color};
  position: relative;
  z-index: 1;
`

export default Content
