import React from 'react'
import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import P from 'components/atoms/P'
import Tile from 'components/molecules/Tile'

import Locked from '../../Locked'
import Unlocked from './Unlocked'
import Body from './Body'

import LockIcon from '@material-ui/icons/Lock'

type Props = {
  battle: types.Battle
  nemesis: string
  friend: string | undefined
  foe: string | undefined
  theme?: any
}

const RenderBody = ({ battle, nemesis, friend, foe }: Props) => {
  switch (battle.status) {
    case 'locked':
      return (
        <Locked>
          <LockIcon />
        </Locked>
      )
    case 'unlocked':
      return (
        <Unlocked>
          <P>?</P>
        </Unlocked>
      )
    default:
      return <Body battle={battle} nemesis={nemesis} friend={friend} foe={foe} />
  }
}

const ExpeditionTile = ({ battle, nemesis, friend, foe, theme }: Props) => (
  <Tile
    body={<RenderBody battle={battle} nemesis={nemesis} friend={friend} foe={foe} />}
    bgColor={
      battle.status === 'finished'
        ? theme.colors.turnOrderCards.nemesis.light
        : theme.colors.turnOrderCards.nemesis.normal
    }
    fontColor={theme.colors.text.primary}
  />
)

export default withTheme(React.memo(ExpeditionTile))
