import React from 'react'
import { Nemesis } from 'aer-types'

import AERData from 'aer-data'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: Nemesis
}

const Body = ({ nemesis }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {AERData.data[nemesis.expansion].name}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {nemesis['name']}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
