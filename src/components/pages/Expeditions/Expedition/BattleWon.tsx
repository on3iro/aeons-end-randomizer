import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions } from '../../../../Redux/Store'
import * as types from '../../../../types'

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    battle: types.Battle
    hide: () => void
    showNext?: () => void
  }

const BattleWon = React.memo(
  ({ battle, hide, finishBattle, showNext }: Props) => {
    const handleFinish = useCallback(() => {
      finishBattle(battle)
      hide()

      if (showNext) {
        showNext()
      }
    }, [battle, hide, finishBattle, showNext])

    return (
      <div>
        <p>TODO show treasure and stuff</p>
        <button onClick={handleFinish}>Unlock next battle</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleWon)
