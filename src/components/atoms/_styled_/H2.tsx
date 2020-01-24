import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const H2 = styled('h2')<Props>`
  font-weight: ${props => props.theme.typography['h2'].fontWeight};
  font-size: ${props => props.theme.typography['h2'].fontSize};
  line-height: ${props => props.theme.typography['h2'].lineHeight};
  letter-spacing: ${props => props.theme.typography['h2'].letterSpacing};
  margin: 0;
`

export default H2
