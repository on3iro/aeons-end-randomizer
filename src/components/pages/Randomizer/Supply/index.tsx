import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'

import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'
import SupplyList from 'components/molecules/SupplyList'
import MarketSelect from 'components/molecules/MarketSelect'

import ShuffleButton from 'components/atoms/ShuffleButton'

const getCustomAndPredefined =
  selectors.Settings.SupplySetups.makeGetCustomAndPredefined()
const mapStateToProps = (state: RootState) => {
  const supplyIds = selectors.Randomizer.Supply.RandomSetup.getTiles(state)
  const selectedCardsForSelectedExpansions =
    selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(state)
  const lockedCards =
    selectors.Randomizer.Supply.LockedCards.getLockedCards(state)
  const availableCards = selectedCardsForSelectedExpansions.filter(
    (selected) =>
      lockedCards.findIndex((locked) => locked.id === selected.id) === -1
  )

  return {
    hasStandaloneExpansionSelected:
      selectors.Settings.Expansions.Expansions.getHasStandaloneExpansion(state),
    availableCards,
    allMarketSetups: getCustomAndPredefined(state),
    randomCards: supplyIds?.map((supplyId) => ({
      ...selectors.Settings.Expansions.Cards.content.getById(state, {
        id: supplyId.id,
      }),
      blueprintId: supplyId.blueprintId,
      canBeLocked: true,
    })),
    lockedCards,
  }
}

const mapDispatchToProps = {
  createMarket: actions.Randomizer.Supply.RandomSetup.createMarket,
  resetMarket: actions.Randomizer.Supply.RandomSetup.resetMarket,
  toggleLock: actions.Randomizer.Supply.LockedCards.toggleLock,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Supply = ({
  allMarketSetups,
  availableCards,
  createMarket,
  hasStandaloneExpansionSelected,
  resetMarket,
  randomCards,
  lockedCards,
  toggleLock,
}: Props) => {
  const [selectedMarketId, selectMarketId] = useState('random')

  const clickHandler = (id: string) => {
    selectMarketId(id)
    resetMarket()
  }

  const tiles = allMarketSetups[selectedMarketId].tiles

  const handleShuffle = () => {
    createMarket(availableCards, tiles, lockedCards)
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
      <SupplyList
        lockedCards={lockedCards}
        toggleLock={toggleLock}
        tiles={
          randomCards ||
          tiles.map((tile) => {
            return {
              ...tile,
              canBeLocked: true,
            }
          })
        }
      />
      <ShuffleButton
        onClick={handleShuffle}
        color="primary"
        variant="extended"
        withBottomNav={true}
        data-test="btn-create-market"
      >
        Create Market
      </ShuffleButton>
    </React.Fragment>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Supply))
