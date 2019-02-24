import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import ShuffleButton from 'components/ShuffleButton.jsx'
import Typography from '@material-ui/core/Typography'

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
}) => (
  <React.Fragment>
    <RadioGroup
      aria-label='Players'
      name='turnOrderOptions'
      value={turnOrderSetup.id}
      onChange={chooseSetup}>
      {renderSetupOptions()}
    </RadioGroup>
    { renderTurnOrderSetups(turnOrderSetup) }
    <ShuffleButton color='primary' variant='extended' onClick={startGame}>
     Start Game
    </ShuffleButton>
  </React.Fragment>
)

export default TurnOrderSetup
