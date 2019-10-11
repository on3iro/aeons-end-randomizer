import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import NemesisModal from './NemesisModal'
import { useModal } from '../../Modal'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
  availableNemeses: selectors.Settings.Expansions.getSelectedNemesesForSelectedExpansions(
    state
  ),
  randomNemesis: selectors.Nemesis.getNemesis(state),
})

const mapDispatchToProps = {
  setRandomNemesis: actions.Nemesis.setRandomNemesis,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Nemeses = React.memo(
  ({
    hasStandaloneExpansionSelected,
    randomNemesis,
    availableNemeses,
    setRandomNemesis,
  }: Props) => {
    if (!hasStandaloneExpansionSelected) {
      return <NoSelectedExpansions />
    }

    const { show, renderModal } = useModal()
    const [modalContentId, setModalContentId] = useState<string>('')

    const handleNemesisDetails = (nemesisId: string) => {
      show()
      setModalContentId(nemesisId)
    }

    return (
      <React.Fragment>
        {randomNemesis ? (
          <NemesisTile
            nemesis={randomNemesis}
            showNemesisDetails={handleNemesisDetails}
          />
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
        <NemesisModal id={modalContentId} renderModal={renderModal} />
      </React.Fragment>
    )
  }
)

Nemeses.displayName = 'Nemeses'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
