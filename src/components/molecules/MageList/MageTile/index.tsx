import React from 'react'

import { withTheme } from 'styled-components/macro'

import { Mage } from '../../../../types'

import Tile from '../../Tile'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  mage: Mage
  playerNumber: number
  showMageDetails: Function // FIXME signature
  theme: any
}

const MageTile = React.memo(
  ({ mage, playerNumber, showMageDetails, theme }: Props) => {
    const bgColor = theme.colors.playerColors[`player${playerNumber}`]
      ? theme.colors.playerColors[`player${playerNumber}`].normal
      : '#555' // FIXME fallback color for more than 4 mages in expeditions

    return (
      <Wrapper item xs={6} md={3}>
        <Tile
          body={<Body mage={mage} />}
          bgColor={bgColor}
          fontColor={theme.colors.white}
          icon={theme.icons.mage}
          iconColor={theme.colors.cards.mage.color}
          showDetails={() => showMageDetails(mage.id, playerNumber)} // FIXME useCallback
        />
      </Wrapper>
    )
  }
)

MageTile.displayName = 'MageTile'

export default withTheme(MageTile)
