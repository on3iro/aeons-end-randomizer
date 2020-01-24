import React from 'react'

import config from 'config'
import { Nemesis } from 'types'

import TileName from 'components/atoms/_styled_/TileName'
import TileExpansionName from 'components/atoms/_styled_/TileExpansionName'

type Props = {
  nemesis: Nemesis
}

const Body = ({ nemesis }: Props) => (
  <React.Fragment>
    <TileExpansionName>
      {/* FIXME remove direct connection to config and use store instead! */}
      {config.DATA[nemesis.expansion].name}
    </TileExpansionName>
    <TileName>{nemesis['name']}</TileName>
  </React.Fragment>
)

export default React.memo(Body)
