import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import MarketSelect from '../../molecules/MarketSelect'

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
    1
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
      <div>
        <input
          type="text"
          value={expeditionName}
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="big-pocket">Big Pocket Variant</label>
        <input
          type="checkbox"
          id="big-pocket"
          checked={bigPocketVariant}
          onChange={() => changeBigPocketVariant(!bigPocketVariant)}
        />
        <br />
        <ul>
          {variants.map(variant => (
            <li key={variant.id}>
              <label htmlFor={variant.id}>{variant.name}</label>
              <input
                type="radio"
                id={variant.id}
                name="variant"
                value={variant.id}
                checked={variant.id === selectedVariant.id}
                onChange={() => selectVariant(variant.id)}
              />
            </li>
          ))}
        </ul>
        <MarketSelect
          selectedMarketId={selectedMarketId}
          clickHandler={supplySelectHandler}
        />
        <button onClick={handleExpeditionCreation}>Create Expedition</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreationDialog)
