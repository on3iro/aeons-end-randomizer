import React from 'react'

import Grid from '@material-ui/core/Grid'

import * as types from '../../../types'

import ListWrapper from './ListWrapper'
import MarketTile from './MarketTile'

const renderTiles = (tiles: ReadonlyArray<types.MarketTile>) => {
  return tiles.map((marketTile, i) => (
    <MarketTile key={i} marketTile={marketTile} />
  ))
}

type Props = {
  tiles: ReadonlyArray<types.MarketTile>
}

const SupplyList = React.memo(({ tiles }: Props) => (
  <ListWrapper>
    <Grid container spacing={16}>
      {renderTiles(tiles)}
    </Grid>
  </ListWrapper>
))

SupplyList.displayName = 'SupplyList'

export default SupplyList
