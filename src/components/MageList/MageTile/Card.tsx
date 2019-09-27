import React from 'react'
import styled from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

type Props = {
  playerNumber: number
}

const Card = styled(({ playerNumber, ...rest }) => <MuiCard {...rest} />)<
  Props
>`
  position: relative;
  height: 100%;

  background: ${props =>
    props.theme.colors.playerColors[`player${props.playerNumber}`].normal};
`

Card.displayName = 'Card'

export default Card
