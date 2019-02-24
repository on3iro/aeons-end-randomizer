import React from 'react'

import Grid from '@material-ui/core/Grid'

import ListWrapper from './ListWrapper'
import MarketTile from './MarketTile'

const renderTiles = (marketSetup, cards, classes) => {
  return marketSetup.tiles.map(
    (tileSetup, i) => (
      <MarketTile
        key={i}
        tileSetup={tileSetup}
        index={i}
        cards={cards}
        classes={classes}
      />
    )
  )
}

const SupplyList = ({marketSetup, cards, classes}) => (
  <ListWrapper>
    <Grid
      container
      spacing={16}
    >
      { renderTiles(marketSetup, cards, classes) }
    </Grid>
  </ListWrapper>
)

export default SupplyList
