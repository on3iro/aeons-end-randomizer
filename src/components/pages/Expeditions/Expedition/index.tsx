import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { RootState, selectors } from '../../../../Redux/Store'

import A from '../../../A'
import Barracks from './Barracks'

// FIXME fix prop typing
const mapStateToProps = (state: RootState, props: any) => ({
  expedition: selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    props.id
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    id: string
  }

const Expedition = React.memo(({ expedition }: Props) => {
  const isLoading = !expedition

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <React.Fragment>
      <A to="/expeditions">Zurück</A>
      <p>Expedition {expedition.name}</p>
      <Barracks expedition={expedition} />
    </React.Fragment>
  )
})

Expedition.displayName = 'Expedition'

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Expedition)
