import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'

import useSelectedSets from '../hooks/useSelectedSets.jsx'

import ShuffleButton from './ShuffleButton.jsx'
import {
  getListOfAvailableEntity,
  getRandomEntity
} from './helpers.js'


const Nemeses = () => {
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const [nemesis, setNemesis] = useState(null)

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const availableNemeses = getListOfAvailableEntity(selectedSets, "nemeses")
  const handleShuffle = () => {
    setNemesis(getRandomEntity(availableNemeses))
  }

  return (
    <React.Fragment>
      {
        nemesis
          ? <Typography>{nemesis['name']}, {nemesis['set']}</Typography>
          : <Typography>Tab button to spawn new nemesis!</Typography>
      }
      <ShuffleButton
        onClick={handleShuffle}
        color="primary" 
        variant="extended"
      >
        Open Breach
      </ShuffleButton>
    </React.Fragment>
  )
}

export default Nemeses
