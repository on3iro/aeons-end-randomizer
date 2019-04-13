import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Expansions from './Expansions'
import Supply from './Supply'

type Props = {}

const Settings = React.memo(() => (
  <React.Fragment>
    <Expansions />
    <Supply />
  </React.Fragment>
))

Settings.displayName = 'Settings'

export default Settings
