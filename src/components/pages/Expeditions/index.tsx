import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../Redux/Store'
import { useModal } from '../../Modal'

import NoSelectedExpansions from '../../NoSelectedExpansions'
import ShuffleButton from '../../ShuffleButton'

import ExpeditionList from './ExpeditionList'
import CreationDialog from './CreationDialog'

const mapStateToProps = (state: RootState) => ({
  hasStandaloneExpansionSelected: selectors.Settings.Expansions.SelectedExpansions.getHasStandaloneExpansion(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const Expeditions = React.memo(({ hasStandaloneExpansionSelected }: Props) => {
  if (!hasStandaloneExpansionSelected) {
    return <NoSelectedExpansions />
  }

  const { show, hide, renderModal } = useModal()

  return (
    <React.Fragment>
      <ExpeditionList />
      {renderModal(
        '#333',
        'New Expedition',
        <CreationDialog finisher={hide} />
      )}
      <ShuffleButton onClick={show} color="primary" variant="extended">
        Start new expedition
      </ShuffleButton>
    </React.Fragment>
  )
})

Expeditions.displayName = 'Expeditions'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expeditions)
