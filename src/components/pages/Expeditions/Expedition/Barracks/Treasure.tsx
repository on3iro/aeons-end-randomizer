import React from 'react'

import * as types from 'aer-types/types'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import TreasureList from 'components/molecules/TreasureList'

type Props = {
  treasures: types.Treasure[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Treasure = ({
  treasures,
  expansionKey,
  expansionHandler,
  expanded,
}: Props) => (
  <React.Fragment>
    {treasures.length > 0 && (
      <ExpansionPanel
        summary="Treasure"
        expansionKey={expansionKey}
        expansionHandler={expansionHandler}
        expanded={expanded}
        data-test="treasure"
      >
        <TreasureList treasures={treasures} />
      </ExpansionPanel>
    )}
  </React.Fragment>
)

export default React.memo(Treasure)
