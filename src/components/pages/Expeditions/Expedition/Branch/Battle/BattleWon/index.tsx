import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from 'Redux/Store'
import * as types from 'aer-types/types'

import RewardScreen from '../../RewardScreen'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {}
}

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleWon = ({ battle, finishBattle, hide, showNext }: Props) => {
  useEffect(() => {
    if (battle.config.winRewards === 'skip') {
      hide()
    }
  }, [battle.config.winRewards, hide])

  return (
    <React.Fragment>
      <RewardScreen
        callback={finishBattle}
        branch={battle}
        hide={hide}
        showNext={showNext}
      />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleWon))
