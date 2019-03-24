import React from 'react'

import useExpansionHandling from '../../../../hooks/useExpansionHandling'
import ExpansionPanel from '../../../ExpansionPanel'
import ActiveSets from './ActiveSets'

type Props = {
  classes: any
}

const Expansions = React.memo(({ classes }: Props) => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'sets'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      classes={classes}
      expanded={expanded}
      expansionKey={expansionKey}
      expansionHandler={expansionHandler}
      summary="Expansions"
    >
      <ActiveSets />
    </ExpansionPanel>
  )
})

export default Expansions
