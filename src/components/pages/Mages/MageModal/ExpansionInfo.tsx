import React from 'react'

import CardInfoItem from '../../../CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  expansion: string
}

const ExpansionInfo = React.memo(({ expansion }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Expansion:</InfoLabel>
    <Info component="span">{expansion !== '' ? expansion : '-'}</Info>
  </CardInfoItem>
))

ExpansionInfo.displayName = 'ExpansionInfo'

export default ExpansionInfo
