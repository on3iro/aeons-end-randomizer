import styled from 'styled-components'
import H3 from './_styled_/H3'

type Props = {
  themeColor?: string
  theme: any
}

const SectionHeadline = styled(H3)<Props>`
  ${props => props.themeColor && `color: ${props.themeColor}`};
  font-weight: ${props => props.theme.typography.fontWeightLight};
  margin: 16px 0 8px;

  + div {
    margin-top: 0;
  }
`

export default SectionHeadline
