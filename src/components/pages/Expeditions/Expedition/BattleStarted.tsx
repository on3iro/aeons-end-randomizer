import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from '../../../../Redux/Store'
import * as types from '../../../../types'

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  winBattle: actions.Expeditions.Expeditions.winBattle,
  loseBattle: actions.Expeditions.Expeditions.loseBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    battle: types.Battle
    hide: () => void
    showNextOnWin?: () => void
    showNextOnLoss?: () => void
  }

const BattleStarted = React.memo(
  ({
    winBattle,
    loseBattle,
    battle,
    hide,
    showNextOnWin,
    showNextOnLoss,
  }: Props) => {
    const handleWin = useCallback(() => {
      hide()
      winBattle(battle)

      if (showNextOnWin) {
        showNextOnWin()
      }
    }, [winBattle, hide, battle, showNextOnWin])

    const handleLoss = useCallback(() => {
      hide()
      loseBattle(battle)

      if (showNextOnLoss) {
        showNextOnLoss()
      }
    }, [loseBattle, hide, battle, showNextOnLoss])

    return (
      <div>
        <button onClick={handleWin}>Battle won</button>
        <button onClick={handleLoss}>Battle lost</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleStarted)
