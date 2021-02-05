import styled from 'styled-components'

import H1 from 'components/H1'

type Props = {
  themeColor: string
}

const Title = styled(H1)<Props>`
  color: ${(props) => props.themeColor};
  font-weight: ${(props) => props.theme.typography.fontWeightLight};
  line-height: 1;
  letter-spacing: -0.01562em;
`

export default Title
