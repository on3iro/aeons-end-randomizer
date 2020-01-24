import React from 'react'

import { ITurnOrderSetup } from 'types'

import Card from 'components/atoms/_styled_/Card'
import CardContent from 'components/atoms/_styled_/CardContent'

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
