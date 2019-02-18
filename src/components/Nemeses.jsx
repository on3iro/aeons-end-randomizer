import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useSelectedSets from '../hooks/useSelectedSets.jsx'
import config from '../config'

import ShuffleButton from './ShuffleButton.jsx'


const getListOfAvailableNemesis = (selectedSets) => selectedSets.reduce(
  (acc, set) => {
    return [ ...acc, ...config.DATA[set].nemeses ]
  },[]
)

const getRandomNemesis = (availableNemeses) => availableNemeses[Math.floor(Math.random() * availableNemeses.length)]

const Nemeses = () => {
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const [nemesis, setNemesis] = useState(null)

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const availableNemeses = getListOfAvailableNemesis(selectedSets)
  const handleShuffle = () => {
    setNemesis(getRandomNemesis(availableNemeses))
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
