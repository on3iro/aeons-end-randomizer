import React from 'react'

import useExpansionHandling from 'hooks/useExpansionHandling'

import ExpansionPanel from 'components/molecules/ExpansionPanel'
import GameLanguageSelection from './GameLanguageSelection/GameLanguageSelection'

const Language = () => {
  const { expanded, createExpansionHandler } = useExpansionHandling()
  const expansionKey = 'languageSelectionSet'
  const expansionHandler = createExpansionHandler(expansionKey)

  return (
    <ExpansionPanel
      expanded={expanded}
      expansionHandler={expansionHandler}
      expansionKey={expansionKey}
      summary="Language Selection"
      data-test="LanguageSelection"
    >
      <GameLanguageSelection />
    </ExpansionPanel>
  )
}

export default React.memo(Language)
