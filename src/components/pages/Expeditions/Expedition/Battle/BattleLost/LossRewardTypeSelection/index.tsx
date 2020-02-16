import React from 'react'

import { RollLossType } from 'Redux/Store/Expeditions/Expeditions/'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'
import SectionHeadline from 'components/atoms/SectionHeadline'

import RewardSelect from './RewardSelect'
import ConfirmButton from './ConfirmButton'

const getTreasureOptionsByTier = (tier: 1 | 2 | 3 | 4) => [
  ...([2, 3, 4].includes(tier) ? [{ level: 1 }] : []),
  ...([3, 4].includes(tier) ? [{ level: 2 }] : []),
  ...([4].includes(tier) ? [{ level: 3 }] : []),
]

type Props = {
  rewardSelectValue: RollLossType
  handleRewardSelectChange: (
    e: React.ChangeEvent<HTMLSelectElement>,
    ...args: any
  ) => void
  handleRewardConfirmation: () => void
  tier: 1 | 2 | 3 | 4
}

const LossRewardTypeSelection = React.memo(
  ({
    rewardSelectValue,
    handleRewardSelectChange,
    handleRewardConfirmation,
    tier,
  }: Props) => {
    const treasureOptions = getTreasureOptionsByTier(tier)

    return (
      <React.Fragment>
        <ModalBodyWrapper hasFooter={true}>
          <SectionHeadline>Select an item to roll</SectionHeadline>
          <RewardSelect
            rewardSelectValue={rewardSelectValue}
            handleRewardSelectChange={handleRewardSelectChange}
            treasureOptions={treasureOptions}
          />
        </ModalBodyWrapper>
        <ModalFooterWrapper>
          <ConfirmButton handleRewardConfirmation={handleRewardConfirmation} />
        </ModalFooterWrapper>
        >
      </React.Fragment>
    )
  }
)

export default LossRewardTypeSelection
