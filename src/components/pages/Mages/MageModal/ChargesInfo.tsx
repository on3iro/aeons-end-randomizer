import React from 'react'

import CardInfoItem from '../../../CardInfoItem'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  charges: number | 'Custom'
}

const ChargesInfo = React.memo(({ charges }: Props) => (
  <CardInfoItem>
    <InfoLabel color="textSecondary">Charges:</InfoLabel>
    <Info component="span">{charges !== undefined ? charges : '-'}</Info>
  </CardInfoItem>
))

ChargesInfo.displayName = 'ChargesInfo'

export default ChargesInfo
