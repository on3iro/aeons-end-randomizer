import React, { useContext } from 'react'

import { set as setToDb } from 'idb-keyval'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'

import AoeExpansionPanel from 'components/AoeExpansionPanel'
import AoeExpansionPanelSummary from 'components/AoeExpansionPanelSummary'

import useExpansionHandling from 'hooks/useExpansionHandling'
import { SetConfigurationContext } from 'globalContexts'

import settingStyles from './settingStyles'
import ActiveSets from './ActiveSets'


const Settings = React.memo(({ classes }) => {
  const { expanded, handleExpansion } = useExpansionHandling()

  // Sets
  const { configurationOfSets, sets, setSets } = useContext(SetConfigurationContext)
  const handleChange = (set) => {
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
    <AoeExpansionPanel expanded={expanded === 'sets'} onChange={handleExpansion('sets')}>
      <AoeExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Configured Sets</Typography>
      </AoeExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ActiveSets
          allSetsSelected={allSetsSelected}
          handleSelectAll={handleSelectAll}
          sets={sets}
          configurationOfSets={configurationOfSets}
          handleChange={handleChange}
        />
      </ExpansionPanelDetails>
    </AoeExpansionPanel>
  )
})

export default withStyles(settingStyles)(Settings)
