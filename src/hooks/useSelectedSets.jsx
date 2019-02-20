import React, { useContext } from 'react'

import Typography from '@material-ui/core/Typography'

import { SetContext } from '../App.jsx'

const useSelectedSets = () => {
  const { configurationOfSets } = useContext(SetContext)
  const selectedSets = Object
    .keys(configurationOfSets)
    .filter( key => configurationOfSets[key])
  const noSetsSelected = selectedSets.length < 1

  const noSelectedSetsComponent = noSetsSelected
    ? (<Typography paragraph>
        There is currently no set selected. Please activate at least one set in the settings.
      </Typography>)
    : null

  return {
    selectedSets,
    noSelectedSetsComponent
  }
}

export default useSelectedSets
