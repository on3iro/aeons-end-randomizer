import React from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../Redux/Store'

import { Expedition } from '../../../types'

import List from './List'
import OverviewEntry from './OverviewEntry'

const renderExpeditions = (
  expeditions: Array<Expedition>,
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
      {expeditions.length > 0 ? (
        <List>{renderExpeditions(expeditions, deleteHandler)}</List>
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
