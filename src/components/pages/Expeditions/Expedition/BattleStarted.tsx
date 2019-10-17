import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNextOnWin?: () => void
  showNextOnLoss?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const treasureIdsByTier =
    ownProps.battle.treasure.hasTreasure && ownProps.battle.treasure.level
      ? selectors.getNewTreasureIdsByLevel(state, {
          treasureLevel: ownProps.battle.treasure.level,
          expeditionId: ownProps.battle.expeditionId,
        })
      : []
  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId: ownProps.battle.expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId: ownProps.battle.expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId: ownProps.battle.expeditionId,
  })

  return {
    treasureIdsByTier,
    gemIds,
    relicIds,
    spellIds,
  }
}

const mapDispatchToProps = {
  winBattle: actions.Expeditions.Expeditions.winBattle,
  loseBattle: actions.Expeditions.Expeditions.loseBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleStarted = React.memo(
  ({
    winBattle,
    loseBattle,
    battle,
    hide,
    showNextOnWin,
    showNextOnLoss,
    gemIds,
    relicIds,
    spellIds,
    treasureIdsByTier,
  }: Props) => {
    const handleWin = useCallback(() => {
      hide()
      winBattle({
        battle,
        treasureIds: treasureIdsByTier,
        gemIds,
        relicIds,
        spellIds,
      })

      if (showNextOnWin) {
        showNextOnWin()
      }
    }, [
      winBattle,
      hide,
      battle,
      showNextOnWin,
      treasureIdsByTier,
      gemIds,
      relicIds,
      spellIds,
    ])

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
