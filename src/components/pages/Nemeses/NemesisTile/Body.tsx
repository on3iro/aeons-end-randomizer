import React from 'react'

import config from '../../../../config'
import { Nemesis } from '../../../../types'

import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: Nemesis
}

const Body = ({ nemesis }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {/* FIXME remove direct connection to config and use store instead! */}
      {config.DATA[nemesis.expansion].name}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {nemesis['name']}
    </Name>
  </React.Fragment>
)

export default React.memo(Body)
