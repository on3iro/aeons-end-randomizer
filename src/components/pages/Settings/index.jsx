import React, { useContext, useState } from 'react'

import { set as setToDb } from 'idb-keyval'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'

import { SetConfigurationContext } from 'globalContexts'

import settingStyles from './settingStyles'
import ActiveSets from './ActiveSets'


const Settings = ({ classes }) => {
  // Expansion handling
  const [ expanded, setExpanded ] = useState(null)
  const handleExpansion = (panel) => (event, expanded) => {
    const panelExpanded = expanded
      ? panel
      : false
    setExpanded(panelExpanded)
  }

  // Sets
  const { configurationOfSets, sets, setSets } = useContext(SetConfigurationContext)
  const handleChange= (set) => {
    const newSets = { ...configurationOfSets, [set]: !configurationOfSets[set] }
    setSets(newSets)
    setToDb('sets', newSets)
  }

  const allSetsSelected = Object.values(configurationOfSets).every(val => val === true)
  const handleSelectAll = () => {
    const newSets = sets.reduce((acc, set) => {
      return { ...acc, [set]: !allSetsSelected }
    }, {})
    setSets(newSets)
    setToDb('sets', newSets)
  }

  return (
    <ExpansionPanel expanded={expanded === 'sets'} onChange={handleExpansion('sets')}>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Configured Sets</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ActiveSets
          allSetsSelected={allSetsSelected}
          handleSelectAll={handleSelectAll}
          sets={sets}
          configurationOfSets={configurationOfSets}
          handleChange={handleChange}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default withStyles(settingStyles)(Settings)
