import React from 'react'
import * as types from 'types'

import LossRewardTypeSelection from './LossRewardTypeSelection'
import RewardScreen from './RewardScreen'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

type Props = OwnProps

const BattleLost = ({ battle, hide, showNext }: Props) => {
  return (
    <React.Fragment>
      {!battle.rewards ? (
        <LossRewardTypeSelection battle={battle} />
      ) : (
        <RewardScreen battle={battle} hide={hide} showNext={showNext} />
      )}
    </React.Fragment>
  )
}

export default React.memo(BattleLost)
