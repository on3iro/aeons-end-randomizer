import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  type: string
}

const TypeInfo = React.memo(({ type }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Type:</InfoLabel>
    <Info component="span">{type !== '' ? type : '-'}</Info>
  </CardInfoItem>
))

TypeInfo.displayName = 'TypeInfo'

export default TypeInfo
