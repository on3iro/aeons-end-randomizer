import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import { MODES, Mode } from '../../../types'
import { RootState, actions, selectors } from '../../../Redux/Store'

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
  mode: selectors.TurnOrder.Configuration.getMode(state),
})

const mapDispatchToProps = {
  setMode: actions.TurnOrder.Configuration.setMode,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const ModeSelection = React.memo(({ classes, mode, setMode }: Props) => (
  <Card className={classes.cardDeck}>
    <CardContent>
      <FormLabel>Mode</FormLabel>
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
