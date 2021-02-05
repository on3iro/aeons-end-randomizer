import React from 'react'

import P from 'components/P'
import A from '../atoms/A'

const NoSelectedExpansions = () => (
  <P>
    There is currently no standalone set selected. Please activate at least one
    standalone set in the settings.{' '}
    <A to="/settings">Click here to go to the settings</A>.
  </P>
)

export default React.memo(NoSelectedExpansions)
