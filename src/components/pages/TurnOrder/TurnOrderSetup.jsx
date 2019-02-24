import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ShuffleButton from 'components/ShuffleButton.jsx'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import { withStyles } from '@material-ui/core/styles'

import StyledExpansionPanel from 'components/StyledExpansionPanel'
import StyledExpansionPanelSummary from 'components/StyledExpansionPanelSummary'

import useExpansionHandling from 'hooks/useExpansionHandling'
import config from 'config'

import turnOrderStyles from './turnOrderStyles'

const renderSetupOptions = () => Object.values(config.TURNORDERSETUPS).map(setup => (
  <FormControlLabel
    key={setup.id}
    value={setup.id}
    control={<Radio />}
    label={setup.name} />
))

const renderTurnOrderSetups = (turnOrderSetup) => turnOrderSetup
  .turnOrderCards
  .map(
    (card, i) => (
      <Typography component='p' key={i}>
        {card.name}
      </Typography>
    )
  )

const TurnOrderSetup = React.memo(({
  turnOrderSetup,
  startGame,
  chooseSetup,
  classes
}) => {
  const { expanded, handleExpansion, setExpanded } = useExpansionHandling()
  const handleSetupChange = (event) => {
    chooseSetup(event)
    setExpanded(false)
  }

  return (
    <React.Fragment>
      <StyledExpansionPanel expanded={expanded === 'setup'} onChange={handleExpansion('setup')}>
        <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{turnOrderSetup.name}</Typography>
        </StyledExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup
            aria-label='Players'
            name='turnOrderOptions'
            value={turnOrderSetup.id}
            onChange={handleSetupChange}>
            {renderSetupOptions()}
          </RadioGroup>
        </ExpansionPanelDetails>
      </StyledExpansionPanel>
      <Card className={classes.cardDeck}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>Turn order cards</Typography>
          { renderTurnOrderSetups(turnOrderSetup) }
        </CardContent>
      </Card>
      <ShuffleButton color='primary' variant='extended' onClick={startGame}>
        Start Game
      </ShuffleButton>
    </React.Fragment>
  )
})

export default withStyles(turnOrderStyles)(TurnOrderSetup)
