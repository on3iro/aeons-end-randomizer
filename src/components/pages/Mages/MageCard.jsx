import React from 'react'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import config from 'config'

const MageCard = React.memo(({mage}) => (
  <Grid item xs={6} md={3}>
    <Card>
      <CardContent>
        <Typography color="textSecondary">{config.DATA[mage.set].name}</Typography>
        <Typography variant="h6" component="h2">{mage.name}</Typography>
      </CardContent>
    </Card>
  </Grid>
))

export default MageCard
