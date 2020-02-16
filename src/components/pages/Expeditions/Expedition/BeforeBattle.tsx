import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import UpgradedBasicNemesisCardList from '../../../molecules/UpgradedBasicNemesisCardList'
import NemesisInformation from '../../../molecules/NemesisInformation'

import ModalBodyWrapper from '../../../atoms/ModalBodyWrapper'
import ModalFooterWrapper from '../../../atoms/ModalFooterWrapper'
import InfoItem from '../../../molecules/InfoItem'
import SectionHeadline from '../../../atoms/SectionHeadline'

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
        <InfoItem label="Tries" info={battle.tries.toString()} />
        <SectionHeadline>{nemesis ? nemesis.name : 'Nemesis'}</SectionHeadline>
        <NemesisInformation nemesis={nemesis} />
        <UpgradedBasicNemesisCardList
          upgradedBasicNemsisCards={upgradedBasicNemsisCards}
        />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          Start battle
        </Button>
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BeforeBattle))
