import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import GridListTile from '@material-ui/core/GridListTile'
import Typography from '@material-ui/core/Typography'

const getOperationString = (operation, values, threshold) => {
  if (operation === "OR" && values) {
    return values.join("/")
  }

  const thresholdValue = threshold
    ? threshold
    : ""

  return `${operation} ${thresholdValue}`
}

const MarketTile = ({ tileSetup, index, cards, classes, ...rest }) => {
  const { type, operation, values, threshold } = tileSetup

  return (
    <GridListTile cols={1} {...rest}>
      <Card className={classes.card} style={{ height: '145px' }}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {type} { getOperationString(operation, values, threshold) }
          </Typography>
          <Typography component="p">
            { cards[index].name !== undefined ? cards[index].name : "-" }
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Set: { cards[index].set !== undefined ? cards[index].set : "-" }
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Cost: { cards[index].cost !== undefined ? cards[index].cost : "-" }
          </Typography>
        </CardContent>
      </Card>
    </GridListTile>
  )
}

export default MarketTile
