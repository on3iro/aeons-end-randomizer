import React from 'react'

import CardInfoItem from './CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  difficulty: number
}

const DifficultyInfo = React.memo(({ difficulty }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Difficulty:</InfoLabel>
    <Info component="span">{difficulty !== undefined ? difficulty : '-'}</Info>
  </CardInfoItem>
))

DifficultyInfo.displayName = 'DifficultyInfo'

export default DifficultyInfo
