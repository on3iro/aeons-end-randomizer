import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Expedition } from 'aer-types/types'

import A from 'components/atoms/A'
import Tile from 'components/molecules/Tile'

import Body from './Body'

type Props = {
  url: string
  expedition: Expedition
  theme: any
}

const ExpeditionTile = ({ url, expedition, theme }: Props) => (
  <A to={url}>
    <Tile
      body={<Body expedition={expedition} />}
      bgColor={theme.colors.white}
      fontColor={theme.colors.text.primary}
    />
  </A>
)

export default withTheme(React.memo(ExpeditionTile))
