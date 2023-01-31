import React from 'react'

import Grid from '@material-ui/core/Grid'
import { actions } from 'Redux/Store'

import * as types from 'aer-types/types'

import ListWrapper from './ListWrapper'
import MarketTile from '../MarketTile'
import { LockedCard } from 'Redux/Store/Randomizer/Supply/LockedCards'

// We don't want to rely on any data here (expcept the type).
// Therefore we define a markettile where pretty much every property is optional.
// To eliminate resulting errors we check for issues inside the respective sub-components
// TODO this needs some cleanup
export type OptionalTile = {
  id?: string | number
  type: types.CardType
  expansion?: string
  name?: string
  cost?: number
  operation?: types.Operation
  threshold?: number
  values?: Array<number>
  canBeLocked?: boolean
}

const renderTiles = (
  tiles: ReadonlyArray<OptionalTile>,
  lockedCards?: ReadonlyArray<LockedCard>,
  toggleLock?: typeof actions.Randomizer.Supply.LockedCards.toggleLock
) => {
  return tiles.map((marketTile, i) => (
    <MarketTile
      key={i}
      marketTile={marketTile}
      lockedCards={lockedCards}
      toggleLock={toggleLock}
    />
  ))
}

export type Props = {
  lockedCards?: ReadonlyArray<LockedCard>
  toggleLock?: typeof actions.Randomizer.Supply.LockedCards.toggleLock
  tiles: ReadonlyArray<OptionalTile>
}

const SupplyList = ({ tiles, lockedCards, toggleLock }: Props) => (
  <ListWrapper>
    <Grid container spacing={16}>
      {renderTiles(tiles, lockedCards, toggleLock)}
    </Grid>
  </ListWrapper>
)

export default React.memo(SupplyList)
