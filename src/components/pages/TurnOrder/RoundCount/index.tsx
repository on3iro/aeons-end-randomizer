import React from 'react'

import InfoItem from 'components/molecules/InfoItem'
import Wrapper from './Wrapper'

type Props = {
  count: number
}

const RoundCount = ({ count }: Props) => {
  return (
    <Wrapper>
      <InfoItem label="Round" info={count.toString()}></InfoItem>
    </Wrapper>
  )
}

export default React.memo(RoundCount)
