import React from 'react'

import * as types from '../../../../../types'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import TreasureList from '../../../../molecules/TreasureList'

type Props = {
  treasures: types.Treasure[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Treasure = React.memo(
  ({ treasures, expansionKey, expansionHandler, expanded }: Props) => (
    <React.Fragment>
      {treasures.length > 0 && (
        <ExpansionPanel
          summary="Treasure"
          expansionKey={expansionKey}
          expansionHandler={expansionHandler}
          expanded={expanded}
        >
          <TreasureList treasures={treasures} />
        </ExpansionPanel>
      )}
    </React.Fragment>
  )
)

Treasure.displayName = 'Treasure'

export default Treasure
