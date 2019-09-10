import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import useExpandedHandling from '../../../hooks/useExpansionHandling'

import ExpansionPanel from '../../ExpansionPanel'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableCards: selectors.Settings.Expansions.getSelectedCardsForSelectedExpansions(
    state
  ),
  marketSetup: selectors.Supply.Selection.getSelectedSetup(state),
  tiles: selectors.Supply.RandomSetup.getTiles(state),
})

const mapDispatchToProps = {
  createMarket: actions.Supply.RandomSetup.createMarket,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Supply = React.memo(
  ({
    tiles,
    availableCards,
    createMarket,
    hasStandaloneExpansionSelected,
    marketSetup,
  }: Props) => {
    const { expanded, createExpansionHandler } = useExpandedHandling()
    const expansionKey = 'setup'
    const expansionHandler = createExpansionHandler(expansionKey)

    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    const handleShuffle = () => {
      createMarket(availableCards, marketSetup.tiles)
    }

    return (
      <React.Fragment>
        <ExpansionPanel
          expanded={expanded}
          expansionKey={expansionKey}
          summary={marketSetup.name}
          expansionHandler={expansionHandler}
        >
          <MarketOptions expansionHandler={expansionHandler} />
        </ExpansionPanel>
        <SupplyList tiles={tiles} />
        <ShuffleButton
          onClick={handleShuffle}
          color="primary"
          variant="extended"
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
