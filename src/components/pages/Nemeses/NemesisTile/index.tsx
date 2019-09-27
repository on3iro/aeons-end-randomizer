import React from 'react'

import config from '../../../../config'
import { Nemesis } from '../../../../types'

import ShowDetailsButton from '../../../ShowDetailsButton'

import Card from './Card'
import CardContent from './CardContent'
import CardTypeIcon from './CardTypeIcon'
import ExpansionName from './ExpansionName'
import Name from './Name'

type Props = {
  nemesis: Nemesis
  showNemesisDetails: (id: string) => void
}

const NemesisTile = React.memo(
  ({ nemesis, showNemesisDetails, ...rest }: Props) => {
    return (
      <Card>
        <CardContent>
          <ExpansionName color="textSecondary">
            {/* FIXME remove direct connection to config and use store instead! */}
            {config.DATA[nemesis.expansion].name}
          </ExpansionName>
          <Name variant="h6" component="h2">
            {nemesis['name']}
          </Name>
        </CardContent>
        <CardTypeIcon type="nemesis" />
        <ShowDetailsButton onClick={() => showNemesisDetails(nemesis.id)} />
      </Card>
    )
  }
)

NemesisTile.displayName = 'NemesisTile'

export default NemesisTile
