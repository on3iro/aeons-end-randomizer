import React from 'react'

import Grid from '@material-ui/core/Grid'
import MageGridWrapper from './MageGridWrapper'

import MageCard from './MageCard'

const MageList = React.memo(({ mages }) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {
        mages.map(mage => (
          <MageCard mage={mage} key={mage.name}/>
        ))
      }
    </Grid>
  </MageGridWrapper>
))

export default MageList
