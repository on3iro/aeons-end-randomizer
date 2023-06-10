import React from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, actions } from 'Redux/Store'

import RewardScreen from '../../RewardScreen'

type OwnProps = {
  hide: () => void
  reward: types.Reward
}

const mapStateToProps = (_: RootState, ownProps: OwnProps) => {
  return {}
}

const mapDispatchToProps = {
  acceptRewards: actions.Expeditions.Expeditions.acceptRewards,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const RewardUnlocked = ({ reward, hide, acceptRewards }: Props) => {
  return (
    <>
      {!reward.rewards ? (
        <div>Loading...</div>
      ) : (
        <RewardScreen callback={acceptRewards} branch={reward} hide={hide} />
      )}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RewardUnlocked))
