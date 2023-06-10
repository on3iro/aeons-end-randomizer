import { useModal } from 'hooks/useModal'
import * as types from 'aer-types/types'

type ModalType = ReturnType<typeof useModal>

type Config = {
  narrative: types.Narrative
  expeditionIsFinished: boolean
  expeditionComplete: ModalType
  narrativeUnlocked: ModalType
}

export const handleNarrativeClick = ({
  narrative,
  expeditionIsFinished,
  expeditionComplete,
  narrativeUnlocked,
}: Config) => {
  if (expeditionIsFinished) {
    expeditionComplete.show()
  } else {
    switch (narrative.status) {
      case 'unlocked': {
        narrativeUnlocked.show()
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
