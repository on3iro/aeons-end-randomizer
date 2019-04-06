import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'


const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.Selected.getHasStandaloneSet(
    state
  ),
  selectedExpansions: selectors.Settings.Expansions.Selected.getSelectedExpansionsArray(
    state
  ),
  nemesis: selectors.Nemesis.getNemesis(state),
})

const mapDispatchToProps = {
  setRandomNemesis: actions.Nemesis.setRandomNemesis,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Nemeses = React.memo(
  ({
    hasStandaloneExpansionSelected,
    nemesis,
    selectedExpansions,
    setRandomNemesis,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    return (
      <React.Fragment>
        {nemesis ? (
          <NemesisTile nemesis={nemesis} />
        ) : (
          <EmptyNemesisHint>Tab button to spawn new nemesis!</EmptyNemesisHint>
        )}
        <ShuffleButton
          onClick={() => setRandomNemesis(selectedExpansions)}
          color="primary"
          variant="extended"
        >
          Open Breach
        </ShuffleButton>
      </React.Fragment>
    )
  }
)

Nemeses.displayName = 'Nemeses'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
