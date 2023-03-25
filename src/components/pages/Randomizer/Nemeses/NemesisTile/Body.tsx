import React from 'react'
import { Nemesis, Expansion } from 'aer-types/types'
import { formatExpansionName } from 'helpers'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: Nemesis
  expansion: Expansion
}

const Body = ({ nemesis, expansion }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {formatExpansionName(expansion)}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {nemesis['name']}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
