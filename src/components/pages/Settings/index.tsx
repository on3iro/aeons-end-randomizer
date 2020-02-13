import React from 'react'

import Expansions from './Expansions'
import Supply from './Supply'
import TestExpansion from './TestExpansion'

const Settings = React.memo(() => (
  <React.Fragment>
    <Expansions />
    <Supply />
    <TestExpansion />
  </React.Fragment>
))

Settings.displayName = 'Settings'

export default Settings
