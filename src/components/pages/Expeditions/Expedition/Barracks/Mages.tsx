import React from 'react'

import * as types from '../../../../../types'

import ExpansionPanel from '../../../../molecules/ExpansionPanel'
import MageList from '../../../../molecules/MageList'

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
  <ExpansionPanel
    summary="Mages"
    expansionKey={expansionKey}
    expansionHandler={expansionHandler}
    expanded={expanded}
  >
    <MageList mages={mages} />
  </ExpansionPanel>
)

export default React.memo(Mages)
