import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import OverviewEntry from './OverviewEntry'

const renderExpeditions = (
  expeditions: Array<{ id: string; name: string }>,
  deleteHandler: (id: string) => void
) => {
  return expeditions.map(expedition => (
    <OverviewEntry
      key={expedition.id}
      expedition={expedition}
      deleteHandler={deleteHandler}
    />
  ))
}

const mapStateToProps = (state: RootState) => ({
  expeditions: selectors.Expeditions.Expeditions.getExpeditionList(state),
})

const mapDispatchToProps = {
  deleteHandler: actions.Expeditions.Expeditions.deleteExpedition,
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ExpeditionList = React.memo(({ expeditions, deleteHandler }: Props) => {
  return (
    <React.Fragment>
      <p>Expeditions</p>
      {expeditions.length > 0 ? (
        <ul>{renderExpeditions(expeditions, deleteHandler)}</ul>
      ) : (
        <p>No expeditions</p>
      )}
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpeditionList)
