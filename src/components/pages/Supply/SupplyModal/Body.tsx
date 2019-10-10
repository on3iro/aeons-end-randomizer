import React from 'react'

import { withTheme } from 'styled-components/macro'

import { ICard } from '../../../../types'

import InfoItem from '../../../InfoItem'
import SectionHeadline from '../../../SectionHeadline'
import Keywords from '../../../Keywords'
import Keyword from '../../../Keyword'
import AbilityText from '../../../AbilityText'

type Props = {
  card: ICard
  expansionName: string
  theme: any
}

const Body = ({ card, expansionName, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Expansion" info={expansionName} />
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
        {card.keywords.map(keyword => (
          <Keyword key={keyword}>{keyword}</Keyword>
        ))}
      </Keywords>
    ) : null}
  </React.Fragment>
)

export default withTheme(Body)
