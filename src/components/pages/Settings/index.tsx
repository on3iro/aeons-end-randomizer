import React from 'react'

import Expansions from './Expansions'
import Supply from './Supply'

const Settings = () => (
  <React.Fragment>
    <Expansions />
    <Supply />
  </React.Fragment>
)

export default React.memo(Settings)
