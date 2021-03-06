import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, actions } from 'Redux/Store'

import LossRewardTypeSelection from './LossRewardTypeSelection'
import RewardScreen from '../../RewardScreen'
import { InputBranch } from 'Redux/Store/Expeditions/Expeditions/actions'

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
  const acceptLossCallback = useCallback(
    (branch: InputBranch, banished: string[], newSupplyIds: string[]) => {
      if (battle.config.onLoss === 'skip') {
        hide()
      }

      return acceptLoss(branch, banished, newSupplyIds)
    },
    [acceptLoss, hide, battle.config.onLoss]
  )

  const showNextCallback = useCallback(() => {
    if (battle.config.onLoss === 'skip') {
      return
    } else if (showNext) {
      showNext()
    }
  }, [battle.config.onLoss, showNext])

  useEffect(() => {
    if (battle.config.lossRewards === 'skip' && showNext) {
      hide()
      showNext()
    }
  }, [battle.config.lossRewards, showNext, hide])

  return (
    <React.Fragment>
      {!battle.rewards ? (
        <LossRewardTypeSelection battle={battle} />
      ) : (
        <RewardScreen
          callback={acceptLossCallback}
          branch={battle}
          hide={hide}
          showNext={showNextCallback}
        />
      )}
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleLost))
