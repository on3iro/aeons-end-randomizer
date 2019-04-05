import React from 'react'

import Typography from '@material-ui/core/Typography'

const NoSelectedExpansions = React.memo(() => (
  <Typography paragraph>
    There is currently no standalone set selected. Please activate at least one
    standalone set in the settings.
  </Typography>
))

NoSelectedExpansions.displayName = 'NoSelectedExpansions'

export default NoSelectedExpansions
