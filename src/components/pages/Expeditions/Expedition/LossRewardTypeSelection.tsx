import React from 'react'

import { RollLossType } from '../../../../Redux/Store/Expeditions/helpers'

const getTreasureOptionsByTier = (tier: 1 | 2 | 3 | 4) => [
  ...([2, 3, 4].includes(tier) ? [{ level: 1 }] : []),
  ...([3, 4].includes(tier) ? [{ level: 2 }] : []),
  ...([4].includes(tier) ? [{ level: 3 }] : []),
]

type Props = {
  rewardSelectValue: RollLossType
  handleRewardSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
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
        <h2>Select an item to roll</h2>
        <select value={rewardSelectValue} onChange={handleRewardSelectChange}>
          <option value="mage">Mage</option>
          <option value="gem">Gem</option>
          <option value="relic">Relic</option>
          <option value="spell">Spell</option>
          {treasureOptions.map(option => (
            <option key={option.level} value={`treasure${option.level}`}>
              Treasure, Level {option.level}
            </option>
          ))}
        </select>
        <button onClick={handleRewardConfirmation}>Confirm choice</button>
      </React.Fragment>
    )
  }
)

export default LossRewardTypeSelection
