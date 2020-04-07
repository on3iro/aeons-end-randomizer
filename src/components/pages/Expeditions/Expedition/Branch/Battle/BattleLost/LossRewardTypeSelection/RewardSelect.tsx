import React from 'react'
import { connect } from 'react-redux'
import MenuItem from '@material-ui/core/MenuItem'

import { RootState, selectors } from 'Redux/Store'

import { RewardType } from 'Redux/Store/Expeditions/Expeditions/'
import FormControl from 'components/pages/Expeditions/FormControl'
import Select from 'components/pages/Expeditions/Select'

type OwnProps = {
  expeditionId: string
  rewardSelectValue: RewardType
  handleRewardSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  treasureOptions: Array<{ level: number }>
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const { expeditionId } = ownProps
  return {
    hasMagesLeft:
      selectors.getStillAvailableMageIds(state, {
        expeditionId,
      }).length > 0,
    hasGemsLeft:
      selectors.getStillAvailableGemIds(state, {
        expeditionId,
      }).length > 0,
    hasRelicsLeft:
      selectors.getStillAvailableRelicIds(state, {
        expeditionId,
      }).length > 0,
    hasSpellsLeft:
      selectors.getStillAvailableSpellIds(state, {
        expeditionId,
      }).length > 0,
    hasLvl1TreasureLeft:
      selectors.getStillAvailableTreasureIdsByLevel(state, {
        expeditionId,
        treasureLevel: 1,
      }).length > 0,
    hasLvl2TreasureLeft:
      selectors.getStillAvailableTreasureIdsByLevel(state, {
        expeditionId,
        treasureLevel: 2,
      }).length > 0,
    hasLvl3TreasureLeft:
      selectors.getStillAvailableTreasureIdsByLevel(state, {
        expeditionId,
        treasureLevel: 3,
      }).length > 0,
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const RewardSelect = ({
  rewardSelectValue,
  handleRewardSelectChange,
  treasureOptions,
  hasMagesLeft,
  hasGemsLeft,
  hasRelicsLeft,
  hasSpellsLeft,
  hasLvl1TreasureLeft,
  hasLvl2TreasureLeft,
  hasLvl3TreasureLeft,
  ...rest
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
        {...rest}
      >
        {hasMagesLeft && (
          <MenuItem value="mage" data-test="option-mage">
            Mage
          </MenuItem>
        )}
        {hasGemsLeft && (
          <MenuItem value="gem" data-test="option-gem">
            Gem
          </MenuItem>
        )}
        {hasRelicsLeft && (
          <MenuItem value="relic" data-test="option-relic">
            Relic
          </MenuItem>
        )}
        {hasSpellsLeft && (
          <MenuItem value="spell" data-test="option-spell">
            Spell
          </MenuItem>
        )}

        {treasureOptions.map((option) => {
          if (
            (option.level === 1 && hasLvl1TreasureLeft) ||
            (option.level === 2 && hasLvl2TreasureLeft) ||
            (option.level === 3 && hasLvl3TreasureLeft)
          ) {
            return (
              <MenuItem
                key={option.level}
                value={`treasure${option.level}`}
                data-test={`option-treasure-${option.level}`}
              >
                Treasure, Level {option.level}
              </MenuItem>
            )
          }

          return null
        })}
      </Select>
    </FormControl>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(RewardSelect))
