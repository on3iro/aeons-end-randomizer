import React from 'react'

import { withTheme } from 'styled-components/macro'

import { ICard } from '../../../../../types'

import Tile from '../../../../Tile'

import Body from './Body'

type Props = {
  card: ICard
  theme: any
}

const UniqueStarter = React.memo(({ card, theme }: Props) => (
  <Tile
    body={<Body card={card} />}
    bgColor={theme.colors.cards[card.type.toLowerCase()].background}
    fontColor={theme.colors.text.primary}
    icon={theme.icons[card.type.toLowerCase()]}
    iconColor={theme.colors.cards[card.type.toLowerCase()].color}
    showDetails={() => null}
    hideShowDetailsButton={true}
  />
))

export default withTheme(UniqueStarter)
