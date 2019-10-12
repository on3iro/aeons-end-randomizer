import React from 'react'

import Expansions from './Expansions'
import Supply from './Supply'

type Props = {}

const Settings = React.memo(({  }: Props) => (
  <React.Fragment>
    <Expansions />
    <Supply />
  </React.Fragment>
))

Settings.displayName = 'Settings'

export default Settings
