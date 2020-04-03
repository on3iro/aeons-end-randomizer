import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'
import * as types from 'types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'

import WinOverview from './WinOverview'
import FinishExpeditionButton from './FinishExpeditionButton'

type OwnProps = {
  battle: types.OldStyleBattle
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

const ExpeditionFinished = ({ hide, expedition }: Props) => {
  const handleFinish = useCallback(() => {
    hide()
  }, [hide])

  return (
    <React.Fragment>
      <ModalBodyWrapper>
        <WinOverview info={expedition.score.toString()} />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <FinishExpeditionButton handleFinish={handleFinish} />
      </ModalFooterWrapper>
    </React.Fragment>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(ExpeditionFinished))
