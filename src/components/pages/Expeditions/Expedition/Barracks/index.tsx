import React from 'react'

import * as types from '../../../../../types'
import { useModal } from '../../../../../hooks/useModal'

import ShuffleButton from '../../../../atoms/ShuffleButton'

import BarracksContent from './BarracksContent'

type Props = {
  expedition: types.Expedition
}

const Barracks = React.memo(({ expedition }: Props) => {
  const { show, RenderModal } = useModal()

  return (
    <React.Fragment>
      <RenderModal titleColor="#333" titleLabel="Barracks">
        <BarracksContent expedition={expedition} />
      </RenderModal>
      <ShuffleButton onClick={show} color="primary" variant="extended">
        Show Barracks
      </ShuffleButton>
    </React.Fragment>
  )
})

export default Barracks
