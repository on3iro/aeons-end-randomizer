import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, selectors } from 'Redux/Store'
import BranchWrapper from '../BranchWrapper'
import NarrativeTile from './NarrativeTile'
import { handleNarrativeClick } from 'components/pages/Expeditions/Expedition/Branch/Narrative/handleNarrativeClick'
import { useModal } from 'hooks/useModal'
import NarrativeUnlocked from './NarrativeUnlocked'
import ExpeditionFinished from '../ExpeditionFinished'

type OwnProps = {
  narrative: types.Narrative
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => ({
  expeditionIsFinished: selectors.Expeditions.Expeditions.getExpeditionIsFinished(
    state,
    { expeditionId: ownProps.narrative.expeditionId }
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Narrative = ({ narrative, expeditionIsFinished, ...rest }: Props) => {
  const narrativeUnlocked = useModal()
  const expeditionComplete = useModal()

  const handleClick = useCallback(
    () =>
      handleNarrativeClick({
        narrative,
        expeditionIsFinished,
        expeditionComplete,
        narrativeUnlocked,
      }),
    [narrative, expeditionIsFinished, expeditionComplete, narrativeUnlocked]
  )

  return (
    <div {...rest}>
      <BranchWrapper
        disabled={
          narrative.status === 'locked' || narrative.status === 'finished'
        }
        onClick={handleClick}
        data-test="btn-narrative"
      >
        <NarrativeTile narrative={narrative} />
      </BranchWrapper>

      <narrativeUnlocked.RenderModal titleColor="#333" titleLabel="Narrative">
        <NarrativeUnlocked
          hide={narrativeUnlocked.hide}
          narrative={narrative}
        />
      </narrativeUnlocked.RenderModal>

      <expeditionComplete.RenderModal
        titleColor="#333"
        titleLabel="Congratulations"
      >
        <ExpeditionFinished branch={narrative} hide={expeditionComplete.hide} />
      </expeditionComplete.RenderModal>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Narrative))
