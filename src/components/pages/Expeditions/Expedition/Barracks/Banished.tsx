import React from 'react'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import SupplyList, { OptionalTile } from '../../../../molecules/SupplyList'

type Props = {
  banishedCards: OptionalTile[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Banished = React.memo(
  ({ banishedCards, expansionKey, expansionHandler, expanded }: Props) => (
    <React.Fragment>
      {banishedCards.length > 0 && (
        <ExpansionPanel
          summary="Banished"
          expansionKey={expansionKey}
          expansionHandler={expansionHandler}
          expanded={expanded}
        >
          <SupplyList tiles={banishedCards} />
        </ExpansionPanel>
      )}
    </React.Fragment>
  )
)

Banished.displayName = 'Banished'

export default Banished
