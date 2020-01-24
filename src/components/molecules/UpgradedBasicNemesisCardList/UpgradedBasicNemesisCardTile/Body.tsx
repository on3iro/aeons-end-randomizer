import React from 'react'

import { UpgradedBasicNemesisCard } from '../../../../types'

import InfoItem from '../../InfoItem'

import List from 'components/atoms/_styled_/List'
import TileBodyWrapper from 'components/atoms/_styled_/TileBodyWrapper'
import TileNameBold from 'components/atoms/_styled_/TileNameBold'

type Props = {
  nemesisCard: UpgradedBasicNemesisCard
}

const Body = React.memo(({ nemesisCard }: Props) => (
  <TileBodyWrapper>
    <TileNameBold>{nemesisCard.name}</TileNameBold>
    <List>
      <InfoItem label="Set" info={nemesisCard.expansion} />
      <InfoItem label="Tier" info={nemesisCard.tier.toString()} />
      {nemesisCard.type && <InfoItem label="Type" info={nemesisCard.type} />}
    </List>
  </TileBodyWrapper>
))

export default Body
