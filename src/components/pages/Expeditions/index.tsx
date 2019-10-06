import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import A from '../../A'
import MarketSelect from '../../MarketSelect'
import NoSelectedExpansions from '../../NoSelectedExpansions'
import ShuffleButton from '../../ShuffleButton'

const renderExpeditions = (
  expeditions: Array<{ id: string; name: string }>
) => {
  return expeditions.map(expedition => {
    const url = `/expeditions/${expedition.id}`
    return (
      <li key={expedition.id}>
        <A to={url}>
          {expedition.name} {expedition.id}
        </A>
      </li>
    )
  })
}

// FIXME
// extract expedition creation fields to its own modal

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  expeditions: selectors.Expeditions.Expeditions.getExpeditionList(state),
  selectedMode: selectors.Expeditions.Modes.getSelectedMode(state),
  modes: selectors.Expeditions.Modes.getModeList(state),
  availableMageIds: selectors.Settings.Expansions.SelectedMages.getSelectedMagesIds(
    state
  ),
  availableCards: selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(
    state
  ),
  allMarketSetups: getCustomAndPredefined(state),
})

const mapDispatchToProps = {
  createExpedition: actions.Expeditions.Expeditions.createExpedition,
  selectMode: actions.Expeditions.Modes.updateSelected,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expeditions = React.memo(
  ({
    allMarketSetups,
    availableCards,
    availableMageIds,
    createExpedition,
    expeditions,
    hasStandaloneExpansionSelected,
    modes,
    selectMode,
    selectedMode,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }
    const [expeditionName, changeExpeditionName] = useState('')
    const [bigPocketMode, changeBigPocketMode] = useState(false)
    const [selectedMarketId, selectMarketId] = useState('random')

    const supplySelectHandler = (id: string) => {
      selectMarketId(id)
    }

    const handleInputChange = (e: any) =>
      changeExpeditionName(e.currentTarget.value)

    const tiles = allMarketSetups[selectedMarketId].tiles

    const handleNewExpeditionSetup = () => {
      createExpedition({
        modeId: selectedMode,
        name: expeditionName,
        bigPocketMode,
        availableMageIds,
        availableCards,
        tiles,
      })
    }

    return (
      <React.Fragment>
        <div>
          <input
            type="text"
            value={expeditionName}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="big-pocket">Big Pocket Mode</label>
          <input
            type="checkbox"
            id="big-pocket"
            checked={bigPocketMode}
            onChange={() => changeBigPocketMode(!bigPocketMode)}
          />
          <br />
          <ul>
            {modes.map(mode => (
              <li key={mode.id}>
                <label htmlFor={mode.id}>{mode.name}</label>
                <input
                  type="radio"
                  id={mode.id}
                  name="mode"
                  value={mode.id}
                  checked={mode.id === selectedMode}
                  onChange={() => selectMode(mode.id)}
                />
              </li>
            ))}
          </ul>
          <MarketSelect
            selectedMarketId={selectedMarketId}
            clickHandler={supplySelectHandler}
          />
        </div>
        <p>Expeditions</p>
        {expeditions.length > 0 ? (
          <ul>{renderExpeditions(expeditions)}</ul>
        ) : (
          <p>No expeditions</p>
        )}
        <ShuffleButton
          onClick={handleNewExpeditionSetup}
          color="primary"
          variant="extended"
        >
          Start new expedition
        </ShuffleButton>
      </React.Fragment>
    )
  }
)

Expeditions.displayName = 'Expeditions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expeditions)
