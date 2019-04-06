import React from 'react'

import config from '../../../../config'
import { ICreature } from '../../../../types'

import Card from './Card'
import CardContent from './CardContent'
import CardTypeIcon from './CardTypeIcon'
import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: ICreature
}

const NemesisTile = React.memo(({ nemesis, ...rest }: Props) => {
  return (
    <Card>
      <CardContent>
        <ExpansionName color="textSecondary">
          {config.DATA[nemesis.expansion].name}
        </ExpansionName>
        <Name variant="h6" component="h2">
          {nemesis['name']}
        </Name>
      </CardContent>
      <CardTypeIcon type="nemesis" />
    </Card>
  )
})

NemesisTile.displayName = 'NemesisTile'

export default NemesisTile
