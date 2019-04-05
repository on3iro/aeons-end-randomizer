import React from 'react'

import Grid from '@material-ui/core/Grid'

import { IMarketSetup, ICard, Slot } from '../../../types'

import ListWrapper from './ListWrapper'
import MarketTile from './MarketTile'

const renderTiles = (
  marketSetup: IMarketSetup,
  cards: ReadonlyArray<Slot | ICard>
) => {
  return marketSetup.tiles.map((tileSetup, i) => (
    <MarketTile key={i} tileSetup={tileSetup} card={cards[i]} />
  ))
}

type Props = {
  marketSetup: IMarketSetup
  cards: ReadonlyArray<Slot | ICard>
}

const SupplyList = React.memo(({ marketSetup, cards }: Props) => (
  <ListWrapper>
    <Grid container spacing={16}>
      {renderTiles(marketSetup, cards)}
    </Grid>
  </ListWrapper>
))

SupplyList.displayName = 'SupplyList'

export default SupplyList
