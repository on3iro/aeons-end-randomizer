import React from 'react'
import List from '@material-ui/core/List'

import { UpgradedBasicNemesisCard } from 'aer-types/types'

import InfoItem from 'components/molecules/InfoItem'

import Name from './Name'

type Props = {
  nemesisCard: UpgradedBasicNemesisCard
}

const Body = ({ nemesisCard }: Props) => (
  <React.Fragment>
    <Name component="p">{nemesisCard.name}</Name>
    <List>
      <InfoItem label="Set" info={nemesisCard.expansion} />
      <InfoItem label="Tier" info={nemesisCard.tier.toString()} />
      {nemesisCard.type && <InfoItem label="Type" info={nemesisCard.type} />}
      {nemesisCard.type === 'Minion' && (
        <InfoItem label="Hp" info={nemesisCard.hp.toString()} />
      )}
    </List>
  </React.Fragment>
)

export default React.memo(Body)
