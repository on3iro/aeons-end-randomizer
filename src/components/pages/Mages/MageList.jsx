import React from 'react'

import Grid from '@material-ui/core/Grid'
import MageGridWrapper from './MageGridWrapper'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

const MageList = ({ mages }) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {
        mages.map(mage => (
          <Grid item xs={6} md={3} key={mage.name}>
            <Card>
              <CardContent>
                <Typography color="textSecondary">{mage.set}</Typography>
                <Typography variant="h6" component="h2">{mage.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  </MageGridWrapper>
)

export default MageList
