import React from 'react'

import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'

import { ITurnOrderSetup } from 'aer-types/types'

import Card from 'components/atoms/Card'

import ConfigurationCardDisplay from './ConfigurationCardDisplay'

const renderCardNames = (turnOrderSetup: ITurnOrderSetup) =>
  turnOrderSetup.turnOrderCards.map((card, i) => (
    <ConfigurationCardDisplay component="p" key={i} type={card.type}>
      {card.name}
    </ConfigurationCardDisplay>
  ))

type Props = {
  turnOrderSetup: ITurnOrderSetup
}

const CardNameDisplay = ({ turnOrderSetup }: Props) => (
  <Card>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Turn order cards
      </Typography>
      {renderCardNames(turnOrderSetup)}
    </CardContent>
  </Card>
)

export default React.memo(CardNameDisplay)
