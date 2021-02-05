import React from 'react'

import CardContent from '@material-ui/core/CardContent'

import { ITurnOrderSetup } from 'aer-types/types'

import Card from 'components/atoms/Card'

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

const CardNameDisplay = ({ turnOrderSetup }: Props) => (
  <Card>
    <CardContent>
      <CardNameDisplayHeadline>Turn order cards</CardNameDisplayHeadline>
      {renderCardNames(turnOrderSetup)}
    </CardContent>
  </Card>
)

export default React.memo(CardNameDisplay)
