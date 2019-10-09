import React, { useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from '../../ShuffleButton'
import NoSelectedExpansions from '../../NoSelectedExpansions'

import NemesisModal from './NemesisModal'

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

    const [modalIsVisible, setModalVisible] = useState<boolean>(false)
    const [modalContentId, setModalContentId] = useState<string>('')

    const handleNemesisDetails = (nemesisId: string) => {
      setModalVisible(true)
      setModalContentId(nemesisId)
    }

    const handleModalClose = () => {
      setModalVisible(false)
    }

    return (
      <React.Fragment>
        {nemesis ? (
          <NemesisTile
            nemesis={nemesis}
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
        <NemesisModal
          id={modalContentId}
          visible={modalIsVisible}
          closeModal={handleModalClose}
        />
      </React.Fragment>
    )
  }
)

Nemeses.displayName = 'Nemeses'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
