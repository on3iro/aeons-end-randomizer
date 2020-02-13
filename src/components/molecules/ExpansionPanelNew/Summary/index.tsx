import React from 'react'

import IconButton from './IconButton'

import Wrapper from './_styled_/Wrapper'
import Heading from './_styled_/Heading'

type Props = {
  isExpanded: boolean
  children: React.ReactNode
  onClick: () => void
}
const Summary = ({ isExpanded, children, onClick }: Props) => {
  return (
    <Wrapper
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <Heading>{children}</Heading>
      <IconButton isExpanded={isExpanded} />
    </Wrapper>
  )
}

export default React.memo(Summary)
