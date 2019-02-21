import React, { useContext, useState } from 'react'

import { set as setToDb } from 'idb-keyval'

import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '@material-ui/core/FormControl'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography'

import { SetContext } from '../App.jsx'

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
  const { configurationOfSets, sets, setSets } = useContext(SetContext)
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Select active sets</FormLabel>
          <FormControlLabel
            control={
              <Checkbox
                checked={allSetsSelected}
                onChange={handleSelectAll}
                value={ allSetsSelected
                  ? "Deselect All"
                  : "Select All"
                }
              />
            }
            label={ allSetsSelected
              ? "Deselect All"
              : "Select All"
            }
          />
          <FormGroup>
            {
              sets.map(set => (
                <FormControlLabel
                  key={set}
                  control={
                    <Checkbox
                      checked={configurationOfSets[set]}
                      onChange={() => handleChange(set)}
                      value={set}
                    />
                  }
                  label={set}
                />
              ))
            }
          </FormGroup>
        </FormControl>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default withStyles((theme) => ({
   heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '51%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}))(Settings)
