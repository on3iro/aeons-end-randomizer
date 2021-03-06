import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'

import { actions } from 'Redux/Store'
import { RewardType } from 'Redux/Store/Expeditions/Expeditions/'

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

type OwnProps = {
  battle: types.Battle
}

const mapStateToProps = () => {
  return {}
}

const mapDispatchToProps = {
  rollLoss: actions.Expeditions.Expeditions.rollLoss,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const LossRewardTypeSelection = ({ battle, rollLoss }: Props) => {
  const treasureOptions = getTreasureOptionsByTier(battle.config.tier)

  // FIXME does not work, if mage is not shown as option, due to no available mages
  const [rewardSelectValue, updateRewardSelectValue] = useState<RewardType>(
    'mage'
  )

  const handleRewardSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateRewardSelectValue(e.target.value as RewardType)
    },
    [updateRewardSelectValue]
  )

  const handleRewardConfirmation = useCallback(() => {
    rollLoss(battle, rewardSelectValue)
  }, [rewardSelectValue, battle, rollLoss])

  const tryIndex = battle.tries - 1
  const rewardsConfig =
    battle.config.lossRewards && battle.config.lossRewards !== 'skip'
      ? battle.config.lossRewards[tryIndex]
      : undefined

  if (rewardsConfig && rewardsConfig.type !== 'regular') {
    return (
      <React.Fragment>
        <ModalBodyWrapper hasFooter={true}>
          <SectionHeadline>Get your rewards</SectionHeadline>
        </ModalBodyWrapper>
        <ModalFooterWrapper>
          <ConfirmButton
            handleRewardConfirmation={handleRewardConfirmation}
            data-test="btn-confirm-reward"
          />
        </ModalFooterWrapper>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        <SectionHeadline>Select an item to roll</SectionHeadline>
        <RewardSelect
          expeditionId={battle.expeditionId}
          rewardSelectValue={rewardSelectValue}
          handleRewardSelectChange={handleRewardSelectChange}
          treasureOptions={treasureOptions}
          data-test="select-loss-reward"
        />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <ConfirmButton
          handleRewardConfirmation={handleRewardConfirmation}
          data-test="btn-confirm-reward"
        />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(LossRewardTypeSelection))
