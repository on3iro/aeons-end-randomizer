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
    <ExpansionName color="textSecondary">{expansionName}</ExpansionName>
    <Name variant="h6" component="h2">
      {nemesis['name']}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
