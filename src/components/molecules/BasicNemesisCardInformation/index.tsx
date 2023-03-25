import React from 'react'

import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import InfoItem from 'components/molecules/InfoItem'

import SectionHeadline from 'components/atoms/SectionHeadline'
import AbilityText from 'components/atoms/AbilityText'

type Props = {
  card: types.BasicNemesisCard | types.UpgradedBasicNemesisCard
  expansion: types.Expansion
  theme: any
}

const Body = ({ card, expansion, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Expansion" info={expansion.name} />
    <InfoItem label="Wave" info={expansion.wave || '-'} />
    <InfoItem label="Tier" info={card.tier.toString()} />
    {card.type && <InfoItem label="Type" info={card.type} />}
    {card.type === 'Minion' && (
      <InfoItem label="Hp" info={card.hp.toString()} />
    )}

    <SectionHeadline themeColor={theme.colors.turnOrderCards['nemesis'].normal}>
      Effect
    </SectionHeadline>

    <AbilityText
      dangerouslySetInnerHTML={{
        __html: card.effect || '',
      }}
    />
  </React.Fragment>
)

export default withTheme(React.memo(Body))
