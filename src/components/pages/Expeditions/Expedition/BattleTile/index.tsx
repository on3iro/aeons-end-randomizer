import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Battle } from '../../../../../types'

import P from 'components/atoms/_styled_/P'
import Tile from '../../../../molecules/Tile'

import Body from './Body'
import Locked from './Locked'
import Unlocked from './Unlocked'

import LockIcon from '@material-ui/icons/Lock'

type Props = {
  battle: Battle
  nemesis: string
  theme?: any
}

const RenderBody = ({ battle, nemesis }: Props) => {
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
      return <Body battle={battle} nemesis={nemesis} />
  }
}

const ExpeditionTile = ({ battle, nemesis, theme }: Props) => (
  <Tile
    body={<RenderBody battle={battle} nemesis={nemesis} />}
    bgColor={
      battle.status === 'finished'
        ? theme.colors.turnOrderCards.nemesis.light
        : theme.colors.turnOrderCards.nemesis.normal
    }
    fontColor={theme.colors.text.primary}
  />
)

export default withTheme(ExpeditionTile)
