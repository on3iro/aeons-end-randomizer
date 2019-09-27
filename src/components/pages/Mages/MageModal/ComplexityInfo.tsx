import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  complexity: number
}

const ComplexityInfo = React.memo(({ complexity }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Complexity:</InfoLabel>
    <Info component="span">{complexity !== undefined ? complexity : '-'}</Info>
  </CardInfoItem>
))

ComplexityInfo.displayName = 'ComplexityInfo'

export default ComplexityInfo
