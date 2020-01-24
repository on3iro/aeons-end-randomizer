import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Expedition } from '../../../../types'

import Tile from '../../../molecules/Tile'
import Link from 'components/atoms/Link'

import Body from './Body'

type Props = {
  url: string
  expedition: Expedition
  theme: any
}

const ExpeditionTile = ({ url, expedition, theme }: Props) => (
  <Link to={url}>
    <Tile
      body={<Body expedition={expedition} />}
      bgColor={theme.colors.white}
      fontColor={theme.colors.text.primary}
    />
  </Link>
)

export default withTheme(ExpeditionTile)
