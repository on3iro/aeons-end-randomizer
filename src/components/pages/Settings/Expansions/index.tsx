import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'

import ExpansionPanel from '../../../ExpansionPanel'
import ActiveSets from './ActiveSets'

const KEY = 'expansions'

const mapStateToProps = (state: RootState) => ({
  accordionState: selectors.Settings.Accordions.getAccordionStateById(
    state,
    KEY
  ),
})

const mapDispatchToProps = {
  toggleAccordion: actions.Settings.Accordions.toggle,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expansions = React.memo(({ accordionState, toggleAccordion }: Props) => {
  const expansionHandler = useCallback(() => toggleAccordion(KEY), [
    toggleAccordion,
  ])

  return (
    <ExpansionPanel
      expanded={accordionState}
      expansionKey="expansions"
      expansionHandler={expansionHandler}
      summary="Expansions"
    >
      <ActiveSets />
    </ExpansionPanel>
  )
})

Expansions.displayName = 'Expansions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expansions)
