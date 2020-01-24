import React from 'react'

import ListItem from 'components/atoms/_styled_/ListItem'

import Info from './Info'
import InfoLabel from './InfoLabel'

type Props = {
  label: string
  info: string
}

const InfoItem = ({ label, info }: Props) => (
  <ListItem>
    <InfoLabel>{label}:</InfoLabel>
    <Info>{info}</Info>
  </ListItem>
)

export default React.memo(InfoItem)
