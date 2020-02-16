import { useModal } from 'hooks/useModal'
import * as types from 'types'
import { actions } from 'Redux/Store'

type ModalType = ReturnType<typeof useModal>

type Config = {
  expeditionIsFinished: boolean
  expeditionComplete: ModalType
  battle: types.Battle
  beforeBattle: ModalType
  battleStarted: ModalType
  battleLost: ModalType
  battleWon: ModalType
  availableNemeses: any //FIXME
  availableUpgradedBasicNemesisCards: any //FIXME
  rollBattle: typeof actions.Expeditions.Expeditions.rollBattle
  previousNemeses: any //FIXME
  previousUpgradedBasicNemesis: any //FIXME
}

export const handleBattleClick = ({
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
}: Config) => {
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
}
