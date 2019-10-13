import React from 'react'

import Expansions from './Expansions'
import Supply from './Supply'

const Settings = React.memo(() => (
  <React.Fragment>
    <Expansions />
    <Supply />
  </React.Fragment>
))

Settings.displayName = 'Settings'

export default Settings
