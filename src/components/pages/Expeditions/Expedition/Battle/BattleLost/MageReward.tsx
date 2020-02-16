import React from 'react'

import * as types from 'types'

import MageTile from 'components/molecules/MageList/MageTile' // FIXME MageTile should probably be a molecule itself

type Props = {
  mage?: types.Mage
}

const MageReward = ({ mage }: Props) => {
  return <>{mage && <MageTile mage={mage} playerNumber={1} />}</>
}

export default React.memo(MageReward)
