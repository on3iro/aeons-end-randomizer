import React, { useState } from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useSelectedSets from 'hooks/useSelectedSets'
import useExpansionHandling from 'hooks/useExpansionHandling'
import config from 'config'

import StyledExpansionPanel from 'components/StyledExpansionPanel'
import StyledExpansionPanelSummary from 'components/StyledExpansionPanelSummary'
import ShuffleButton from 'components/ShuffleButton'
import {
  createSlotList,
  getListOfAvailableEntity,
  createEntityList
} from '../helpers.js'

import supplyStyles from './supplyStyles'
import SupplyList from './SupplyList'
import MarketOptions from './MarketOptions'

/**
  * Creates a list of randomly selected cards from a given pool of cards by a specific type.
  * The amount of cards generated is determined by the amount of tileSetups matching
  * the given cardType. E.g. if 2 out of 9 tileSetups have the type="Gem" and the
  * specified type is "Gem" as well, a list of two cards will be created.
  *
  * return List<Card>
  */
const getRandomCardsByType = (availableCards, tileSetups, cardType) => {
    const cardSlots = tileSetups.filter(({ type }) => type === cardType)
    const availableCardsOfType = availableCards.filter(({ type }) => type === cardType)
    return createEntityList(availableCardsOfType, cardSlots)
}

/**
 * Creates a supply object, containing gems, relics and spells with meta information.
 * The pool of available cards will be determined by the sets the user has selected
 * inside the application settings. The supply will be created via the blueprint
 * of the given tileSetups.
 *
 * return { gems, relics, spells }
  */
const createSupply = (selectedSets, tileSetups) => {
  const availableCards = getListOfAvailableEntity(selectedSets, "cards")

  const gems = getRandomCardsByType(availableCards, tileSetups, "Gem")
  const relics = getRandomCardsByType(availableCards, tileSetups, "Relic")
  const spells = getRandomCardsByType(availableCards, tileSetups, "Spell")

  return { gems, relics, spells }
}

// Component
const Supply = React.memo(({ classes }) => {
  const { expanded, handleExpansion, setExpanded } = useExpansionHandling()

  // Market setup handling
  const [ marketSetup, setMarketSetup ] = useState(config.MARKETSETUPS['market1'])
  const handleMarketSetup = (event) => {
    setMarketSetup(config.MARKETSETUPS[event.target.value])
    setExpanded(false)
  }

  // Set handling
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const emptySlotList = () => createSlotList(9)
  const [cards, setCards] = useState(emptySlotList)

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const handleShuffle = () => {
    const { gems, relics, spells } = createSupply(selectedSets, marketSetup.tiles)
    setCards([...gems, ...relics, ...spells])
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
