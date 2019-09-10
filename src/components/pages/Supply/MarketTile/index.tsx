import React from 'react'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'

import * as types from '../../../../types'

import { getOperationString } from '../../../../Redux/helpers'

import Card from './Card'
import CardContent from './CardContent'
import CardName from './CardName'
import CardTypeIcon from './CardTypeIcon'
import CostInfo from './CostInfo'
import CostOperation from './CostOperation'
import ExpansionInfo from './ExpansionInfo'

type Props = {
  marketTile: types.MarketTile
}

const MarketTile = React.memo(({ marketTile, ...rest }: Props) => {
  const { type, operation, values, threshold } = marketTile

  return (
    <Grid item xs={6} md={4} {...rest}>
      <Card type={type.toLowerCase()}>
        <CardContent>
          <CostOperation color="textSecondary">
            {type} {getOperationString(operation, values, threshold)}
          </CostOperation>
          <CardName component="p">
            {types.isCard(marketTile) ? marketTile.name : '-'}
          </CardName>
          <List>
            <ExpansionInfo card={marketTile} />
            <CostInfo card={marketTile} />
          </List>
        </CardContent>
        <CardTypeIcon type={type.toLowerCase()} />
      </Card>
    </Grid>
  )
})

MarketTile.displayName = 'MarketTile'

export default MarketTile
