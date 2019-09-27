import React from 'react'
import styled from 'styled-components'
import H1 from '../../../H1'

type Props = {
  type: string
}

const Title = styled(({ type, ...rest }) => <H1 {...rest} />)<Props>`
  color: ${props => props.theme.colors.cards[`${props.type}`].color};
`

export default Title
