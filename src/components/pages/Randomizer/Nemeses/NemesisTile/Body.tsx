import React from 'react'
import { Nemesis } from 'aer-types/types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: Nemesis
  expansionName: string
}

const Body = ({ nemesis, expansionName }: Props) => (
  <React.Fragment>
    <ExpansionName>{expansionName}</ExpansionName>
    <Name>{nemesis['name']}</Name>
  </React.Fragment>
)

export default React.memo(Body)
