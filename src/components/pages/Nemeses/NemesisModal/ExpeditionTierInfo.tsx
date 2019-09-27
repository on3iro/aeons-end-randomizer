import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  expeditionTier: 1 | 2 | 3 | 4
}

const ExpeditionTierInfo = React.memo(({ expeditionTier }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Expedition tier:</InfoLabel>
    <Info component="span">
      {expeditionTier !== undefined ? expeditionTier : '-'}
    </Info>
  </CardInfoItem>
))

ExpeditionTierInfo.displayName = 'ExpeditionTierInfo'

export default ExpeditionTierInfo
