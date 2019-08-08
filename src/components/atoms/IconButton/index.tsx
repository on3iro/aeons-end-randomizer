import React from 'react'
import Wrapper from './Wrapper'
import Icon from '../Icon'

type Props = {
  color?: 'primary' | 'secondary'
  icon: string
  onClick: Function
}

const IconButton = ({ color = 'primary', icon }: Props) => (
  <Wrapper color={color}>
    <Icon name={icon} />
  </Wrapper>
)

export default IconButton
