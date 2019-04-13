import React from 'react'

import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import { ITurnOrderSetup } from '../../../types'

import Card from './Card'

const renderCardNames = (turnOrderSetup: ITurnOrderSetup) =>
  turnOrderSetup.turnOrderCards.map((card, i) => (
    <Typography component="p" key={i}>
      {card.name}
    </Typography>
  ))

type Props = {
  turnOrderSetup: ITurnOrderSetup
}

const CardNameDisplay = React.memo(({ turnOrderSetup }: Props) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Turn order cards
      </Typography>
      {renderCardNames(turnOrderSetup)}
    </CardContent>
  </Card>
))

CardNameDisplay.displayName = 'CardNameDisplay'

export default CardNameDisplay
