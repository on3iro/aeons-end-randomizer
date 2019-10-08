import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../Redux/Store'

import A from '../../A'

const renderExpeditions = (
  expeditions: Array<{ id: string; name: string }>
) => {
  return expeditions.map(expedition => {
    const url = `/expeditions/${expedition.id}`
    return (
      <li key={expedition.id}>
        <A to={url}>
          {expedition.name} {expedition.id}
        </A>
      </li>
    )
  })
}

const mapStateToProps = (state: RootState) => ({
  expeditions: selectors.Expeditions.Expeditions.getExpeditionList(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & {}

const ExpeditionList = React.memo(({ expeditions }: Props) => {
  return (
    <React.Fragment>
      <p>Expeditions</p>
      {expeditions.length > 0 ? (
        <ul>{renderExpeditions(expeditions)}</ul>
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
