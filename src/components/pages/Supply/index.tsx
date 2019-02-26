import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useExpandedHandling from '../../../hooks/useExpansionHandling'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'
import ShuffleButton from '../../ShuffleButton'

import supplyStyles from './supplyStyles'
import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'
import {
  useMarketSetup,
  useSetHandling
} from './hooks'
import {
  createSupply
} from './helpers'


const Supply = React.memo(({ classes }: { classes: any }) => {
  const { expanded, handleExpansion, setExpanded } = useExpandedHandling()
  const {
    selectedSets,
    NoSelectedExpansionsComponent,
    cards,
    setCards
  } = useSetHandling()
  const { marketSetup, handleMarketSetup } = useMarketSetup(setExpanded, setCards)

  if (NoSelectedExpansionsComponent) {
    return <NoSelectedExpansionsComponent />
  }

  const handleShuffle = () => {
    const { gems, relics, spells } = createSupply(selectedSets, marketSetup.tiles)
    setCards([...gems.result, ...relics.result, ...spells.result])
  }

  return (
    <React.Fragment>
      <StyledExpansionPanel expanded={expanded === 'setup'} onChange={handleExpansion('setup')}>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{marketSetup.name}</Typography>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <MarketOptions
            marketSetupId={marketSetup.id}
            changeHandler={handleMarketSetup}
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

export default withStyles(supplyStyles)(Supply)
