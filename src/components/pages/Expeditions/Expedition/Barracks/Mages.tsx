import React from 'react'

import * as types from 'types'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import MageList from 'components/molecules/MageList'

type Props = {
  mages: types.Mage[]
  expansionKey: string
  expansionHandler: (
    e: React.ChangeEvent<any> | undefined,
    expanded: string | boolean
  ) => void
  expanded: boolean | string
}

const Mages = ({ mages, expansionKey, expansionHandler, expanded }: Props) => (
  <ExpansionPanel summary="Mages">
    <MageList mages={mages} />
  </ExpansionPanel>
)

export default React.memo(Mages)
