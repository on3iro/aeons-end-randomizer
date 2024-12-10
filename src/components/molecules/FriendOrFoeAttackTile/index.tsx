import React from 'react'
import { withTheme } from 'styled-components/macro'

import { FriendOrFoeAttack } from 'aer-types/types'

import Tile from 'components/molecules/Tile'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  card: FriendOrFoeAttack
  type: 'friend' | 'foe'
  theme: any
}

const FriendOrFoeAttackTile = ({ card, type, theme }: Props) => {

  return (
    <Wrapper item xs={12} sm={6} md={3}>
      <Tile
        body={<Body card={card} />}
        bgColor={theme.colors.cards[type].background}
        fontColor={theme.colors.text.primary}
        icon={theme.icons[type]}
        iconColor={theme.colors.cards[type].color}
      />
    </Wrapper>
  )
}

export default withTheme(React.memo(FriendOrFoeAttackTile))
