import React from 'react'

import * as types from 'aer-types/types'

import TreasureList from 'components/molecules/TreasureList'
import SectionHeadline from 'components/atoms/SectionHeadline'

type Props = {
  treasures: types.Treasure[]
}

const TreasureReward = ({ treasures }: Props) => {
  return (
    <>
      {treasures.length > 0 && <SectionHeadline>Treasures</SectionHeadline>}
      <TreasureList treasures={treasures} />
    </>
  )
}

export default React.memo(TreasureReward)
