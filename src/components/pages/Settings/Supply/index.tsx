import React from 'react'

import ExpansionPanel from '../../../ExpansionPanel'
import useExpansionHandling from '../../../../hooks/useExpansionHandling'

import SetupSelection from './SetupSelection'

type Props = {
  classes: any
}

const Supply = React.memo(({ classes }: Props) => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'supplySets'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      classes={classes}
      expanded={expanded}
      expansionHandler={expansionHandler}
      expansionKey={expansionKey}
      summary="Supply Setups"
    >
      <SetupSelection />
    </ExpansionPanel>
  )
})

export default Supply
