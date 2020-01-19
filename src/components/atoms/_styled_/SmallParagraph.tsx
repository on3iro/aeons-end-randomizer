import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const SmallParagraph = styled('p')<Props>`
  font-weight: ${props => props.theme.typography['smallParagraph'].fontWeight};
  font-size: ${props => props.theme.typography['smallParagraph'].fontSize};
  line-height: ${props => props.theme.typography['smallParagraph'].lineHeight};
  letter-spacing: ${props =>
    props.theme.typography['smallParagraph'].letterSpacing};
  margin: 8px 0;
`

SmallParagraph.displayName = 'SmallParagraph'

export default SmallParagraph
