import React from 'react'
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem'

import FormControl from '../FormControl'
import Select from '../Select'

import { RollLossType } from 'Redux/Store/Expeditions/Expeditions/'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'
import SectionHeadline from 'components/atoms/SectionHeadline'

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
        </ModalBodyWrapper>
        <ModalFooterWrapper>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleRewardConfirmation}
          >
            Confirm choice
          </Button>
        </ModalFooterWrapper>
        >
      </React.Fragment>
    )
  }
)

export default LossRewardTypeSelection
