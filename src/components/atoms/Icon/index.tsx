import React from 'react'
import Wrapper from './Wrapper'

type Props = {
  name: string
  size?: string
}

const Icon = (props: Props) => (
  <Wrapper className="material-icons" size={props.size}>
    {props.name}
  </Wrapper>
)

Icon.displayName = 'Icon'

export default Icon
