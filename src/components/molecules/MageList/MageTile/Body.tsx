import React from 'react'

import { Mage, Expansion } from 'aer-types/types'
import { formatExpansionName } from 'helpers'

import ExpansionName from './ExpansionName'
import Name from './Name'
import Title from './Title'

type Props = {
  mage: Mage
  expansion: Expansion
}

const Body = ({ mage, expansion }: Props) => (
  <React.Fragment>
    <ExpansionName color="textSecondary">
      {formatExpansionName(expansion)}
    </ExpansionName>
    <Name variant="h6" component="h2">
      {mage.name}
    </Name>
    <Title>{mage.mageTitle}</Title>
  </React.Fragment>
)

export default React.memo(Body)
