import React from 'react'

import useExpansionHandling from '../../../../hooks/useExpansionHandling'
import ExpansionPanel from '../../../ExpansionPanel'
import ActiveSets from './ActiveSets'

type Props = {}

const Expansions = React.memo(() => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'sets'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      expanded={expanded}
      expansionKey={expansionKey}
      expansionHandler={expansionHandler}
      summary="Expansions"
    >
      <ActiveSets />
    </ExpansionPanel>
  )
})

Expansions.displayName = 'Expansions'

export default Expansions
