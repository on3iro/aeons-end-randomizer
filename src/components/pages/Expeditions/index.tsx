import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../Redux/Store'
import { useModal } from '../../../hooks/useModal'

import NoSelectedExpansions from '../../molecules/NoSelectedExpansions'

import ShuffleButton from '../../atoms/ShuffleButton'

import ExpeditionList from './ExpeditionList'
import CreationDialog from './CreationDialog'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expeditions = ({ hasStandaloneExpansionSelected }: Props) => {
  const { show, hide, RenderModal } = useModal()

  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  return (
    <React.Fragment>
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
