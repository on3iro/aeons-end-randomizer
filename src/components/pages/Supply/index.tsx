import React from 'react'
import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles'

import { RootState } from '../../../Redux/Store'
import * as SelectedExpansions from '../../../Redux/Store/Settings/Expansions/Selected'
import * as SupplySelection from '../../../Redux/Store/Supply/Selection'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'
import * as RandomSupply from '../../../Redux/Store/Supply/RandomSetup'

import useExpandedHandling from '../../../hooks/useExpansionHandling'
import { ICard, Slot, IMarketSetup } from '../../../types'

import ExpansionPanel from '../../ExpansionPanel'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import supplyStyles from './supplyStyles'
import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: SelectedExpansions.selectors.getHasStandaloneSet(
    state
  ),
  selectedExpansions: SelectedExpansions.selectors.getSelectedExpansionsArray(
    state
  ),
  marketSetup: SupplySelection.selectors.getSelectedSetup(state),
  cards: RandomSupply.selectors.getCards(state),
})

const mapDispatchToProps = {
  createMarket: RandomSupply.actions.createMarket,
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
          <MarketOptions
            expansionHandler={expansionHandler}
            classes={classes}
          />
        </ExpansionPanel>
        <SupplyList marketSetup={marketSetup} cards={cards} classes={classes} />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(supplyStyles)(Supply))
