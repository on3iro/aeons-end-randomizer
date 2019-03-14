import React from 'react'

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'

import {
  ITurnOrderSetup
} from '../../../types'


const renderCardNames = (turnOrderSetup: ITurnOrderSetup) => turnOrderSetup
  .turnOrderCards
  .map(
    (card, i) => (
      <Typography component='p' key={i}>
        {card.name}
      </Typography>
    )
  )

const CardNameDisplay = React.memo(({ classes, turnOrderSetup }: {
  classes: any,
  turnOrderSetup: ITurnOrderSetup
}) => (
  <Card className={classes.cardDeck}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>Turn order cards</Typography>
      { renderCardNames(turnOrderSetup) }
    </CardContent>
  </Card>
))

export default CardNameDisplay
