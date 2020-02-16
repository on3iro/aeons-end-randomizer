import React from 'react'

import * as types from 'types'

import TreasureList from 'components/molecules/TreasureList'

type Props = {
  treasures: types.Treasure[]
}

const TreasureReward = ({ treasures }: Props) => {
  return <>{treasures.length > 0 && <TreasureList treasures={treasures} />}</>
}

export default React.memo(TreasureReward)
