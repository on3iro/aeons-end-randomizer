import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'

import FormControl from '../../../../FormControl'
import Select from '../../../../Select'

import { RollLossType } from 'Redux/Store/Expeditions/Expeditions/'

type Props = {
  rewardSelectValue: RollLossType
  handleRewardSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  treasureOptions: Array<{ level: number }>
}

const RewardSelect = ({
  rewardSelectValue,
  handleRewardSelectChange,
  treasureOptions,
}: Props) => {
  return (
    <FormControl>
      <Select
        value={rewardSelectValue}
        onChange={handleRewardSelectChange}
        inputProps={{
          name: 'reward',
          id: `reward`,
        }}
      >
        <MenuItem value="mage">Mage</MenuItem>
        <MenuItem value="gem">Gem</MenuItem>
        <MenuItem value="relic">Relic</MenuItem>
        <MenuItem value="spell">Spell</MenuItem>

        {treasureOptions.map(option => (
          <MenuItem key={option.level} value={`treasure${option.level}`}>
            Treasure, Level {option.level}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default React.memo(RewardSelect)
