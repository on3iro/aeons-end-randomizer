import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
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
    <Grid item xs={6} md={4} {...rest}>
      <Card className={`${classes.card} ${classes[type.toLowerCase()]}`}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary">
            {type} { getOperationString(operation, values, threshold) }
          </Typography>
          <Typography className={classes.cardName} component="p">
            { cards[index].name !== undefined ? cards[index].name : "-" }
          </Typography>
          <List>
            <ListItem className={classes.cardInfoListItem}>
              <Typography className={classes.label} color="textSecondary">
                Set:
              </Typography>
              <Typography className={classes.infoText} component="span">
                { cards[index].set !== undefined ? cards[index].set : "-" }
              </Typography>
            </ListItem>
            <ListItem className={classes.cardInfoListItem}>
              <Typography className={classes.label} color="textSecondary">
                Cost:
              </Typography>
              <Typography className={classes.infoText} component="span">
                { cards[index].cost !== undefined ? cards[index].cost : "-" }
              </Typography>
            </ListItem>
          </List>
        </CardContent>
        { (type.toLowerCase() === 'gem') ? <i className={`ra ra-lg ra-crystals ${classes.cardIcon} ${classes[type.toLowerCase() + 'Icon']}`} /> : ''}
        { (type.toLowerCase() === 'relic') ? <i className={`ra ra-lg ra-crystal-wand ${classes.cardIcon} ${classes[type.toLowerCase() + 'Icon']}`} /> : ''}
        { (type.toLowerCase() === 'spell') ? <i className={`ra ra-lg ra-scroll-unfurled ${classes.cardIcon} ${classes[type.toLowerCase() + 'Icon']}`} /> : ''}
      </Card>
    </Grid>
  )
}

export default MarketTile
