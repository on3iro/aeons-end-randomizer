import React, { useContext } from 'react'

import { set as setToDb } from 'idb-keyval'

import { withStyles } from '@material-ui/core/styles'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'

import StyledExpansionPanel from '../../StyledExpansionPanel'
import StyledExpansionPanelSummary from '../../StyledExpansionPanelSummary'

import useExpansionHandling from '../../../hooks/useExpansionHandling'
import { SetConfigurationContext } from '../../../globalContexts'

import settingStyles from './settingStyles'
import ActiveSets from './ActiveSets'


const Settings = React.memo(({ classes }: { classes: any }) => {
  const { expanded, handleExpansion } = useExpansionHandling()

  // TODO: globally rename sets to expansion (be careful not to break code referring to indexedDB, so that users are unaffected!)

  // Expansions
  const expansionContext = useContext(SetConfigurationContext)
  if (expansionContext === null) {
    return <Typography paragraph>Error: Set configuration could not be loaded!</Typography>
  }

  const { configurationOfSets, sets, setSets } = expansionContext

  const handleChange = (set: string) => {
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
    <StyledExpansionPanel expanded={expanded === 'sets'} onChange={handleExpansion('sets')}>
      <StyledExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.heading}>Configured Sets</Typography>
      </StyledExpansionPanelSummary>
      <ExpansionPanelDetails>
        <ActiveSets
          allSetsSelected={allSetsSelected}
          handleSelectAll={handleSelectAll}
          setsAndPromos={sets}
          configurationOfSets={configurationOfSets}
          handleChange={handleChange}
        />
      </ExpansionPanelDetails>
    </StyledExpansionPanel>
  )
})

export default withStyles(settingStyles)(Settings)
