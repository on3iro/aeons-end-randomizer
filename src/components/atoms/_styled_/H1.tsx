import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const H1 = styled('h1')<Props>`
  font-weight: ${props => props.theme.typography['h1'].fontWeight};
  font-size: ${props => props.theme.typography['h1'].fontSize};
  line-height: ${props => props.theme.typography['h1'].lineHeight};
  letter-spacing: ${props => props.theme.typography['h1'].letterSpacing};
  margin: 0;
`

H1.displayName = 'H1'

export default H1
