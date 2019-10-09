import React from 'react'

import CardInfoItem from '../../../CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  cost?: number
}

const CostInfo = React.memo(({ cost }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Cost:</InfoLabel>
    <Info component="span">{cost !== undefined ? cost : '-'}</Info>
  </CardInfoItem>
))

CostInfo.displayName = 'CostInfo'

export default CostInfo
