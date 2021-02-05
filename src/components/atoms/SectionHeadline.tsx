import styled from 'styled-components'

import H2 from 'components/H2'

type Props = {
  themeColor?: string
}

const SectionHeadline = styled(H2)<Props>`
  ${(props) => (props.themeColor ? `color: ${props.themeColor};` : null)}
  font-weight: 300;
  margin: 16px 0 8px;

  + div {
    margin-top: 0;
  }
`

export default SectionHeadline
