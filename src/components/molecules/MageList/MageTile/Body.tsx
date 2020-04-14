import React from 'react'

import AERData from 'aer-data'
import { Mage } from 'aer-types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  mage: Mage
}

const Body = ({ mage }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {/* FIXME remove direct connection to config and use store instead! */}
      {AERData.data[mage.expansion].name}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {mage.name}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
