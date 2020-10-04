import React from 'react'
import { connect } from 'react-redux'
import { Expedition } from 'aer-types/types'

import { RootState, selectors } from '../../../Redux/Store'

import P from '../../atoms/P'

import List from './List'
import OverviewEntry from './OverviewEntry'

const renderExpeditions = (expeditions: Array<Expedition>) => {
  return expeditions.map((expedition) => (
    <OverviewEntry key={expedition.id} expedition={expedition} />
  ))
}

const mapStateToProps = (state: RootState) => ({
  expeditions: selectors.Expeditions.Expeditions.getExpeditionList(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ExpeditionList = ({ expeditions }: Props) => {
  return (
    <React.Fragment>
      {expeditions.length > 0 ? (
        <List>{renderExpeditions(expeditions)}</List>
      ) : (
        <P>No expeditions</P>
      )}
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ExpeditionList))
