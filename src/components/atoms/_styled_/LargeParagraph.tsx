import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const LargeParagraph = styled('p')<Props>`
  font-weight: ${props => props.theme.typography['largeText'].fontWeight};
  font-size: ${props => props.theme.typography['largeText'].fontSize};
  line-height: ${props => props.theme.typography['largeText'].lineHeight};
  letter-spacing: ${props => props.theme.typography['largeText'].letterSpacing};
  margin: 12px 0;
`

export default LargeParagraph
