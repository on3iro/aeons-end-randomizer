import React from 'react'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import SupplyList, { OptionalTile } from 'components/molecules/SupplyList'

type Props = {
  tiles: OptionalTile[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Supply = ({ tiles, expansionKey, expansionHandler, expanded }: Props) => (
  <ExpansionPanel summary="Supply">
    <SupplyList tiles={tiles} />
  </ExpansionPanel>
)

export default React.memo(Supply)
