import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'
import { useModal } from '../../../../hooks/useModal'

import BeforeBattle from './BeforeBattle'
import BattleStarted from './BattleStarted'
import BattleWon from './BattleWon'
import BattleLost from './BattleLost'

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

    const handleClick = useCallback(() => {
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
          // TODO Show screen with battle details? or just show it on the tile and disable tile again?
          console.log('TODO')
          break
        }

        default: {
          // don't do anything
          break
        }
      }
    }, [
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

    return (
      <div>
        <p>
          <b>Nemesis:</b> {nemesis ? nemesis.name : '?'}
        </p>
        <p>
          <b>tries:</b> {battle.tries}
        </p>
        <p>
          <b>status:</b> {battle.status}
        </p>
        <p>
          <b>tier:</b> {battle.nemesisTier.tier}
        </p>
        <button
          disabled={battle.status === 'locked' || battle.status === 'finished'}
          onClick={handleClick}
        >
          interact
        </button>
        <RenderBeforeBattleModal titleColor="#333" titleLabel="Before Fight">
          <BeforeBattle
            hide={hideBeforeBattle}
            battle={battle}
            nemesisName={nemesis ? nemesis.name : ''}
            showNext={showBattleStarted}
          />
        </RenderBeforeBattleModal>
        <RenderBattleStartedModal titleColor="#333" titleLabel="Resolve battle">
          <BattleStarted
            hide={hideBattleStarted}
            battle={battle}
            showNextOnWin={showBattleWon}
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
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Battle)
