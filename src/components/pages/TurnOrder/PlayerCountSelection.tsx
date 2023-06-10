import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import AERData from 'aer-data/src/index'
import { RootState, actions, selectors } from 'Redux/Store'

const renderPlayerCountOptions = () =>
  Object.values(AERData.turnordersetups).map((playerCount) => (
    <FormControlLabel
      key={playerCount.id}
      value={playerCount.id}
      control={<Radio />}
      label={playerCount.name}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  selectedPlayerCount: selectors.TurnOrder.Configuration.getSelectedPlayerCount(
    state
  ),
})

const mapDispatchToProps = {
  selectPlayerCount: actions.TurnOrder.Configuration.selectPlayerCount,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const PlayerCountSelection = ({
  selectPlayerCount,
  selectedPlayerCount,
}: Props) => (
  <Card>
    <CardContent>
      <FormControl component={'fieldset' as 'div'}>
        <FormLabel>Amount of Players</FormLabel>
        <RadioGroup
          aria-label="Players"
          name="turnOrderPlayerCountOptions"
          value={selectedPlayerCount.id}
          onChange={(event: React.ChangeEvent<any>) => {
            selectPlayerCount(event.currentTarget.value)
          }}
          row={true}
        >
          {renderPlayerCountOptions()}
        </RadioGroup>
      </FormControl>
    </CardContent>
  </Card>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(PlayerCountSelection))
