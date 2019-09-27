import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  title: string
}

const MageTitleInfo = React.memo(({ title }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Title:</InfoLabel>
    <Info component="span">{title !== undefined ? title : '-'}</Info>
  </CardInfoItem>
))

MageTitleInfo.displayName = 'MageTitleInfo'

export default MageTitleInfo
