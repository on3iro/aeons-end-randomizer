import styled from 'styled-components/macro'

type Props = {
  theme: any
}

const InfoLabel = styled('p')<Props>`
  color: ${props => props.theme.colors.text.secondary};
  margin: 0 8px 0 0;
  display: inline-block;
`

export default InfoLabel
