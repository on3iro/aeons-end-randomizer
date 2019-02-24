import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ShuffleButton from 'components/ShuffleButton.jsx'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'

import AoeExpansionPanel from 'components/AoeExpansionPanel'
import AoeExpansionPanelSummary from 'components/AoeExpansionPanelSummary'

import useExpansionHandling from 'hooks/useExpansionHandling'
import config from 'config'

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

const TurnOrderSetup = ({
  turnOrderSetup,
  startGame,
  chooseSetup
}) => {
  const { expanded, handleExpansion, setExpanded } = useExpansionHandling()
  const handleSetupChange = (event) => {
    chooseSetup(event)
    setExpanded(false)
  }

  return (
    <React.Fragment>
      <AoeExpansionPanel expanded={expanded === 'setup'} onChange={handleExpansion('setup')}>
        <AoeExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{turnOrderSetup.name}</Typography>
        </AoeExpansionPanelSummary>
        <ExpansionPanelDetails>
          <RadioGroup
            aria-label='Players'
            name='turnOrderOptions'
            value={turnOrderSetup.id}
            onChange={handleSetupChange}>
            {renderSetupOptions()}
          </RadioGroup>
        </ExpansionPanelDetails>
      </AoeExpansionPanel>
      { renderTurnOrderSetups(turnOrderSetup) }
      <ShuffleButton color='primary' variant='extended' onClick={startGame}>
        Start Game
      </ShuffleButton>
    </React.Fragment>
  )
}

export default TurnOrderSetup
