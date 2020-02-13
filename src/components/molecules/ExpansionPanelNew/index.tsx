import React, { useState } from 'react'

import Wrapper from './__styled__/Wrapper'
import Summary from './Summary'
import Details from './Details'

type Props = {
  summary: string
  children: React.ReactNode
}

const ExpansionPanelNew = ({ summary, children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Wrapper>
      <Summary isExpanded={isExpanded} onClick={handleClick}>
        {summary}
      </Summary>
      <Details isExpanded={isExpanded}>{isExpanded && children}</Details>
    </Wrapper>
  )
}

export default React.memo(ExpansionPanelNew)
