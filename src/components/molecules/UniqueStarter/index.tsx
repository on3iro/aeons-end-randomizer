import React from 'react'

import { withTheme } from 'styled-components/macro'

import { ICard } from '../../../types'

import Tile from '../Tile'

import Body from './Body'
import UniqueStartersWrapper from './UniqueStartersWrapper'

type Props = {
  card: ICard
  theme: any
}

const UniqueStarter = React.memo(({ card, theme }: Props) => (
  <UniqueStartersWrapper item xs={12} sm={6} key={card.id}>
    <Tile
      body={<Body card={card} />}
      bgColor={theme.colors.cards[card.type.toLowerCase()].background}
      fontColor={theme.colors.text.primary}
      icon={theme.icons[card.type.toLowerCase()]}
      iconColor={theme.colors.cards[card.type.toLowerCase()].color}
      showDetails={() => null}
      hideShowDetailsButton={true}
    />
  </UniqueStartersWrapper>
))

export default withTheme(UniqueStarter)
