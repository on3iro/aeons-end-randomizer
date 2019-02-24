import React from 'react'

import Grid from '@material-ui/core/Grid'
import MageGridWrapper from './MageGridWrapper'
import { withStyles } from '@material-ui/core/styles'

import MageCard from './MageCard'
import mageStyles from './mageStyles'

const MageList = React.memo(({ mages, classes }) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {
        mages.map(mage => (
          <MageCard
            classes={classes}
            mage={mage}
            key={mage.name}
          />
        ))
      }
    </Grid>
  </MageGridWrapper>
))

export default withStyles(mageStyles)(MageList)
