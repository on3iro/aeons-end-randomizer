import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  health: number
}

const HealthInfo = React.memo(({ health }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Health:</InfoLabel>
    <Info component="span">{health !== undefined ? health : '-'}</Info>
  </CardInfoItem>
))

HealthInfo.displayName = 'HealthInfo'

export default HealthInfo
