import React from 'react'
import List from '@material-ui/core/List'

import { UpgradedBasicNemesisCard } from '../../../../types'

import InfoItem from '../../InfoItem'

import Name from './Name'

type Props = {
  nemesisCard: UpgradedBasicNemesisCard
}

const Body = React.memo(({ nemesisCard }: Props) => (
  <React.Fragment>
    <Name component="p">{nemesisCard.name}</Name>
    <List>
      <InfoItem label="Set" info={nemesisCard.expansion} />
      <InfoItem label="Tier" info={nemesisCard.tier.toString()} />
      {nemesisCard.type && <InfoItem label="Type" info={nemesisCard.type} />}
    </List>
  </React.Fragment>
))

export default Body
