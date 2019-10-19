import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'
import { useModal } from '../../../../hooks/useModal'

import BattleWrapper from './BattleWrapper'
import BattleTile from './BattleTile'
import BeforeBattle from './BeforeBattle'
import BattleStarted from './BattleStarted'
import BattleWon from './BattleWon'
import BattleLost from './BattleLost'
import ExpeditionFinished from './ExpeditionFinished'

type OwnProps = {
  battle: types.Battle
  previousNemeses: string[]
  previousUpgradedBasicNemesis: string[]
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const nemesisId = ownProps.battle.nemesisId
  const nemesis = nemesisId
    ? selectors.Settings.Expansions.SelectedNemeses.getNemesisById(state, {
        id: nemesisId,
      })
    : null

  return {
    nemesis,
    availableNemeses: selectors.Settings.Expansions.getSelectedNemesesForSelectedExpansions(
      state
    ),
    availableUpgradedBasicNemesisCards: selectors.Settings.Expansions.getUpgradedBasicNemesisCardsForSelectedExpansions(
      state
    ),
    expeditionIsFinished: selectors.Expeditions.Expeditions.getExpeditionIsFinished(
      state,
      { expeditionId: ownProps.battle.expeditionId }
    ),
  }
}

const mapDispatchToProps = {
  rollBattle: actions.Expeditions.Expeditions.rollBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

// TODO make all of this beautiful ;)
const Battle = React.memo(
  ({
    battle,
    expeditionIsFinished,
    nemesis,
    availableNemeses,
    availableUpgradedBasicNemesisCards,
    rollBattle,
    previousNemeses,
    previousUpgradedBasicNemesis,
  }: Props) => {
    const {
      show: showBeforeBattle,
      hide: hideBeforeBattle,
      RenderModal: RenderBeforeBattleModal,
    } = useModal()
    const {
      show: showBattleStarted,
      hide: hideBattleStarted,
      RenderModal: RenderBattleStartedModal,
    } = useModal()
    const {
      show: showBattleLost,
      hide: hideBattleLost,
      RenderModal: RenderBattleLostModal,
    } = useModal()
    const {
      show: showBattleWon,
      hide: hideBattleWon,
      RenderModal: RenderBattleWonModal,
    } = useModal()
    const {
      show: showExpeditionComplete,
      hide: hideExpeditionComplete,
      RenderModal: RenderExpeditionCompleteModal,
    } = useModal()

    const handleClick = useCallback(() => {
      if (expeditionIsFinished) {
        showExpeditionComplete()
      } else {
        switch (battle.status) {
          case 'unlocked': {
            if (!battle.nemesisId) {
              rollBattle({
                battle,
                availableNemeses,
                availableUpgradedBasicNemesisCards,
                previousUpgradedBasicNemesisCards: previousUpgradedBasicNemesis,
                previousNemeses,
              })
            }
            showBeforeBattle()
            break
          }

          case 'before_battle': {
            showBeforeBattle()
            break
          }

          case 'started': {
            showBattleStarted()
            break
          }

          case 'lost': {
            showBattleLost()
            break
          }

          case 'won': {
            showBattleWon()
            break
          }

          case 'finished': {
            // don't do anything
            break
          }

          default: {
            // don't do anything
            break
          }
        }
      }
    }, [
      expeditionIsFinished,
      showExpeditionComplete,
      battle,
      showBeforeBattle,
      showBattleStarted,
      showBattleLost,
      showBattleWon,
      availableNemeses,
      availableUpgradedBasicNemesisCards,
      rollBattle,
      previousNemeses,
      previousUpgradedBasicNemesis,
    ])

    const battleWonCallback = useCallback(
      expeditionIsFinished => {
        if (expeditionIsFinished) {
          showExpeditionComplete()
        } else {
          showBattleWon()
        }
      },
      [showBattleWon, showExpeditionComplete]
    )

    return (
      <div>
        <BattleWrapper
          disabled={battle.status === 'locked' || battle.status === 'finished'}
          onClick={handleClick}
        >
          <BattleTile battle={battle} nemesis={nemesis ? nemesis.name : '?'} />
        </BattleWrapper>

        <RenderBeforeBattleModal titleColor="#333" titleLabel="Before Fight">
          <BeforeBattle
            hide={hideBeforeBattle}
            battle={battle}
            nemesis={nemesis ? nemesis : undefined}
            showNext={showBattleStarted}
          />
        </RenderBeforeBattleModal>
        <RenderBattleStartedModal titleColor="#333" titleLabel="Resolve battle">
          <BattleStarted
            hide={hideBattleStarted}
            battle={battle}
            showNextOnWin={battleWonCallback}
            showNextOnLoss={showBattleLost}
          />
        </RenderBattleStartedModal>
        <RenderBattleLostModal titleColor="#333" titleLabel="Battle lost">
          <BattleLost
            hide={hideBattleLost}
            battle={battle}
            showNext={showBeforeBattle}
          />
        </RenderBattleLostModal>
        <RenderBattleWonModal titleColor="#333" titleLabel="Rewards">
          <BattleWon hide={hideBattleWon} battle={battle} />
        </RenderBattleWonModal>
        <RenderExpeditionCompleteModal
          titleColor="#333"
          titleLabel="Congratulations"
        >
          <ExpeditionFinished battle={battle} hide={hideExpeditionComplete} />
        </RenderExpeditionCompleteModal>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle)
