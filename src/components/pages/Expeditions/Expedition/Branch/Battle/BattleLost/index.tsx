import React from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types'
import { RootState, actions } from 'Redux/Store'

import LossRewardTypeSelection from './LossRewardTypeSelection'
import RewardScreen from '../../RewardScreen'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (_: RootState, ownProps: OwnProps) => {
  return {}
}

const mapDispatchToProps = {
  acceptLoss: actions.Expeditions.Expeditions.acceptLoss,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleLost = ({ battle, hide, showNext, acceptLoss }: Props) => {
  return (
    <React.Fragment>
      {!battle.rewards ? (
        <LossRewardTypeSelection battle={battle} />
      ) : (
        <RewardScreen
          callback={acceptLoss}
          branch={battle}
          hide={hide}
          showNext={showNext}
        />
      )}
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleLost))
