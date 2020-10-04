import React from 'react'
import Grid from '@material-ui/core/Grid'

import * as types from 'aer-types/types'

import TreasureTile from './TreasureTile'
import TreasureGridWrapper from './TreasureGridWrapper'

const renderTreasures = (treasures: types.Treasure[]) =>
  treasures.map((treasure) => (
    <TreasureTile key={treasure.id} treasure={treasure} />
  ))

type Props = {
  treasures: types.Treasure[]
}

const TreasureList = ({ treasures }: Props) => (
  <TreasureGridWrapper>
    <Grid container spacing={16}>
      {renderTreasures(treasures)}
    </Grid>
  </TreasureGridWrapper>
)

export default React.memo(TreasureList)
