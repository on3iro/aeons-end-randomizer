import React from 'react'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import Typography from '@material-ui/core/Typography'

import config from '../../../config'
import useExpansionHandling from '../../../hooks/useExpansionHandling'
import { ITurnOrderSetup } from '../../../config/types'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'
import { Mode } from './hooks/useTurnOrderSetup'

const renderSetupOptions = () => Object.values(config.TURNORDERSETUPS).map(setup => (
  <FormControlLabel
    key={setup.id}
    value={setup.id}
    control={<Radio />}
    label={setup.name}
  />
))

const SetupSelection = React.memo(({
  turnOrderSetup,
  handleSetupChange,
  turnOrderMode
}: {
  turnOrderSetup: ITurnOrderSetup,
  handleSetupChange: (setupId: string, mode: Mode) => void,
  turnOrderMode: Mode
}) => {
  const { expanded, handleExpansion, setExpanded } = useExpansionHandling()

  return (
    <StyledExpansionPanel
      expanded={expanded === 'setup'}
      onChange={handleExpansion('setup')}
    >
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{turnOrderSetup.name}</Typography>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>
        <RadioGroup
          aria-label='Players'
          name='turnOrderOptions'
          value={turnOrderSetup.id}
          onChange={
            (event: React.ChangeEvent<any>) => {
              handleSetupChange(event.currentTarget.value, turnOrderMode)
              setExpanded(false)
            }
          }
        >
          {renderSetupOptions()}
        </RadioGroup>
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  )}
)

export default SetupSelection
