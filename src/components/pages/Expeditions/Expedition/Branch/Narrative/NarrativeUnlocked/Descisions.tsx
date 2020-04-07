import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import * as types from 'types'
import { RootState, actions } from 'Redux/Store'

import DescisionButton from 'components/pages/Expeditions/Expedition/Branch/Narrative/NarrativeUnlocked/DescisionButton'

const renderDescisions = (
  descisions: string[],
  handleClick: (descision: number) => void
) => {
  return descisions.map((descision, index) => (
    <DescisionButton
      key={index}
      label={descision}
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

const Descisions = ({
  narrative,
  clickCallback,
  resolveNarrative,
  finishExpedition,
}: Props) => {
  const { descisions } = narrative.config
  const { expeditionId, id } = narrative

  const clickHandler = useCallback(
    (descision: number) => {
      clickCallback()
      resolveNarrative({
        expeditionId,
        narrativeId: id,
        descision,
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
      {descisions ? (
        renderDescisions(descisions, clickHandler)
      ) : (
        <DescisionButton
          label="Finish Expedition"
          handleClick={finishHandler}
        />
      )}
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Descisions))
