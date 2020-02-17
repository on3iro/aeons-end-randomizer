import React from 'react'

import config from '../../../../config'
import { Mage } from '../../../../types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  mage: Mage
}

const Body = ({ mage }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {/* FIXME remove direct connection to config and use store instead! */}
      {config.DATA[mage.expansion].name}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {mage.name}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
