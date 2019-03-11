import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import { MODES, Mode } from './hooks/useTurnOrderSetup'

const renderModeOptions = () => MODES.map(mode => (
  <FormControlLabel
    key={mode}
    value={mode}
    control={<Radio />}
    label={mode}
  />
))

const ModeSelection = React.memo(({
  classes,
  turnOrderMode,
  handleSetupChange,
  turnOrderSetupId
}: {
  classes: any,
  turnOrderMode: Mode,
  handleSetupChange: (setupId: string, mode: Mode) => void,
  turnOrderSetupId: string
}) => (
  <Card className={classes.cardDeck}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>Mode</Typography>
      <RadioGroup
        aria-label='mode'
        name='turnOrderMode'
        value={turnOrderMode}
        onChange={
          (event: React.ChangeEvent<any>) => handleSetupChange(turnOrderSetupId, event.currentTarget.value)
        }
      >
       { renderModeOptions() }
      </RadioGroup>
    </CardContent>
  </Card>
))

export default ModeSelection
