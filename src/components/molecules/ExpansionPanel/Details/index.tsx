import React from 'react'

import Wrapper from './_styled_/Wrapper'
import Content from './_styled_/Content'

type Props = {
  isExpanded: boolean
  children: React.ReactNode
}

const Details = ({ isExpanded, children }: Props) => {
  return (
    <Wrapper isExpanded={isExpanded} aria-hidden={isExpanded}>
      <Content isExpanded={isExpanded}>{children}</Content>
    </Wrapper>
  )
}

export default React.memo(Details)
