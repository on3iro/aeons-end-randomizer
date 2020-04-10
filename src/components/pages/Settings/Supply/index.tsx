import React from 'react'

import useExpansionHandling from 'hooks/useExpansionHandling'

import ExpansionPanel from 'components/molecules/ExpansionPanel'

import SetupSelection from './SetupSelection'

const Supply = () => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'supplySets'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      expanded={expanded}
      expansionHandler={expansionHandler}
      expansionKey={expansionKey}
      summary="Supply Setups"
      data-test="SupplySetups"
    >
      <SetupSelection />
    </ExpansionPanel>
  )
}

export default React.memo(Supply)
