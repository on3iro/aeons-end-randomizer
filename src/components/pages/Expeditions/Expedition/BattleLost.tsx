import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from '../../../../Redux/Store'
import * as types from '../../../../types'

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  acceptLoss: actions.Expeditions.Expeditions.acceptLoss,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    battle: types.Battle
    hide: () => void
    showNext?: () => void
  }

const BattleLost = React.memo(
  ({ battle, hide, acceptLoss, showNext }: Props) => {
    const handleAccept = useCallback(() => {
      acceptLoss(battle)
      hide()

      if (showNext) {
        showNext()
      }
    }, [hide, battle, acceptLoss, showNext])

    return (
      <div>
        <p>
          TODO show fields to roll gem/relic/spell, treasure (tier dependent),
          mage
        </p>
        <button onClick={handleAccept}>Accept choice</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleLost)
