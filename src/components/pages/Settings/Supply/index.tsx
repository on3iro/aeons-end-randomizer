import React from 'react'

import ExpansionPanel from '../../../ExpansionPanel'
import useExpansionHandling from '../../../../hooks/useExpansionHandling'

import SetupSelection from './SetupSelection'

type Props = {}

const Supply = React.memo(() => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'supplySets'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      expanded={expanded}
      expansionHandler={expansionHandler}
      expansionKey={expansionKey}
      summary="Supply Setups"
    >
      <SetupSelection />
    </ExpansionPanel>
  )
})

Supply.displayName = 'Supply'

export default Supply
