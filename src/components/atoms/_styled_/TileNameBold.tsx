import styled from 'styled-components/macro'

const TileNameBold = styled('h2')`
  font-weight: ${props => props.theme.typography.fontWeightBold};
  font-size: ${props => props.theme.typography['text'].fontSize};
  line-height: ${props => props.theme.typography['text'].lineHeight};
  letter-spacing: ${props => props.theme.typography['text'].letterSpacing};
  margin: 0;
`

export default TileNameBold
