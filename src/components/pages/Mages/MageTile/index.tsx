import React from 'react'

import config from '../../../../config'
import { ICreature } from '../../../../types'

import Wrapper from './Wrapper'
import Card from './Card'
import CardContent from './CardContent'
import CardTypeIcon from './CardTypeIcon'
import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  mage: ICreature
  playerNumber: number
}

const MageTile = React.memo(({ mage, playerNumber }: Props) => (
  <Wrapper item xs={6} md={3}>
    <Card playerNumber={playerNumber}>
      <CardContent>
        <ExpansionName color="textSecondary">
          {/* FIXME remove direct connection to config and use store instead! */}
          {config.DATA[mage.expansion].name}
        </ExpansionName>
        <Name variant="h6" component="h2">
          {mage.name}
        </Name>
      </CardContent>
      <CardTypeIcon type="mage" />
    </Card>
  </Wrapper>
))

MageTile.displayName = 'MageTile'

export default MageTile
