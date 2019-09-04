import React from 'react'
import A from './A'

import Typography from '@material-ui/core/Typography'

const NoSelectedExpansions = React.memo(() => (
  <Typography paragraph>
    There is currently no standalone set selected. Please activate at least one
    standalone set in the settings.{' '}
    <A href="/settings">Click here to go to the settings</A>.
  </Typography>
))

NoSelectedExpansions.displayName = 'NoSelectedExpansions'

export default NoSelectedExpansions
