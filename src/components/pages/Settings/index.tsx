import React from 'react'

import Expansions from './Expansions'
import Supply from './Supply'
import Language from './Language'

const Settings = () => (
  <React.Fragment>
    <Expansions />
    <Supply />
    <Language />
  </React.Fragment>
)

export default React.memo(Settings)
