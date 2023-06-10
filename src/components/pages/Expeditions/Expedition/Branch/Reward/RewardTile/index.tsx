import React from 'react'
import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import Tile from 'components/molecules/Tile'

import Locked from '../../Locked'
import Unlocked from './Unlocked'

import LockIcon from '@material-ui/icons/Lock'
import UnlockedIcon from './UnlockedIcon'

type Props = {
  reward: types.Reward
  theme?: any
}

const RenderBody = ({ reward }: Props) => {
  switch (reward.status) {
    case 'locked':
      return (
        <Locked>
          <LockIcon />
        </Locked>
      )

    case 'unlocked':
    case 'finished':
    default: {
      return (
        <Unlocked status={reward.status}>
          <UnlockedIcon className="ra ra-lg ra-diamond" />
        </Unlocked>
      )
    }
  }
}

const RewardTile = ({ reward, theme }: Props) => {
  return (
    <Tile
      body={<RenderBody reward={reward} />}
      bgColor={
        reward.status === 'finished'
          ? theme.colors.cards.treasure3.light
          : theme.colors.cards.treasure3.normal
      }
      fontColor={theme.colors.text.primary}
    />
  )
}

export default withTheme(React.memo(RewardTile))
