import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, selectors, actions } from 'Redux/Store'
import BranchWrapper from '../BranchWrapper'
import { useModal } from 'hooks/useModal'
import ExpeditionFinished from '../ExpeditionFinished'
import RewardTile from './RewardTile'
import { handleRewardClick } from './handleRewardClick'
import RewardUnlocked from './RewardUnlocked'

type OwnProps = {
  reward: types.Reward
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  expeditionIsFinished: selectors.Expeditions.Expeditions.getExpeditionIsFinished(
    state,
    { expeditionId: ownProps.reward.expeditionId }
  ),
})

const mapDispatchToProps = {
  generateRewards: actions.Expeditions.Expeditions.generateRewards,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Reward = ({
  reward,
  expeditionIsFinished,
  generateRewards,
  ...rest
}: Props) => {
  const rewardUnlocked = useModal()
  const expeditionComplete = useModal()

  const handleClick = useCallback(
    () =>
      handleRewardClick({
        reward,
        expeditionIsFinished,
        expeditionComplete,
        rewardUnlocked,
        generateRewards,
      }),
    [
      reward,
      expeditionIsFinished,
      expeditionComplete,
      rewardUnlocked,
      generateRewards,
    ]
  )

  return (
    <div {...rest}>
      <BranchWrapper
        disabled={reward.status === 'locked' || reward.status === 'finished'}
        onClick={handleClick}
        data-test="btn-narrative"
      >
        <RewardTile reward={reward} />
      </BranchWrapper>

      <rewardUnlocked.RenderModal titleColor="#333" titleLabel="Reward">
        <RewardUnlocked hide={rewardUnlocked.hide} reward={reward} />
      </rewardUnlocked.RenderModal>

      <expeditionComplete.RenderModal
        titleColor="#333"
        titleLabel="Congratulations"
      >
        <ExpeditionFinished branch={reward} hide={expeditionComplete.hide} />
      </expeditionComplete.RenderModal>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Reward))
