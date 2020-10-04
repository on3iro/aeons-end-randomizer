import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Treasure } from 'aer-types/types'

import Tile from '../../Tile'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  treasure: Treasure
  theme: any
}

const TreasureTile = ({ treasure, theme }: Props) => (
  <Wrapper item xs={12} sm={6} md={3}>
    <Tile
      body={<Body treasure={treasure} />}
      bgColor={theme.colors.cards[`treasure${treasure.level}`].light}
      fontColor={theme.colors.white}
      icon={theme.icons['treasure']}
      iconColor={theme.colors.cards[`treasure${treasure.level}`].normal}
    />
  </Wrapper>
)

export default withTheme(React.memo(TreasureTile))
