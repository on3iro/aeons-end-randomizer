import React from 'react'
import styled from 'styled-components/macro'
import MuiCard from '@material-ui/core/Card'

type Props = {
  type: string
}

const Card = styled(MuiCard)<Props>`
  background: ${props => props.theme.colors.cards[props.type].background};
  min-width: 30px;
  min-height: 148px;
  position: relative;
  height: 100%;
`

Card.displayName = 'Card'

export default Card
