import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'

import NemesisTile from './NemesisTile'
import EmptyNemesisHint from './EmptyNemesisHint'

import ShuffleButton from 'components/atoms/ShuffleButton'
import NoSelectedExpansions from 'components/molecules/NoSelectedExpansions'

import NemesisModal from 'components/molecules/NemesisModal'
import { useModal } from 'hooks/useModal'

const mapStateToProps = (state: RootState) => {
  const nemesis = selectors.Randomizer.Nemesis.getNemesis(state)

  return {
    hasStandaloneExpansionSelected: selectors.Settings.Expansions.Expansions.getHasStandaloneExpansion(
      state
    ),
    availableNemeses: selectors.Settings.Expansions.getSelectedNemesesForSelectedExpansions(
      state
    ),
    randomNemesis: nemesis
      ? selectors.Settings.Expansions.Nemeses.content.getById(state, {
          id: nemesis.id,
        })
      : undefined,
  }
}

const mapDispatchToProps = {
  setRandomNemesis: actions.Randomizer.Nemesis.setRandomNemesis,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Nemeses = ({
  hasStandaloneExpansionSelected,
  randomNemesis,
  availableNemeses,
  setRandomNemesis,
}: Props) => {
  const { show, RenderModal } = useModal()
  const [modalContentId, setModalContentId] = useState<string>('')

  const handleNemesisDetails = (nemesisId: string) => {
    show()
    setModalContentId(nemesisId)
  }

  const handleRandomization = useCallback(() => {
    setRandomNemesis(availableNemeses)
  }, [availableNemeses, setRandomNemesis])

  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
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

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Nemeses))
