import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import settingStyles from './settingStyles'
import Expansions from './Expansions'
import Supply from './Supply'

type Props = {
  classes: any
}

const Settings = React.memo(({ classes }: Props) => (
  <React.Fragment>
    <Expansions classes={classes} />
    <Supply classes={classes} />
  </React.Fragment>
))

Settings.displayName = 'Settings'

export default withStyles(settingStyles)(Settings)
