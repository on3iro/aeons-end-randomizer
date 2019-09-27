import React from 'react'
import styled from 'styled-components'
import H1 from '../../../H1'

type Props = {
  playerNumber: number
}

const Title = styled(({ playerNumber, ...rest }) => <H1 {...rest} />)<Props>`
  color: ${props =>
    props.theme.colors.playerColors[`player${props.playerNumber}`].normal};
`

export default Title
