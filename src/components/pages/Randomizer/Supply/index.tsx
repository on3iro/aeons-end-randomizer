import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'

import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'
import SupplyList from 'components/molecules/SupplyList'
import MarketSelect from 'components/molecules/MarketSelect'

import ShuffleButton from 'components/atoms/ShuffleButton'

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableCards: selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(
    state
  ),
  allMarketSetups: getCustomAndPredefined(state),
  randomCards: selectors.Randomizer.Supply.RandomSetup.getTiles(state),
})

const mapDispatchToProps = {
  createMarket: actions.Randomizer.Supply.RandomSetup.createMarket,
  resetMarket: actions.Randomizer.Supply.RandomSetup.resetMarket,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Supply = ({
  allMarketSetups,
  availableCards,
  createMarket,
  hasStandaloneExpansionSelected,
  resetMarket,
  randomCards,
}: Props) => {
  const [selectedMarketId, selectMarketId] = useState('random')

  const clickHandler = (id: string) => {
    selectMarketId(id)
    resetMarket()
  }

  const tiles = allMarketSetups[selectedMarketId].tiles

  const handleShuffle = () => {
    createMarket(availableCards, tiles)
  }

  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  return (
    <React.Fragment>
      <MarketSelect
        selectedMarketId={selectedMarketId}
        clickHandler={clickHandler}
      />
      <SupplyList tiles={randomCards || tiles} />
      <ShuffleButton
        onClick={handleShuffle}
        color="primary"
        variant="extended"
        withBottomNav={true}
      >
        Create Market
      </ShuffleButton>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Supply))
