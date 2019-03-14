import React from 'react'
import { connect } from 'react-redux'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import { RootState } from '../../../Redux/Store'
import * as SelectedExpansions from '../../../Redux/Store/Settings/Expansions/Selected'
import * as SupplySelection from '../../../Redux/Store/Supply/Selection'
import * as SupplySetups from '../../../Redux/Store/Settings/SupplySetups'
import * as RandomSupply from '../../../Redux/Store/Supply/RandomSetup'

import useExpandedHandling from '../../../hooks/useExpansionHandling'
import { ICard, Slot, IMarketSetup } from '../../../types'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'
import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import supplyStyles from './supplyStyles'
import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'


const Supply = React.memo(({
  classes,
  cards,
  createMarket,
  hasStandaloneExpansionSelected,
  marketSetup,
  selectedExpansions,
}: {
  classes: any,
  cards: ReadonlyArray<Slot | ICard>,
  createMarket: (expansions: ReadonlyArray<string>, tiles: ReadonlyArray<Slot>) => RandomSupply.Action,
  hasStandaloneExpansionSelected: boolean,
  marketSetup: IMarketSetup,
  selectedExpansions: ReadonlyArray<string>,
}) => {
  const { expanded, createExpansionHandler } = useExpandedHandling()
  const expansionHandler = createExpansionHandler('setup')

  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  const handleShuffle = () => {
    createMarket(selectedExpansions, marketSetup.tiles)
  }

  return (
    <React.Fragment>
      <StyledExpansionPanel expanded={expanded === 'setup'} onChange={expansionHandler}>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{marketSetup.name}</Typography>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MarketOptions
            marketSetupId={marketSetup.id}
            expansionHandler={expansionHandler}
          />
        </ExpansionPanelDetails>
      </StyledExpansionPanel>
      <SupplyList
        marketSetup={marketSetup}
        cards={cards}
        classes={classes}
      />
      <ShuffleButton
        onClick={handleShuffle}
        color="primary" 
        variant="extended"
      >
        Create Market
      </ShuffleButton>
    </React.Fragment>
  )
})

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: SelectedExpansions.selectors.getHasStandaloneSet(state),
  selectedExpansions: SelectedExpansions.selectors.getSelectedExpansionsArray(state),
  marketSetup: SupplySelection.selectors.getSelectedSetup(state),
  cards: RandomSupply.selectors.getCards(state)
})
const mapDispatchToProps = {
  createMarket: RandomSupply.actions.createMarket,
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(supplyStyles)(Supply))
