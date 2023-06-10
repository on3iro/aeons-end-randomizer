import React from 'react'

import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import InfoItem from '../InfoItem'

import SectionHeadline from '../../atoms/SectionHeadline'
import Keywords from '../../atoms/Keywords'
import Keyword from '../../atoms/Keyword'
import AbilityText from '../../atoms/AbilityText'

type Props = {
  card: {
    selected: boolean
    type: types.CardType
    name: string
    expansion: string
    cost: number
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

    <SectionHeadline
      themeColor={theme.colors.cards[card.type.toLowerCase()].color}
    >
      Effect
    </SectionHeadline>

    <AbilityText
      dangerouslySetInnerHTML={{
        __html: card.effect || '',
      }}
    />
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
