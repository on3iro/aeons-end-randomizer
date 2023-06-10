import React from 'react'

import * as types from 'aer-types/types'
import Battle from 'components/pages/Expeditions/Expedition/Branch/Battle'
import Narrative from 'components/pages/Expeditions/Expedition/Branch/Narrative'
import Reward from 'components/pages/Expeditions/Expedition/Branch/Reward'

type Props = {
  branch: types.Branch
}

const Branch = ({ branch, ...rest }: Props) => {
  switch (branch.type) {
    case 'battle': {
      return <Battle battle={branch} {...rest} />
    }

    case 'narrative': {
      return <Narrative narrative={branch} {...rest} />
    }

    case 'reward': {
      return <Reward reward={branch} />
    }

    default: {
      return null
    }
  }
}

export default React.memo(Branch)
