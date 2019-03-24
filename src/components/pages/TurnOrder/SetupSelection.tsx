import React from 'react'
import { connect } from 'react-redux'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import config from '../../../config'
import useExpansionHandling from '../../../hooks/useExpansionHandling'
import { ITurnOrderSetup } from '../../../types'
import { RootState } from '../../../Redux/Store'
import * as TurnOrderConfiguration from '../../../Redux/Store/TurnOrder/Configuration'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'

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

  return (
    <StyledExpansionPanel
      expanded={expanded === 'setup'}
      onChange={createExpansionHandler('setup')}
    >
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{selectedSetup.name}</Typography>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>
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
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SetupSelection)
