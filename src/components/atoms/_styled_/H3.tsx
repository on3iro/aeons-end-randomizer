import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const H3 = styled('h3')<Props>`
  font-weight: ${props => props.theme.typography['h3'].fontWeight};
  font-size: ${props => props.theme.typography['h3'].fontSize};
  line-height: ${props => props.theme.typography['h3'].lineHeight};
  letter-spacing: ${props => props.theme.typography['h3'].letterSpacing};
  margin: 0;
`

export default H3
