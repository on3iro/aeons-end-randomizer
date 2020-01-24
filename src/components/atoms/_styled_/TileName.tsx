import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const TileName = styled('h2')<Props>`
  font-weight: ${props => props.theme.typography['h6'].fontWeight};
  font-size: ${props => props.theme.typography['h6'].fontSize};
  line-height: ${props => props.theme.typography['h6'].lineHeight};
  letter-spacing: ${props => props.theme.typography['h6'].letterSpacing};
  margin: 0;
  color: inherit;
`

export default TileName
