import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import { MODES, Mode } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderConfiguration from '../../../Redux/Store/TurnOrder/Configuration'

const renderModeOptions = () =>
  MODES.map(mode => (
    <FormControlLabel
      key={mode}
      value={mode}
      control={<Radio />}
      label={mode}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  mode: TurnOrderConfiguration.selectors.getMode(state),
})

const mapDispatchToProps = {
  setMode: TurnOrderConfiguration.actions.setMode,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const ModeSelection = React.memo(({ classes, mode, setMode }: Props) => (
  <Card className={classes.cardDeck}>
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        Mode
      </Typography>
      <RadioGroup
        aria-label="mode"
        name="turnOrderMode"
        value={mode}
        onChange={(event: React.ChangeEvent<any>) =>
          setMode(event.currentTarget.value)
        }
      >
        {renderModeOptions()}
      </RadioGroup>
    </CardContent>
  </Card>
))

ModeSelection.displayName = 'ModeSelection'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModeSelection)
