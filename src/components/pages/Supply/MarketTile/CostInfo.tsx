import React from 'react'

import { Slot, ICard, isCard } from '../../../../types'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  card: Slot | ICard
}

const CostInfo = React.memo(({ card }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Cost:</InfoLabel>
    <Info component="span">{isCard(card) ? card.cost : '-'}</Info>
  </CardInfoItem>
))

CostInfo.displayName = 'CostInfo'

export default CostInfo
