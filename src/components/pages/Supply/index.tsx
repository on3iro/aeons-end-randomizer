import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NoSelectedExpansions from '../../molecules/NoSelectedExpansions'
import SupplyList from '../../molecules/SupplyList'
import MarketSelect from '../../molecules/MarketSelect'

import ShuffleButton from '../../atoms/ShuffleButton'

const getCustomAndPredefined = selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableCards: selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(
    state
  ),
  allMarketSetups: getCustomAndPredefined(state),
  randomCards: selectors.Supply.RandomSetup.getTiles(state),
})

const mapDispatchToProps = {
  createMarket: actions.Supply.RandomSetup.createMarket,
  resetMarket: actions.Supply.RandomSetup.resetMarket,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Supply = React.memo(
  ({
    allMarketSetups,
    availableCards,
    createMarket,
    hasStandaloneExpansionSelected,
    resetMarket,
    randomCards,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    const [selectedMarketId, selectMarketId] = useState('random')

    const clickHandler = (id: string) => {
      selectMarketId(id)
      resetMarket()
    }

    const tiles = allMarketSetups[selectedMarketId].tiles

    const handleShuffle = () => {
      createMarket(availableCards, tiles)
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
)

Supply.displayName = 'Supply'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Supply)
