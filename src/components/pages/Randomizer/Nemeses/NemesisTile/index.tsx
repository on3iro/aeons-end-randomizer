import React from 'react'
import { withTheme } from 'styled-components/macro'

import { Nemesis } from 'aer-types'

import Tile from 'components/molecules/Tile'

import Body from './Body'

type Props = {
  nemesis: Nemesis
  showNemesisDetails: (id: string) => void
  theme: any
}

const NemesisTile = ({ nemesis, showNemesisDetails, theme }: Props) => {
  return (
    <Tile
      body={<Body nemesis={nemesis} />}
      bgColor={theme.colors.turnOrderCards.nemesis.normal}
      fontColor={theme.colors.white}
      icon={theme.icons.nemesis}
      iconColor={theme.colors.cards.nemesis.color}
      showDetails={() => showNemesisDetails(nemesis.id)}
    />
  )
}

export default withTheme(React.memo(NemesisTile))
