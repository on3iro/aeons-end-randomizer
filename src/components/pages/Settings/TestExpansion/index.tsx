import React from 'react'

import ExpansionPanelNew from 'components/molecules/ExpansionPanelNew'
import SetupSelection from '../Supply/SetupSelection'

const TestExpansion = React.memo(() => {
  return (
    <ExpansionPanelNew summary="Test Expansion">
      <SetupSelection />
    </ExpansionPanelNew>
  )
})

TestExpansion.displayName = 'TestExpansion'

export default TestExpansion
