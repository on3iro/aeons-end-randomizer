import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../Redux/Store'
import { useModal } from '../../../hooks/useModal'

import ShuffleButton from '../../atoms/ShuffleButton'

import ExpeditionList from './ExpeditionList'
import CreationDialog from './CreationDialog'
import Text from 'components/pages/Expeditions/Expedition/Branch/Narrative/NarrativeUnlocked/Text'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.Expansions.getHasStandaloneExpansion(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expeditions = ({ hasStandaloneExpansionSelected }: Props) => {
  const { show, hide, RenderModal } = useModal()

  return (
    <React.Fragment>
      {!hasStandaloneExpansionSelected && (
        <Text color="error">
          Note: You currently do not have any standalone expansions selected.
          You can still import expeditions, but just creating an expedition,
          will leave it blank. To be able to create regular expeditions activate
          at least one stand alone expansion inside the settings.
        </Text>
      )}

      <ExpeditionList />

      <RenderModal titleColor="#333" titleLabel="New Expedition">
        <CreationDialog finisher={hide} />
      </RenderModal>

      <ShuffleButton
        onClick={show}
        color="primary"
        variant="extended"
        data-test="btn-start-expedition"
      >
        Start new expedition
      </ShuffleButton>
    </React.Fragment>
  )
}

Expeditions.displayName = 'Expeditions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Expeditions))
