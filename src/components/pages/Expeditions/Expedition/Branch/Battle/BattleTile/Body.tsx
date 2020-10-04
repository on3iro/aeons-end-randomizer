import React from 'react'
import List from '@material-ui/core/List'

import { Battle } from 'aer-types/types'

import InfoItem from 'components/molecules/InfoItem'

import BodyWrapper from '../../BodyWrapper'
import Name from './Name'

type Props = {
  battle: Battle
  nemesis: string
}

const Body = ({ battle, nemesis }: Props) => (
  <BodyWrapper status={battle.status}>
    <Name variant="h6" component="h2">
      Battle: {nemesis}
    </Name>
    <List>
      <InfoItem label="Tier" info={battle.config.tier.toString()} />
      <InfoItem label="Status" info={battle.status} />
      <InfoItem label="Tries" info={battle.tries.toString()} />
    </List>
  </BodyWrapper>
)

export default React.memo(Body)
