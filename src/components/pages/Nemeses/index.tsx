import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableNemeses: selectors.Settings.Expansions.getSelectedNemesesForSelectedExpansions(
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
    availableNemeses,
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
          onClick={() => setRandomNemesis(availableNemeses)}
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
