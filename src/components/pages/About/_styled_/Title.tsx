import styled from 'styled-components/macro'

import H1 from 'components/atoms/_styled_/H1'

type Props = {
  theme: any
}

const Title = styled(H1)<Props>`
  color: ${props => props.theme.colors.primary.main};
`

Title.displayName = 'About Title'

export default Title
