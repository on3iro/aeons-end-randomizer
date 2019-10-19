import React, { useState } from 'react'
import { connect } from 'react-redux'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'

import { RootState, actions, selectors } from '../../../Redux/Store'

import MarketSelect from '../../molecules/MarketSelect'

import ModalBodyWrapper from '../../atoms/ModalBodyWrapper'
import ModalFooterWrapper from '../../atoms/ModalFooterWrapper'

import Input from './Input'
import FormControl from './FormControl'

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()

const mapStateToProps = (state: RootState) => ({
  selectedVariant: selectors.Expeditions.Variants.getSelectedVariant(state),
  variants: selectors.Expeditions.Variants.getVariantList(state),
  availableMageIds: selectors.Settings.Expansions.SelectedMages.getSelectedMagesIds(
    state
  ),
  availableCards: selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(
    state
  ),
  availableLevel1TreasureIds: selectors.Settings.Expansions.Treasures.getTreasureIdsByTreasureLevel(
    state,
    { treasureLevel: 1 }
  ),
  allMarketSetups: getCustomAndPredefined(state),
})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
  selectVariant: actions.Expeditions.Variants.updateSelected,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    finisher: Function
  }

const CreationDialog = React.memo(
  ({
    allMarketSetups,
    availableCards,
    availableMageIds,
    availableLevel1TreasureIds,
    finisher,
    createExpedition,
    variants,
    selectVariant,
    selectedVariant,
  }: Props) => {
    const [expeditionName, changeExpeditionName] = useState('')
    const [bigPocketVariant, changeBigPocketVariant] = useState(false)
    const [selectedMarketId, selectMarketId] = useState('random')

    const supplySelectHandler = (id: string) => {
      selectMarketId(id)
    }

    const handleInputChange = (e: any) =>
      changeExpeditionName(e.currentTarget.value)

    const handleVariantChange = (e: any) => selectVariant(e.currentTarget.value)

    const tiles = allMarketSetups[selectedMarketId].tiles

    const handleExpeditionCreation = () => {
      createExpedition({
        variant: selectedVariant,
        name: expeditionName,
        bigPocketVariant,
        availableMageIds,
        availableCards,
        availableLevel1TreasureIds,
        tiles,
      })
      finisher()
    }

    return (
      <React.Fragment>
        <ModalBodyWrapper hasFooter={true}>
          <Input
            id="expeditionName"
            label="Expedition Name"
            placeholder="Expedition Name"
            value={expeditionName}
            onChange={handleInputChange}
            margin="normal"
            variant="outlined"
          />
          <FormControl component={'fieldset' as 'div'}>
            <FormControlLabel
              control={
                <Checkbox
                  id="bigPocket"
                  checked={bigPocketVariant}
                  onChange={() => changeBigPocketVariant(!bigPocketVariant)}
                />
              }
              label="Big Pocket Variant"
            />
          </FormControl>
          <FormControl component={'fieldset' as 'div'}>
            <FormLabel>Expedition Variant</FormLabel>
            <RadioGroup
              aria-label="Expedition Variant"
              name="variant"
              value={selectedVariant.id}
              onChange={handleVariantChange}
            >
              {variants.map(variant => (
                <FormControlLabel
                  id={variant.id}
                  value={variant.id}
                  control={<Radio />}
                  label={variant.name}
                />
              ))}
            </RadioGroup>
          </FormControl>
          <MarketSelect
            selectedMarketId={selectedMarketId}
            clickHandler={supplySelectHandler}
          />
        </ModalBodyWrapper>
        <ModalFooterWrapper>
          <Button
            size="small"
            variant="contained"
            color="primary"
            onClick={handleExpeditionCreation}
          >
            Create Expedition
          </Button>
        </ModalFooterWrapper>
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreationDialog)
