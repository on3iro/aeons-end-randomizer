import styled from 'styled-components/macro'

import H2 from 'components/atoms/_styled_/H2'

type Props = {
  theme: any
}

const SectionHeadline = styled(H2)<Props>`
  color: ${props => props.theme.colors.primary.main};
`

SectionHeadline.displayName = 'About Section Headline'

export default SectionHeadline
