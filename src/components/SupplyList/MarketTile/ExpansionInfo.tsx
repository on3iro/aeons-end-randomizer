import React from 'react'

import CardInfoItem from '../../CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  expansionName: string
}

const ExpansionInfo = React.memo(({ expansionName }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Set:</InfoLabel>
    <Info component="span">{expansionName !== '' ? expansionName : '-'}</Info>
  </CardInfoItem>
))

ExpansionInfo.displayName = 'ExpansionInfo'

export default ExpansionInfo
