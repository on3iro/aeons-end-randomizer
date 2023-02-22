import React from 'react'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import SupplyList, { OptionalTile } from '../../../../molecules/SupplyList'

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
  <ExpansionPanel
    summary="Supply"
    expansionKey={expansionKey}
    expansionHandler={expansionHandler}
    expanded={expanded}
    data-test="supply"
  >
    <SupplyList
      tiles={tiles.map((tile) => {
        return {
          ...tile,
          canBeLocked: false,
        }
      })}
    />
  </ExpansionPanel>
)
Supply.displayName = 'Supply'

export default React.memo(Supply)
