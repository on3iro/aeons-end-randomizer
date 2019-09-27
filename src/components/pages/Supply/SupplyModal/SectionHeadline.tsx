import React from 'react'
import styled from 'styled-components'
import H2 from '../../../H2'

type Props = {
  type: number
}

const SectionHeadline = styled(({ type, ...rest }) => <H2 {...rest} />)<Props>`
  color: ${props => props.theme.colors.cards[`${props.type}`].color};
  font-weight: 300;
  margin: 16px 0 8px;
`

export default SectionHeadline
