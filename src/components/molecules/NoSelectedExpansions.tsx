import React from 'react'

import P from 'components/atoms/_styled_/P'
import Link from 'components/atoms/Link'

const NoSelectedExpansions = () => (
  <P>
    There is currently no standalone set selected. Please activate at least one
    standalone set in the settings.{' '}
    <Link to="/settings">Click here to go to the settings</Link>.
  </P>
)

export default React.memo(NoSelectedExpansions)
