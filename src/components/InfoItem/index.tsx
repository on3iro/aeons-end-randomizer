import React from 'react'

import Wrapper from './Wrapper'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  label: string
  info: string
}

const InfoItem = React.memo(({ label, info }: Props) => (
  <Wrapper>
    <InfoLabel color="textSecondary">{label}:</InfoLabel>
    <Info component="span">{info}</Info>
  </Wrapper>
))

InfoItem.displayName = 'InfoItem'

export default InfoItem
