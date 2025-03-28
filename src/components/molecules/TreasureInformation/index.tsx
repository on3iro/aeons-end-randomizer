import React from 'react'

import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import InfoItem from 'components/molecules/InfoItem'

import SectionHeadline from 'components/atoms/SectionHeadline'
import Effect from 'components/atoms/Effect'

type Props = {
  card: types.Treasure
  expansionName: string
  theme: any
}

const Body = ({ card, expansionName, theme }: Props) => (
  <React.Fragment>
    <InfoItem label="Set" info={expansionName} />
    <InfoItem label="Treasure Level" info={card.level.toString()} />
    {card.subtype && <InfoItem label="Subtype" info={card.subtype} />}

    <SectionHeadline themeColor={theme.colors.text.primary}>
      Effect
    </SectionHeadline>

    <Effect effect={card.effect || ''} />
  </React.Fragment>
)

export default withTheme(React.memo(Body))
