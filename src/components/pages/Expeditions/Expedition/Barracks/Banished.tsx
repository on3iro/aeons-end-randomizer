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

const Banished = ({
  banishedCards,
  expansionKey,
  expansionHandler,
  expanded,
}: Props) => (
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

export default React.memo(Banished)
