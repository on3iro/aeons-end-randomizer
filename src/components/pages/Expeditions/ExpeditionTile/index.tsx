import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Expedition } from '../../../../types'

import A from '../../../atoms/A'
import Tile from '../../../molecules/Tile'

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

export default withTheme(ExpeditionTile)
