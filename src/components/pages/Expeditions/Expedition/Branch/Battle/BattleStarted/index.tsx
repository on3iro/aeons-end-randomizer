import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'
import BattleLostButton from 'components/pages/Expeditions/Expedition/Branch/Battle/BattleStarted/BattleLostButton'
import BattleWonButton from 'components/pages/Expeditions/Expedition/Branch/Battle/BattleStarted/BattleWonButton'
import SpecialRules from '../SpecialRules'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNextOnWin?: (expeditionIsFinished: boolean) => void
  showNextOnLoss?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const { expeditionId } = ownProps.battle

  const expeditionHasNextBattle = selectors.Expeditions.Expeditions.getHasNextBranch(
    state,
    { expeditionId, branchId: ownProps.battle.id }
  )

  return {
    expeditionHasNextBattle,
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

const BattleStarted = ({
  battle,
  expeditionHasNextBattle,
  hide,
  loseBattle,
  showNextOnLoss,
  showNextOnWin,
  winBattle,
  finishExpedition,
}: Props) => {
  const handleWin = useCallback(() => {
    hide()
    if (expeditionHasNextBattle) {
      winBattle(battle)
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
    hide,
    showNextOnWin,
    winBattle,
  ])

  const handleLoss = useCallback(() => {
    hide()
    loseBattle(battle)

    if (showNextOnLoss) {
      showNextOnLoss()
    }
  }, [loseBattle, hide, battle, showNextOnLoss])

  const { specialRules, onLoss } = battle.config

  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        {(specialRules || onLoss) && (
          <SpecialRules
            rules={[
              ...(specialRules ? [specialRules] : []),
              ...(onLoss === 'skip'
                ? ['You only have a single try for this battle!']
                : []),
            ]}
          />
        )}
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <BattleLostButton handleLoss={handleLoss} />
        <BattleWonButton handleWin={handleWin} />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BattleStarted))
