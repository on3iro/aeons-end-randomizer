import React from 'react'
import Typography from '@material-ui/core/Typography'

import A from '../atoms/A'

const NoSelectedExpansions = () => (
  <Typography paragraph>
    There is currently no standalone set selected. Please activate at least one
    standalone set in the settings.{' '}
    <A to="/settings">Click here to go to the settings</A>.
  </Typography>
)

export default React.memo(NoSelectedExpansions)
