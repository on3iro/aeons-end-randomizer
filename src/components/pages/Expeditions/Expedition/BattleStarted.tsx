import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import Button from '@material-ui/core/Button'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import ModalBodyWrapper from '../../../atoms/ModalBodyWrapper'
import ModalFooterWrapper from '../../../atoms/ModalFooterWrapper'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNextOnWin?: (expeditionIsFinished: boolean) => void
  showNextOnLoss?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const { expeditionId } = ownProps.battle
  const treasureIdsByTier =
    ownProps.battle.treasure.hasTreasure && ownProps.battle.treasure.level
      ? selectors.getNewTreasureIdsByLevel(state, {
          treasureLevel: ownProps.battle.treasure.level,
          expeditionId,
        })
      : []
  const gemIds = selectors.getStillAvailableGemIds(state, {
    expeditionId,
  })
  const relicIds = selectors.getStillAvailableRelicIds(state, {
    expeditionId,
  })
  const spellIds = selectors.getStillAvailableSpellIds(state, {
    expeditionId,
  })

  const expeditionHasNextBattle = selectors.Expeditions.Expeditions.getHasNextBattle(
    state,
    { expeditionId, battleId: ownProps.battle.id }
  )

  return {
    expeditionHasNextBattle,
    gemIds,
    relicIds,
    spellIds,
    treasureIdsByTier,
  }
}

const mapDispatchToProps = {
  winBattle: actions.Expeditions.Expeditions.winBattle,
  loseBattle: actions.Expeditions.Expeditions.loseBattle,
  finishExpedition: actions.Expeditions.Expeditions.finishExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleStarted = React.memo(
  ({
    battle,
    expeditionHasNextBattle,
    gemIds,
    hide,
    loseBattle,
    relicIds,
    showNextOnLoss,
    showNextOnWin,
    spellIds,
    treasureIdsByTier,
    winBattle,
    finishExpedition,
  }: Props) => {
    const handleWin = useCallback(() => {
      hide()
      if (expeditionHasNextBattle) {
        winBattle({
          battle,
          treasureIds: treasureIdsByTier,
          gemIds,
          relicIds,
          spellIds,
        })
      } else {
        finishExpedition(battle)
      }

      if (showNextOnWin) {
        showNextOnWin(!expeditionHasNextBattle)
      }
    }, [
      battle,
      expeditionHasNextBattle,
      finishExpedition,
      gemIds,
      hide,
      relicIds,
      showNextOnWin,
      spellIds,
      treasureIdsByTier,
      winBattle,
    ])

    const handleLoss = useCallback(() => {
      hide()
      loseBattle(battle)

      if (showNextOnLoss) {
        showNextOnLoss()
      }
    }, [loseBattle, hide, battle, showNextOnLoss])

    return (
      <React.Fragment>
        <ModalBodyWrapper hasFooter={true} />
        <ModalFooterWrapper>
          <Button
            size="small"
            variant="contained"
            color="secondary"
            onClick={handleLoss}
          >
            Battle lost
          </Button>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleWin}
          >
            Battle won
          </Button>
        </ModalFooterWrapper>
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleStarted)
