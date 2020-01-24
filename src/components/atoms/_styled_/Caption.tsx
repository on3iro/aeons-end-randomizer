import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const Caption = styled('p')<Props>`
  font-weight: ${props => props.theme.typography['caption'].fontWeight};
  font-size: ${props => props.theme.typography['caption'].fontSize};
  line-height: ${props => props.theme.typography['caption'].lineHeight};
  letter-spacing: ${props => props.theme.typography['caption'].letterSpacing};
  margin: 0;
`

export default Caption
