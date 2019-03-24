import React from 'react'
import { connect } from 'react-redux'

import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

import config from '../../../config'
import useExpansionHandling from '../../../hooks/useExpansionHandling'
import { ITurnOrderSetup } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderConfiguration from '../../../Redux/Store/TurnOrder/Configuration'

import ExpansionPanel from '../../ExpansionPanel'

const renderSetupOptions = () =>
  Object.values(config.TURNORDERSETUPS).map(setup => (
    <FormControlLabel
      key={setup.id}
      value={setup.id}
      control={<Radio />}
      label={setup.name}
    />
  ))

const mapStateToProps = (state: RootState) => ({
  selectedSetup: TurnOrderConfiguration.selectors.getSelectedSetup(state),
})

const mapDispatchToProps = {
  selectSetup: TurnOrderConfiguration.actions.selectSetup,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const SetupSelection = React.memo(({ selectSetup, selectedSetup }: Props) => {
  const {
    expanded,
    createExpansionHandler,
    setExpanded,
  } = useExpansionHandling()

  const expansionKey = 'setup'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      classes={{}}
      expanded={expanded}
      expansionKey={expansionKey}
      expansionHandler={expansionHandler}
      summary={selectedSetup.name}
    >
      <RadioGroup
        aria-label="Players"
        name="turnOrderOptions"
        value={selectedSetup.id}
        onChange={(event: React.ChangeEvent<any>) => {
          selectSetup(event.currentTarget.value)
          setExpanded(false)
        }}
      >
        {renderSetupOptions()}
      </RadioGroup>
    </ExpansionPanel>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
