import React from 'react'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

import config from '../../../config'
import { Slot, ICard, isCard, Operation } from '../../../types'

import CardTypeIcon from './CardTypeIcon'

import { getOperationString } from '../../../Redux/helpers'

const MarketTile = React.memo(
  ({
    tileSetup,
    card,
    classes,
    ...rest
  }: {
    tileSetup: Slot
    card: Slot | ICard
    classes: any
  }) => {
    const { type, operation, values, threshold } = tileSetup

    return (
      <Grid item xs={6} md={4} {...rest}>
        <Card className={`${classes.card} ${classes[type.toLowerCase()]}`}>
          <CardContent className={classes.cardContent}>
            <Typography className={classes.title} color="textSecondary">
              {type} {getOperationString(operation, values, threshold)}
            </Typography>
            <Typography className={classes.cardName} component="p">
              {isCard(card) ? card.name : '-'}
            </Typography>
            <List>
              <ListItem className={classes.cardInfoListItem}>
                <Typography className={classes.label} color="textSecondary">
                  Set:
                </Typography>
                <Typography className={classes.infoText} component="span">
                  {isCard(card) && config.DATA[card.expansion] !== undefined
                    ? config.DATA[card.expansion].name
                    : '-'}
                </Typography>
              </ListItem>
              <ListItem className={classes.cardInfoListItem}>
                <Typography className={classes.label} color="textSecondary">
                  Cost:
                </Typography>
                <Typography className={classes.infoText} component="span">
                  {isCard(card) ? card.cost : '-'}
                </Typography>
              </ListItem>
            </List>
          </CardContent>
          <CardTypeIcon type={type.toLowerCase()} classes={classes} />
        </Card>
      </Grid>
    )
  }
)

export default MarketTile
