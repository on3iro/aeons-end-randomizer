import React from 'react'
import { connect } from 'react-redux'
import A from '../../../A'

type Props = {
  id: string
}

const Expedition = React.memo(({ id }: Props) => {
  return (
    <React.Fragment>
      <A href="/expeditions">Zurück</A>
      <p>Expedition {id}</p>
    </React.Fragment>
  )
})

Expedition.displayName = 'Expedition'

export default connect(
  null,
  null
)(Expedition)
