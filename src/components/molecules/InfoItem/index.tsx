import React from 'react'

import Wrapper from './Wrapper'
import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  label: string
  info: string
}

const InfoItem = ({ label, info, ...rest }: Props) => (
  <Wrapper {...rest}>
    <InfoLabel>{label}:</InfoLabel>
    <Info>{info}</Info>
  </Wrapper>
)

export default React.memo(InfoItem)
