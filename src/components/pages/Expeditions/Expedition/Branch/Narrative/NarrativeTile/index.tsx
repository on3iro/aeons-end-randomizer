import React from 'react'
import { withTheme } from 'styled-components/macro'

import * as types from 'aer-types/types'

import Tile from 'components/molecules/Tile'

import Locked from '../../Locked'
import Unlocked from './Unlocked'

import LockIcon from '@material-ui/icons/Lock'
import UnlockedIcon from './UnlockedIcon'

type Props = {
  narrative: types.Narrative
  theme?: any
}

const RenderBody = ({ narrative }: Props) => {
  switch (narrative.status) {
    case 'locked':
      return (
        <Locked>
          <LockIcon />
        </Locked>
      )

    case 'unlocked':
    case 'finished':
    default: {
      return (
        <Unlocked status={narrative.status}>
          <UnlockedIcon className="ra ra-lg ra-quill-ink" />
        </Unlocked>
      )
    }
  }
}

const NarrativeTile = ({ narrative, theme }: Props) => {
  return (
    <Tile
      body={<RenderBody narrative={narrative} />}
      bgColor={
        narrative.status === 'finished'
          ? theme.colors.turnOrderCards.player3.light
          : theme.colors.turnOrderCards.player3.normal
      }
      fontColor={theme.colors.text.primary}
    />
  )
}

export default withTheme(React.memo(NarrativeTile))
