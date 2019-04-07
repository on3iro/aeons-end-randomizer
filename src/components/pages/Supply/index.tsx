import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import { RootState, actions, selectors } from '../../../Redux/Store'

import useExpandedHandling from '../../../hooks/useExpansionHandling'
import { ICard, Slot, IMarketSetup } from '../../../types'

import ExpansionPanel from '../../ExpansionPanel'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import supplyStyles from './supplyStyles'
import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.Selected.getHasStandaloneSet(
    state
  ),
  selectedExpansions: selectors.Settings.Expansions.Selected.getSelectedExpansionsArray(
    state
  ),
  marketSetup: selectors.Supply.Selection.getSelectedSetup(state),
  cards: selectors.Supply.RandomSetup.getCards(state),
})

const mapDispatchToProps = {
  createMarket: actions.Supply.RandomSetup.createMarket,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const Supply = React.memo(
  ({
    classes,
    cards,
    createMarket,
    hasStandaloneExpansionSelected,
    marketSetup,
    selectedExpansions,
  }: Props) => {
    const { expanded, createExpansionHandler } = useExpandedHandling()
    const expansionKey = 'setup'
    const expansionHandler = createExpansionHandler(expansionKey)

    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    const handleShuffle = () => {
      createMarket(selectedExpansions, marketSetup.tiles)
    }

    return (
      <React.Fragment>
        <ExpansionPanel
          expanded={expanded}
          classes={classes}
          expansionKey={expansionKey}
          summary={marketSetup.name}
          expansionHandler={expansionHandler}
        >
          <MarketOptions expansionHandler={expansionHandler} />
        </ExpansionPanel>
        <SupplyList marketSetup={marketSetup} cards={cards} />
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
)(withStyles(supplyStyles)(Supply))
