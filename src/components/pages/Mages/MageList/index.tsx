import React from 'react'

import { ICreature } from '../../../../types'

import MageGridWrapper from './MageGridWrapper'
import MageTile from '../MageTile'

import Grid from '@material-ui/core/Grid'

type Props = {
  mages: ReadonlyArray<ICreature>
}

const MageList = React.memo(({ mages }: Props) => (
  <MageGridWrapper>
    <Grid container spacing={16}>
      {mages.map(mage => (
        <MageTile mage={mage} key={mage.name} />
      ))}
    </Grid>
  </MageGridWrapper>
))

MageList.displayName = 'MageList'

export default MageList
