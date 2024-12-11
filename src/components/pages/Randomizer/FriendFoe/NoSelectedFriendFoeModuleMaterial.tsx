import React from 'react'
import Typography from '@material-ui/core/Typography'

import A from 'components/atoms/A'

const NoSelectedFriendFoeModuleMaterial = () => (
  <Typography paragraph>
    There are currently no selected cards from the Friends &amp; Foes module.{' '}
    <A to="/settings">Click here to go to the settings</A>.
  </Typography>
)

export default React.memo(NoSelectedFriendFoeModuleMaterial)
