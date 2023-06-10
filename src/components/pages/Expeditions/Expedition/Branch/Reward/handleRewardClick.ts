import { actions } from 'Redux/Store'

import { useModal } from 'hooks/useModal'
import * as types from 'aer-types/types'

type ModalType = ReturnType<typeof useModal>

type Config = {
  reward: types.Reward
  expeditionIsFinished: boolean
  expeditionComplete: ModalType
  rewardUnlocked: ModalType
  generateRewards: typeof actions.Expeditions.Expeditions.generateRewards
}

export const handleRewardClick = ({
  reward,
  expeditionIsFinished,
  expeditionComplete,
  rewardUnlocked,
  generateRewards,
}: Config) => {
  if (expeditionIsFinished) {
    generateRewards({ reward })
    expeditionComplete.show()
  } else {
    switch (reward.status) {
      case 'unlocked': {
        if (!reward.rewards) {
          generateRewards({ reward })
        }
        rewardUnlocked.show()
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
