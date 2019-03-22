import React from 'react'

import Grid from '@material-ui/core/Grid'

import { IMarketSetup, ICard, Slot } from '../../../types'

import ListWrapper from './ListWrapper'
import MarketTile from './MarketTile'

const renderTiles = (
  marketSetup: IMarketSetup,
  cards: ReadonlyArray<Slot | ICard>,
  classes: any
) => {
  return marketSetup.tiles.map((tileSetup, i) => (
    <MarketTile
      key={i}
      tileSetup={tileSetup}
      card={cards[i]}
      classes={classes}
    />
  ))
}

const SupplyList = React.memo(
  ({
    marketSetup,
    cards,
    classes,
  }: {
    marketSetup: IMarketSetup
    cards: ReadonlyArray<Slot | ICard>
    classes: any
  }) => (
    <ListWrapper>
      <Grid container spacing={16}>
        {renderTiles(marketSetup, cards, classes)}
      </Grid>
    </ListWrapper>
  )
)

export default SupplyList
