import React from 'react'

import H2 from '../../../../atoms/H2'
import P from '../../../../atoms/P'

import Wrapper from './Wrapper'

type Props = {
  title: string
  score: number
}

const Header = ({ title, score }: Props) => (
  <Wrapper>
    <H2>Expedition {title}</H2>
    <P>
      <b>Current Score:</b> {score}
    </P>
  </Wrapper>
)

export default React.memo(Header)
