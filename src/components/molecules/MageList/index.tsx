import React from 'react'

import { Mage } from 'aer-types/types'

import MageGridWrapper from './MageGridWrapper'
import MageTile from './MageTile'

import Grid from '@material-ui/core/Grid'

type Props = {
  mages: ReadonlyArray<Mage | undefined>
}

const MageList = ({ mages }: Props) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {mages
        .filter((m): m is Mage => !!m)
        .map((mage, index) => (
          <MageTile mage={mage} key={mage.id} playerNumber={index + 1} />
        ))}
    </Grid>
  </MageGridWrapper>
)

export default React.memo(MageList)
