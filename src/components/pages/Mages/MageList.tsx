import React from 'react'

import Grid from '@material-ui/core/Grid'
import MageGridWrapper from './MageGridWrapper'
import { withStyles } from '@material-ui/core/styles'

import { ICreature } from '../../../types'

import MageCard from './MageCard'
import mageStyles from './mageStyles'

type Props = {
  mages: ReadonlyArray<ICreature>
  classes: any
}

const MageList = React.memo(({ mages, classes }: Props) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {mages.map(mage => (
        <MageCard classes={classes} mage={mage} key={mage.name} />
      ))}
    </Grid>
  </MageGridWrapper>
))

MageList.displayName = 'MageList'

export default withStyles(mageStyles)(MageList)
