import React from 'react'

import GridList from '@material-ui/core/GridList'

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
        style={{ height: '150px' }}
      />
    )
  )
}

const SupplyList = ({marketSetup, cards, classes}) => (
  <ListWrapper>
    <GridList
      cellHeight={180}
      className={classes.gridList}
      cols={2}
      spacing={8}
    >
      { renderTiles(marketSetup, cards, classes) }
    </GridList>
  </ListWrapper>
)

export default SupplyList
