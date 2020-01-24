import styled from 'styled-components'

import H1 from 'components/atoms/_styled_/H1'

type Props = {
  themeColor: string
}

const Title = styled(H1)<Props>`
  color: ${props => props.themeColor};
`

export default Title
