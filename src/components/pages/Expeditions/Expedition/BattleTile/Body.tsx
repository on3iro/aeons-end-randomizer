import React from 'react'

import { Battle } from '../../../../../types'

import InfoItem from '../../../../molecules/InfoItem'
import TileName from 'components/atoms/_styled_/TileName'

import BodyWrapper from './BodyWrapper'

import List from '@material-ui/core/List'

type Props = {
  battle: Battle
  nemesis: string
}

const Body = React.memo(({ battle, nemesis }: Props) => (
  <BodyWrapper status={battle.status}>
    <TileName>Battle: {nemesis}</TileName>
    <List>
      <InfoItem label="Tier" info={battle.nemesisTier.tier.toString()} />
      <InfoItem label="Status" info={battle.status} />
      <InfoItem label="Tries" info={battle.tries.toString()} />
    </List>
  </BodyWrapper>
))

export default Body
