import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { RootState, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'

import InfoItem from '../../../molecules/InfoItem'

import P from '../../../atoms/P'
import ModalBodyWrapper from '../../../atoms/ModalBodyWrapper'
import ModalFooterWrapper from '../../../atoms/ModalFooterWrapper'

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

const ExpeditionFinished = React.memo(({ hide, expedition }: Props) => {
  const handleFinish = useCallback(() => {
    hide()
  }, [hide])

  return (
    <React.Fragment>
      <ModalBodyWrapper>
        <P>You defeated all nemeses. New Gravehold is safe... for now.</P>
        <InfoItem label="Score" info={expedition.score.toString()} />
      </ModalBodyWrapper>
      <ModalFooterWrapper>
        <Button
          onClick={handleFinish}
          size="small"
          variant="contained"
          color="primary"
        >
          Finish Expedition
        </Button>
      </ModalFooterWrapper>
    </React.Fragment>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExpeditionFinished)
