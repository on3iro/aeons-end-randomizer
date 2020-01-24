import React from 'react'

import config from 'config'
import { Mage } from 'types'

import TileName from 'components/atoms/_styled_/TileName'
import TileExpansionName from 'components/atoms/_styled_/TileExpansionName'

type Props = {
  mage: Mage
}

const Body = React.memo(({ mage }: Props) => (
  <React.Fragment>
    <TileExpansionName>
      {/* FIXME remove direct connection to config and use store instead! */}
      {config.DATA[mage.expansion].name}
    </TileExpansionName>
    <TileName>{mage.name}</TileName>
  </React.Fragment>
))

export default Body
