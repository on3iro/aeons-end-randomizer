import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'aer-types/types'
import { RootState, actions } from 'Redux/Store'

import DecisionButton from 'components/pages/Expeditions/Expedition/Branch/Narrative/NarrativeUnlocked/DecisionButton'

const renderDecisions = (
  decisions: string[],
  handleClick: (decision: number) => void
) => {
  return decisions.map((decision, index) => (
    <DecisionButton
      key={index}
      label={decision}
      handleClick={() => handleClick(index)}
    />
  ))
}

type OwnProps = {
  narrative: types.Narrative
  clickCallback: () => void
}

const mapStateToProps = (state: RootState) => ({})

const mapDispatchToProps = {
  resolveNarrative: actions.Expeditions.Expeditions.resolveNarrative,
  finishExpedition: actions.Expeditions.Expeditions.finishExpedition,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const Decisions = ({
  narrative,
  clickCallback,
  resolveNarrative,
  finishExpedition,
}: Props) => {
  const { decisions } = narrative.config
  const { expeditionId, id } = narrative

  const clickHandler = useCallback(
    (decision: number) => {
      clickCallback()
      resolveNarrative({
        expeditionId,
        narrativeId: id,
        decision,
      })
    },
    [clickCallback, resolveNarrative, expeditionId, id]
  )

  const finishHandler = useCallback(() => {
    clickCallback()
    finishExpedition(narrative)
  }, [finishExpedition, narrative, clickCallback])

  return (
    <>
      {decisions ? (
        renderDecisions(decisions, clickHandler)
      ) : (
        <DecisionButton label="Finish Expedition" handleClick={finishHandler} />
      )}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Decisions))
