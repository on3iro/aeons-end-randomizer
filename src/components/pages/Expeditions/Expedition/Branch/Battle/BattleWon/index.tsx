import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import RewardScreen from '../../RewardScreen'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: ownProps.battle.expeditionId }
  )

  return {
    barracks: expedition.barracks,
  }
}

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleWon = ({
  battle,
  finishBattle,
  hide,
  showNext,
  barracks,
}: Props) => {
  useEffect(() => {
    if (battle.config.winRewards === 'skip') {
      hide()
      // Supply ids will be set as they are, so we need to pass the current ids from
      // our barracks, so that our barracks are not accidentally overwritten
      finishBattle(battle, [], barracks.supplyIds)
    }
  }, [hide, finishBattle, battle, barracks.supplyIds])

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
