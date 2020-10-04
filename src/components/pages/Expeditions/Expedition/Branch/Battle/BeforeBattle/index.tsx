import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from 'Redux/Store'
import * as types from 'aer-types/types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'
import BattleOverview from 'components/pages/Expeditions/Expedition/Branch/Battle/BeforeBattle/BattleOverview'
import StartBattleButton from 'components/pages/Expeditions/Expedition/Branch/Battle/BeforeBattle/StartBattleButton'

type OwnProps = {
  hide: () => void
  showNext?: () => void
  battle: types.Battle
  nemesis?: types.Nemesis
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  upgradedBasicNemsisCards: selectors.getUpgradedBasicNemesisCardsByExpeditionId(
    state,
    { expeditionId: ownProps.battle.expeditionId }
  ),
})

const mapDispatchToProps = {
  startBattle: actions.Expeditions.Expeditions.startBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BeforeBattle = ({
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
    <React.Fragment>
      <ModalBodyWrapper hasFooter={true}>
        <BattleOverview
          info={battle.tries.toString()}
          specialRules={battle.config.specialRules}
          onLoss={battle.config.onLoss}
          nemesis={nemesis}
          upgradedBasicNemsisCards={upgradedBasicNemsisCards}
        />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <StartBattleButton
          handleClick={handleClick}
          data-test="btn-start-battle"
        />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BeforeBattle))
