import { useModal } from 'hooks/useModal'
import * as types from 'aer-types/types'
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
  rollBattle: typeof actions.Expeditions.Expeditions.rollBattle
}

export const handleBattleClick = ({
  expeditionIsFinished,
  expeditionComplete,
  battle,
  beforeBattle,
  battleStarted,
  battleLost,
  battleWon,
  rollBattle,
}: Config) => {
  if (expeditionIsFinished) {
    expeditionComplete.show()
  } else {
    switch (battle.status) {
      case 'unlocked': {
        if (!battle.nemesisId) {
          rollBattle(battle)
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
