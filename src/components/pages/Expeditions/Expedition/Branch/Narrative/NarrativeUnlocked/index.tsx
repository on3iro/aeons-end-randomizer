import React, { useCallback } from 'react'

import * as types from 'types'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import ModalFooterWrapper from 'components/atoms/ModalFooterWrapper'
import Text from 'components/pages/Expeditions/Expedition/Branch/Narrative/NarrativeUnlocked/Text'
import Descisions from 'components/pages/Expeditions/Expedition/Branch/Narrative/NarrativeUnlocked/Descisions'

type Props = {
  hide: () => void
  narrative: types.Narrative
}

const NarrativeUnlocked = ({ narrative, hide }: Props) => {
  const handleClick = useCallback(() => {
    hide()
  }, [hide])

  return (
    <>
      <ModalBodyWrapper hasFooter={true}>
        <Text>{narrative.config.text}</Text>
      </ModalBodyWrapper>

      <ModalFooterWrapper>
        <Descisions narrative={narrative} clickCallback={handleClick} />
      </ModalFooterWrapper>
    </>
  )
}

export default React.memo(NarrativeUnlocked)
