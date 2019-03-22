import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import config from '../../../config'
import { ICreature } from '../../../types'

const MageCard = React.memo(
  ({ mage, classes }: { mage: ICreature; classes: any }) => (
    <Grid item xs={6} md={3}>
      <Card className={classes.card}>
        <CardContent>
          <Typography color="textSecondary">
            {config.DATA[mage.expansion].name}
          </Typography>
          <Typography variant="h6" component="h2">
            {mage.name}
          </Typography>
        </CardContent>
        <i className={`ra ra-lg ra-fluffy-swirl ${classes.cardIcon}`} />
      </Card>
    </Grid>
  )
)

export default MageCard
