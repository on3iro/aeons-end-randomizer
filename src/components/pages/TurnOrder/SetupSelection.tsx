import React from 'react'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import config from '../../../config'
import { ITurnOrderPlayerCount } from '../../../types'
import { RootState, actions, selectors } from '../../../Redux/Store'

const renderSetupOptions = (selectedPlayerCount: ITurnOrderPlayerCount) =>
  Object.values(config.TURNORDERSETUPS[selectedPlayerCount.id].variations).map(
    setup => (
      <FormControlLabel
        key={setup.id}
        value={setup.id}
        control={<Radio />}
        label={setup.name}
      />
    )
  )

const mapStateToProps = (state: RootState) => ({
  selectedPlayerCount: selectors.TurnOrder.Configuration.getSelectedPlayerCount(
    state
  ),
  selectedSetup: selectors.TurnOrder.Configuration.getSelectedSetup(state),
})

const mapDispatchToProps = {
  selectSetup: actions.TurnOrder.Configuration.selectSetup,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    classes: any
  }

const SetupSelection = React.memo(
  ({ classes, selectSetup, selectedSetup, selectedPlayerCount }: Props) => (
    <Card className={classes.setupCard}>
      <CardContent>
        <FormControl component={'fieldset' as 'div'}>
          <FormLabel>Player Cards Variants</FormLabel>
          <RadioGroup
            aria-label="Players Variant"
            name="turnOrderOptions"
            value={selectedSetup.id}
            onChange={(event: React.ChangeEvent<any>) => {
              selectSetup(event.currentTarget.value)
            }}
          >
            {renderSetupOptions(selectedPlayerCount)}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  )
)

SetupSelection.displayName = 'SetupSelection'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
