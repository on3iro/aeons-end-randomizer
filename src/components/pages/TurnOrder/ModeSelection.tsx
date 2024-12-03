import React from 'react'
import { connect } from 'react-redux'

import CardContent from '@material-ui/core/CardContent'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import { MODES } from 'aer-types/types'
import { RootState, actions, selectors } from '../../../Redux/Store'

import Card from '../../atoms/Card'

const renderModeOptions = () =>
  MODES.map((mode) => (
    <FormControlLabel
      key={mode}
      value={mode}
      control={<Radio />}
      label={mode}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  mode: selectors.TurnOrder.Configuration.getMode(state),
  friend: selectors.TurnOrder.Configuration.getFriend(state),
  foe: selectors.TurnOrder.Configuration.getFoe(state),
})

const mapDispatchToProps = {
  setMode: actions.TurnOrder.Configuration.setMode,
  setFriend: actions.TurnOrder.Configuration.setFriend,
  setFoe: actions.TurnOrder.Configuration.setFoe,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ModeSelection = ({ mode, setMode, friend, setFriend, foe, setFoe }: Props) => (
  <Card>
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
      <FormControlLabel
        control={
          <Checkbox
            id="friend"
            checked={friend}
            onChange={() => setFriend(!friend)}
          />
        }
        label="Use Friend"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="foe"
            checked={foe}
            onChange={() => setFoe(!foe)}
          />
        }
        label="Use Foe"
      />
    </CardContent>
  </Card>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ModeSelection))
