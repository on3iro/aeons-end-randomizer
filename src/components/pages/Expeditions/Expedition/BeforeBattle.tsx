import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import UpgradedBasicNemesisCardList from '../../../molecules/UpgradedBasicNemesisCardList'
import NemesisInformation from '../../../molecules/NemesisInformation'

type OwnProps = {
  hide: () => void
  showNext?: () => void
  battle: types.Battle
  nemesis?: types.Nemesis
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  upgradedBasicNemsisCards: selectors.getUpgradedBasicNemesisCardsByExpeditionId(
    state,
    ownProps.battle.expeditionId
  ),
})

const mapDispatchToProps = {
  startBattle: actions.Expeditions.Expeditions.startBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BeforeBattle = React.memo(
  ({
    hide,
    battle,
    nemesis,
    startBattle,
    showNext,
    upgradedBasicNemsisCards,
  }: Props) => {
    const handleClick = useCallback(() => {
      hide()
      startBattle(battle)

      if (showNext) {
        showNext()
      }
    }, [hide, battle, startBattle, showNext])

    return (
      <div>
        <p>
          <b>Tries:</b> {battle.tries}
        </p>
        <NemesisInformation nemesis={nemesis} />
        <UpgradedBasicNemesisCardList
          upgradedBasicNemsisCards={upgradedBasicNemsisCards}
        />
        <button onClick={handleClick}>Start battle</button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeforeBattle)
