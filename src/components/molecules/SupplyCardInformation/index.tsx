import React from 'react'

import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import InfoItem from '../InfoItem'

import SectionHeadline from '../../atoms/SectionHeadline'
import Keywords from '../../atoms/Keywords'
import Keyword from '../../atoms/Keyword'
import Effect from '../../atoms/Effect'

type Props = {
  card: {
    selected: boolean
    type: types.CardType
    name: string
    expansion: string
    cost: number
    developCost?: number
    keywords: string[]
    effect: string
  }
  expansion: types.Expansion
  theme: any
}

const Body = ({ card, expansion, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Expansion" info={expansion.name} />
    <InfoItem label="Wave" info={expansion.wave || '-'} />
    <InfoItem label="Type" info={card.type} />
    <InfoItem label="Cost" info={card.cost.toString()} />
    {card.developCost ? (
      <InfoItem label="Develop Cost" info={card.developCost.toString()} />
    ) : null}

    <SectionHeadline
      themeColor={theme.colors.cards[card.type.toLowerCase()].color}
    >
      Effect
    </SectionHeadline>

    <Effect effect={card.effect || ''} />
    {card.keywords ? (
      <Keywords>
        {card.keywords.map((keyword) => (
          <Keyword key={keyword}>{keyword}</Keyword>
        ))}
      </Keywords>
    ) : null}
  </React.Fragment>
)

export default withTheme(React.memo(Body))
