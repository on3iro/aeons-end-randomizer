import React from 'react'

import config from '../../../../config'
import { Slot, ICard, isCard } from '../../../../types'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  card: Slot | ICard
}

const ExpansionInfo = React.memo(({ card }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Set:</InfoLabel>
    <Info component="span">
      {isCard(card) && config.DATA[card.expansion] !== undefined
        ? config.DATA[card.expansion].name
        : '-'}
    </Info>
  </CardInfoItem>
))

ExpansionInfo.displayName = 'ExpansionInfo'

export default ExpansionInfo
