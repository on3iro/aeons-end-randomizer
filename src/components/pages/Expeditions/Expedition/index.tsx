import React from 'react'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'

import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'

import BackLink from 'components/molecules/BackLink'

import Barracks from './Barracks'
import Battle from './Battle'
import Header from './Header'

const renderBranches = (branches: types.Branches) =>
  Object.values(branches)
    // FIXME as soon as we handle all branch types we should fix the casting in line 17
    .map((branch, index) => (
      <Battle
        key={branch.id}
        battle={branch as types.Battle}
        data-test={`battle-${index}`}
      />
    ))

type OwnProps = {
  id: string
}

const mapStateToProps = (state: RootState, props: OwnProps) => ({
  expedition: selectors.Expeditions.Expeditions.getExpeditionById(state, {
    expeditionId: props.id,
  }),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Expedition = ({ expedition }: Props) => {
  const isLoading = !expedition

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <React.Fragment>
      <BackLink
        to="/expeditions"
        label="Back to overview"
        data-test="backlink"
      />
      <Header
        title={expedition.name || expedition.id}
        score={expedition.score}
      />

      {renderBranches(expedition.sequence.branches)}
      <Barracks expedition={expedition} />
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Expedition))
