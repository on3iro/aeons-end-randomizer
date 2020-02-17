import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import * as types from 'types'

import { actions } from 'Redux/Store'
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

type OwnProps = {
  battle: types.Battle
  dataConfig: any
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

const LossRewardTypeSelection = ({ battle, dataConfig, rollLoss }: Props) => {
  const treasureOptions = getTreasureOptionsByTier(battle.nemesisTier.tier)

  const [rewardSelectValue, updateRewardSelectValue] = useState<RollLossType>(
    'mage'
  )

  const handleRewardSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      updateRewardSelectValue(e.target.value as RollLossType)
    },
    [updateRewardSelectValue]
  )

  const handleRewardConfirmation = useCallback(() => {
    const config = {
      type: rewardSelectValue as RollLossType, // FIXME we should try to get it typesafe instead of casting
      battle,
      ...dataConfig,
    }

    rollLoss(config)
  }, [rewardSelectValue, battle, rollLoss, dataConfig])

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(LossRewardTypeSelection))
