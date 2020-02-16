import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'types'

import { useStateModals } from './useStateModals'
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
const Battle = ({
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
    beforeBattle,
    battleStarted,
    battleLost,
    battleWon,
    expeditionComplete,
  } = useStateModals()

  const handleClick = useCallback(() => {
    if (expeditionIsFinished) {
      expeditionComplete.show()
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
          beforeBattle.show()
          break
        }

        case 'before_battle': {
          beforeBattle.show()
          break
        }

        case 'started': {
          battleStarted.show()
          break
        }

        case 'lost': {
          battleLost.show()
          break
        }

        case 'won': {
          battleWon.show()
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
    expeditionComplete,
    battle,
    beforeBattle,
    battleStarted,
    battleLost,
    battleWon,
    availableNemeses,
    availableUpgradedBasicNemesisCards,
    rollBattle,
    previousNemeses,
    previousUpgradedBasicNemesis,
  ])

  const battleWonCallback = useCallback(
    expeditionIsFinished => {
      if (expeditionIsFinished) {
        expeditionComplete.show()
      } else {
        battleWon.show()
      }
    },
    [battleWon, expeditionComplete]
  )

  return (
    <div>
      <BattleWrapper
        disabled={battle.status === 'locked' || battle.status === 'finished'}
        onClick={handleClick}
      >
        <BattleTile battle={battle} nemesis={nemesis ? nemesis.name : '?'} />
      </BattleWrapper>

      <beforeBattle.RenderModal titleColor="#333" titleLabel="Before Fight">
        <BeforeBattle
          hide={beforeBattle.hide}
          battle={battle}
          nemesis={nemesis ? nemesis : undefined}
          showNext={battleStarted.show}
        />
      </beforeBattle.RenderModal>

      <battleStarted.RenderModal titleColor="#333" titleLabel="Resolve battle">
        <BattleStarted
          hide={battleStarted.hide}
          battle={battle}
          showNextOnWin={battleWonCallback}
          showNextOnLoss={battleLost.show}
        />
      </battleStarted.RenderModal>

      <battleLost.RenderModal titleColor="#333" titleLabel="Battle lost">
        <BattleLost
          hide={battleLost.hide}
          battle={battle}
          showNext={beforeBattle.show}
        />
      </battleLost.RenderModal>

      <battleWon.RenderModal titleColor="#333" titleLabel="Rewards">
        <BattleWon hide={battleWon.hide} battle={battle} />
      </battleWon.RenderModal>

      <expeditionComplete.RenderModal
        titleColor="#333"
        titleLabel="Congratulations"
      >
        <ExpeditionFinished battle={battle} hide={expeditionComplete.hide} />
      </expeditionComplete.RenderModal>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Battle))
