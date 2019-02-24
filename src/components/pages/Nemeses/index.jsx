import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useSelectedSets from 'hooks/useSelectedSets'
import config from 'config'

import ShuffleButton from 'components/ShuffleButton'
import {
  getListOfAvailableEntity,
  getRandomEntity
} from '../helpers.js'

import nemesesStyles from './nemesesStyles'

const Nemeses = React.memo(({classes}) => {
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
              <Card className={classes.card}>
                <CardContent>
                  <Typography color="textSecondary">{config.DATA[nemesis['set']].name}</Typography>
                  <Typography variant="h6" component="h2">{nemesis['name']}</Typography>
                </CardContent>
                <i className={`ra ra-lg ra-broken-skull ${classes.cardIcon}`} />
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
})

export default withStyles(nemesesStyles)(Nemeses)
