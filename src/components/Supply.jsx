import React, { useState } from 'react'

import styled from 'styled-components/macro'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import useSelectedSets from '../hooks/useSelectedSets.jsx'

import ShuffleButton from './ShuffleButton.jsx'
import {
  createSlotList,
  getListOfAvailableEntity,
  createEntityList
} from './helpers.js'
import MARKETSETUPS from './marketSetups.js'

const createTiles = (marketSetup, cards, classes) => {
  return marketSetup.tiles.map(({ type, operation, threshold, values }, i) => (
      <GridListTile key={i} cols={1} style={{ height: 'auto' }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {type} { (() => {
                if (operation === "OR" && values) {
                  return values.join("/")
                }

                return `${operation} ` + (threshold ? threshold : "")
              })()}
            </Typography>
            <Typography component="p">
              { cards[i].name !== undefined ? cards[i].name : "-" }
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Set: { cards[i].set !== undefined ? cards[i].set : "-" }
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Cost: { cards[i].cost !== undefined ? cards[i].cost : "-" }
            </Typography>
          </CardContent>
        </Card>
      </GridListTile>
  ))
}

const GridListWrapper = styled('div')`
  margin-top: 20px;
`

const renderMarketOptions = () => Object.values(MARKETSETUPS).map(setup => (
  <FormControlLabel key={setup.id} value={setup.id} control={<Radio />} label={setup.name} />
))

const Supply = ({ classes }) => {
  // Expansion handling
  const [ expanded, setExpanded ] = useState(null)
  const handleExpansion = (panel) => (event, expanded) => {
    const panelExpanded = expanded
      ? panel
      : false
    setExpanded(panelExpanded)
  }

  // Market setup handling
  const [ marketSetup, setMarketSetup ] = useState(MARKETSETUPS['market1'])
  const handleMarketSetup = (event) => {
    setMarketSetup(MARKETSETUPS[event.target.value])
    setExpanded(false)
  }

  // Set handling
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const emptySlotList = createSlotList(9)
  const [cards, setCards] = useState(emptySlotList)

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const handleShuffle = () => {
    const tiles = marketSetup.tiles
    const availableCards = getListOfAvailableEntity(selectedSets, "cards")

    // Gems
    const gemSlots = tiles.filter(({ type }) => type === "Gem")
    const availableGems = availableCards.filter(({ type }) => type === "Gem")
    const gems = createEntityList(availableGems, gemSlots)

    // Relics
    const relicSlots = tiles.filter(({ type }) => type === "Relic")
    const availableRelics = availableCards.filter(({ type }) => type === "Relic")
    const relics = createEntityList(availableRelics, relicSlots)

    // Spells
    const spellSlots = tiles.filter(({ type }) => type === "Spell")
    const availableSpells = availableCards.filter(({ type }) => type === "Spell")
    const spells = createEntityList(availableSpells, spellSlots)

    setCards([...gems, ...relics, ...spells])
  }

  return (
    <React.Fragment>
      <ExpansionPanel expanded={expanded === 'setup'} onChange={handleExpansion('setup')}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>{marketSetup.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup
            aria-label="Market Setup Options"
            name="marketOptions"
            value={marketSetup.id}
            onChange={handleMarketSetup}
          >
            { renderMarketOptions() }
          </RadioGroup>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <GridListWrapper>
        <GridList
          cellHeight={180}
          className={classes.gridList}
          cols={2}
          spacing={8}
        >
          { createTiles(marketSetup, cards, classes) }
        </GridList>
      </GridListWrapper>
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

export default withStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '51%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  gridList: {
    width: 330,
    height: 450,
  },
  card: {
    minWidth: 30,
  },
}))(Supply)
