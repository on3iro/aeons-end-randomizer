import React from 'react'

import useExpansionHandling from '../../../../hooks/useExpansionHandling'

import ExpansionPanel from '../../../molecules/ExpansionPanel'

import SetupSelection from './SetupSelection'

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
