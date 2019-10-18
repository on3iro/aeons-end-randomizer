import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from '../../atoms/ShuffleButton'
import NoSelectedExpansions from '../../molecules/NoSelectedExpansions'

import NemesisModal from '../../molecules/NemesisModal'
import { useModal } from '../../../hooks/useModal'

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

    const { show, RenderModal } = useModal()
    const [modalContentId, setModalContentId] = useState<string>('')

    const handleNemesisDetails = (nemesisId: string) => {
      show()
      setModalContentId(nemesisId)
    }

    const handleRandomization = useCallback(() => {
      setRandomNemesis(availableNemeses)
    }, [availableNemeses, setRandomNemesis])

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
          onClick={handleRandomization}
          color="primary"
          variant="extended"
          withBottomNav={true}
        >
          Open Breach
        </ShuffleButton>
        <NemesisModal id={modalContentId} RenderModal={RenderModal} />
      </React.Fragment>
    )
  }
)

Nemeses.displayName = 'Nemeses'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nemeses)
