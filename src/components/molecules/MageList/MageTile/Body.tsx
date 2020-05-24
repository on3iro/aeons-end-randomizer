import React from 'react'

import { Mage } from 'aer-types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  mage: Mage
  expansionName: string
}

const Body = ({ mage, expansionName }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">{expansionName}</ExpansionName>
    <Name variant="h6" component="h2">
      {mage.name}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
