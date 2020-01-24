import React from 'react'

import H2 from 'components/atoms/_styled_/H2'
import P from 'components/atoms/_styled_/P'

import Wrapper from './Wrapper'

type Props = {
  title: string
  score: number
}

const Header = React.memo(({ title, score }: Props) => (
  <Wrapper>
    <H2>Expedition {title}</H2>
    <P>
      <b>Current Score:</b> {score}
    </P>
  </Wrapper>
))

export default Header
