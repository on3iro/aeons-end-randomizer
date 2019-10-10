import React from 'react'
import AbilityText from '../../../../AbilityText'

import Card from './Card'
import CardContent from './CardContent'
import CardTypeIcon from './CardTypeIcon'
import CardName from './CardName'
import CostInfo from './CostInfo'
import TypeInfo from './TypeInfo'

import { ICard } from '../../../../../types'

type Props = {
  card: ICard
}

const UniqueStarter = React.memo(({ card }: Props) => (
  <Card type={card.type.toLowerCase()}>
    <CardContent>
      <CardName>{card.name}</CardName>
      <TypeInfo type={card.type} />
      <CostInfo cost={card.cost} />
      <AbilityText
        dangerouslySetInnerHTML={{
          __html: card.effect || '',
        }}
      />
      {card.keywords ? card.keywords.map((keyword: string) => keyword) : null}
      <CardTypeIcon type={card.type.toLowerCase()} />
    </CardContent>
  </Card>
))

export default UniqueStarter
