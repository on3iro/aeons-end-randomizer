import React from 'react'

import CardContent from '@material-ui/core/CardContent'

import { ITurnOrderSetup } from '../../../types'

import Card from '../../atoms/Card'

import CardNameDisplayHeadline from './CardNameDisplayHeadline'
import ConfigurationCardDisplay from './ConfigurationCardDisplay'

const renderCardNames = (turnOrderSetup: ITurnOrderSetup) =>
  turnOrderSetup.turnOrderCards.map((card, i) => (
    <ConfigurationCardDisplay key={i} type={card.type}>
      {card.name}
    </ConfigurationCardDisplay>
  ))

type Props = {
  turnOrderSetup: ITurnOrderSetup
}

const CardNameDisplay = React.memo(({ turnOrderSetup }: Props) => (
  <Card>
    <CardContent>
      <CardNameDisplayHeadline>Turn order cards</CardNameDisplayHeadline>
      {renderCardNames(turnOrderSetup)}
    </CardContent>
  </Card>
))

CardNameDisplay.displayName = 'CardNameDisplay'

export default CardNameDisplay
