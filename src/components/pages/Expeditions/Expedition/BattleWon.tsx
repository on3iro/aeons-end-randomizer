import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import TreasureList from '../../../molecules/TreasureList'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const treasures =
    ownProps.battle.rewards !== undefined
      ? selectors.Settings.Expansions.Treasures.getTreasureListFromIdList(
          state,
          { treasureIds: ownProps.battle.rewards.treasure }
        )
      : []

  return {
    treasures,
  }
}

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleWon = React.memo(
  ({ battle, hide, finishBattle, showNext, treasures }: Props) => {
    const handleFinish = useCallback(() => {
      finishBattle(battle)
      hide()

      if (showNext) {
        showNext()
      }
    }, [battle, hide, finishBattle, showNext])

    return (
      <div>
        <p>TODO show new market cards and banish selection</p>
        <TreasureList treasures={treasures} />
        <button onClick={handleFinish}>Unlock next battle</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleWon)
