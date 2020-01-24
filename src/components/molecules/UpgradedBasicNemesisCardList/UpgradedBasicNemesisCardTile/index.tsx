import React from 'react'
import { withTheme } from 'styled-components/macro'

import { UpgradedBasicNemesisCard } from '../../../../types'

import Tile from '../../Tile'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  nemesisCard: UpgradedBasicNemesisCard
  theme: any
}

const UpgradedBasicNemesisCardTile = ({ nemesisCard, theme }: Props) => (
  <Wrapper item xs={12} sm={6} md={3}>
    <Tile
      body={<Body nemesisCard={nemesisCard} />}
      bgColor={theme.colors.turnOrderCards.nemesis.light}
      fontColor={theme.colors.text.primary}
      icon={theme.icons['nemesis']}
      iconColor={theme.colors.turnOrderCards.nemesis.normal}
    />
  </Wrapper>
)

export default withTheme(UpgradedBasicNemesisCardTile)
