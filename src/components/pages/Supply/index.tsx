import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import SupplyList from '../../SupplyList'
import MarketSelect from '../../MarketSelect'

import SupplyModal from './SupplyModal'

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

    const [modalIsVisible, setModalVisible] = useState<boolean | string>(false)
    const [modalContentId, setModalContentId] = useState<string>('')

    const handleSupplyDetails = (cardId: string) => {
      setModalVisible(true)
      setModalContentId(cardId)
    }

    const handleModalClose = () => {
      setModalVisible(false)
    }

    const handleShuffle = () => {
      createMarket(availableCards, tiles)
    }

    return (
      <React.Fragment>
        <MarketSelect
          selectedMarketId={selectedMarketId}
          clickHandler={clickHandler}
        />
        <SupplyList
          tiles={randomCards || tiles}
          showSupplyDetails={handleSupplyDetails}
        />
        <ShuffleButton
          onClick={handleShuffle}
          color="primary"
          variant="extended"
        >
          Create Market
        </ShuffleButton>
        <SupplyModal
          id={modalContentId}
          visible={modalIsVisible}
          closeModal={handleModalClose}
        />
      </React.Fragment>
    )
  }
)

Supply.displayName = 'Supply'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Supply)
