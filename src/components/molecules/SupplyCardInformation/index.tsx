import React from 'react'

import { withTheme } from 'styled-components/macro'

import * as types from '../../../types'

import InfoItem from '../InfoItem'

import SectionHeadline from '../../atoms/SectionHeadline'
import Keywords from '../../atoms/Keywords'
import Keyword from '../../atoms/Keyword'
import AbilityText from '../../atoms/AbilityText'
import List from 'components/atoms/_styled_/List'

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
  expansionName: string
  theme: any
}

const Body = React.memo(({ card, expansionName, theme }: Props) => (
  <React.Fragment>
    <List>
      <InfoItem label="Expansion" info={expansionName} />
      <InfoItem label="Type" info={card.type} />
      <InfoItem label="Cost" info={card.cost.toString()} />
    </List>

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
        {card.keywords.map(keyword => (
          <Keyword key={keyword}>{keyword}</Keyword>
        ))}
      </Keywords>
    ) : null}
  </React.Fragment>
))

export default withTheme(Body)
