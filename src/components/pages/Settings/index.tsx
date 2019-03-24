import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import settingStyles from './settingStyles'
import Expansions from './Expansions'

type Props = {
  classes: any
}

const Settings = React.memo(({ classes }: Props) => (
  <Expansions classes={classes} />
))

export default withStyles(settingStyles)(Settings)
