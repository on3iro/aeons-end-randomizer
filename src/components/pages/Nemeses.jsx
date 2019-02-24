import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import useSelectedSets from 'hooks/useSelectedSets'

import ShuffleButton from 'components/ShuffleButton'
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
          ? (
            <React.Fragment>
              <Card>
                <CardContent>
                  <Typography color="textSecondary">{nemesis['set']}</Typography>
                  <Typography variant="h6" component="h2">{nemesis['name']}</Typography>
                </CardContent>
              </Card>

            </React.Fragment>
          )
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
