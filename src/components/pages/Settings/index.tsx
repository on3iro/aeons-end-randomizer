import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'

import useExpansionHandling from '../../../hooks/useExpansionHandling'

import settingStyles from './settingStyles'
import ActiveSets from './ActiveSets'

const Settings = React.memo(({ classes }: { classes: any }) => {
  const { expanded, createExpansionHandler } = useExpansionHandling()

  return (
    <StyledExpansionPanel
      expanded={expanded === 'sets'}
      onChange={createExpansionHandler('sets')}
    >
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Expansions</Typography>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ActiveSets />
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
})

export default withStyles(settingStyles)(Settings)
