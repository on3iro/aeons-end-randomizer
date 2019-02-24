import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import config from 'config'

import CardTypeIcon from './CardTypeIcon'

const getOperationString = (operation, values, threshold) => {
  if (operation === "OR" && values) {
    return values.join("/")
  }

  const thresholdValue = threshold
    ? threshold
    : ""

  return `${operation} ${thresholdValue}`
}

const MarketTile = React.memo(({ tileSetup, index, cards, classes, ...rest }) => {
  const { type, operation, values, threshold } = tileSetup

  return (
    <Grid item xs={6} md={4} {...rest}>
      <Card className={`${classes.card} ${classes[type.toLowerCase()]}`}>
        <CardContent className={classes.cardContent}>
          <Typography className={classes.title} color="textSecondary">
            {type} { getOperationString(operation, values, threshold) }
          </Typography>
          <Typography className={classes.cardName} component="p">
            { cards[index].name !== undefined
                ? cards[index].name
                : "-"
            }
          </Typography>
          <List>
            <ListItem className={classes.cardInfoListItem}>
              <Typography className={classes.label} color="textSecondary">
                Set:
              </Typography>
              <Typography className={classes.infoText} component="span">
                { cards[index].set !== undefined
                    ? config.DATA[cards[index].set].name
                    : "-"
                }
              </Typography>
            </ListItem>
            <ListItem className={classes.cardInfoListItem}>
              <Typography className={classes.label} color="textSecondary">
                Cost:
              </Typography>
              <Typography className={classes.infoText} component="span">
                { cards[index].cost !== undefined
                    ? cards[index].cost
                    : "-"
                }
              </Typography>
            </ListItem>
          </List>
        </CardContent>
        <CardTypeIcon type={type.toLowerCase()} classes={classes} />
      </Card>
    </Grid>
  )
})

export default MarketTile
