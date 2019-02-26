import React, { useState } from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import useSelectedExpansions from '../../../hooks/useSelectedSets'
import config from '../../../config'
import { ICreature } from '../../../config/types'

import ShuffleButton from '../../ShuffleButton'
import {
  getListOfAvailableEntity,
  getRandomEntity
} from '../helpers'

import nemesesStyles from './nemesesStyles'

const Nemeses = React.memo(({classes}: { classes: any }) => {
  const { selectedSets, NoSelectedExpansionsComponent } = useSelectedExpansions()
  const [nemesis, setNemesis] = useState<ICreature | null>(null)

  if (NoSelectedExpansionsComponent) {
    return <NoSelectedExpansionsComponent />
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
                  <Typography color="textSecondary">{config.DATA[nemesis.expansion].name}</Typography>
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
