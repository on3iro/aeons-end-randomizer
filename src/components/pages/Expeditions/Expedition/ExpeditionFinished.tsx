import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

type OwnProps = {
  battle: types.Battle
  hide: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    expedition: selectors.Expeditions.Expeditions.getExpeditionById(state, {
      expeditionId: ownProps.battle.expeditionId,
    }),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const ExpeditionFinished = React.memo(({ battle, hide, expedition }: Props) => {
  const handleFinish = useCallback(() => {
    hide()
  }, [battle, hide])

  return (
    <div>
      <p>You defeted all nemeses. New Gravehold is safe... for now.</p>
      <p>
        <b>Score:</b> {expedition.score}
      </p>
      <button onClick={handleFinish}>Finish Expedition</button>
    </div>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpeditionFinished)
