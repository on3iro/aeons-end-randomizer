import React from 'react'

import { Mage } from 'aer-types/types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  mage: Mage
  expansionName: string
}

const Body = ({ mage, expansionName }: Props) => (
  <React.Fragment>
    <ExpansionName>{expansionName}</ExpansionName>
    <Name>{mage.name}</Name>
  </React.Fragment>
)

export default React.memo(Body)
