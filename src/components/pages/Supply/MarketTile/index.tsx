import React from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'

import { Slot, ICard, isCard } from '../../../../types'

import { getOperationString } from '../../../../Redux/helpers'

import Card from './Card'
import CardContent from './CardContent'
import CardName from './CardName'
import CardTypeIcon from './CardTypeIcon'
import CostInfo from './CostInfo'
import CostOperation from './CostOperation'
import ExpansionInfo from './ExpansionInfo'

type Props = {
  tileSetup: Slot
  card: Slot | ICard
}

const MarketTile = React.memo(({ tileSetup, card, ...rest }: Props) => {
  const { type, operation, values, threshold } = tileSetup

  return (
    <Grid item xs={6} md={4} {...rest}>
      <Card type={type.toLowerCase()}>
        <CardContent>
          <CostOperation color="textSecondary">
            {type} {getOperationString(operation, values, threshold)}
          </CostOperation>
          <CardName component="p">{isCard(card) ? card.name : '-'}</CardName>
          <List>
            <ExpansionInfo card={card} />
            <CostInfo card={card} />
          </List>
        </CardContent>
        <CardTypeIcon type={type.toLowerCase()} />
      </Card>
    </Grid>
  )
})

MarketTile.displayName = 'MarketTile'

export default MarketTile
