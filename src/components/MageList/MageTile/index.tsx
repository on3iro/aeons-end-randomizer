import React from 'react'

import { withTheme } from 'styled-components/macro'

import { Mage } from '../../../types'

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
    return (
      <Wrapper item xs={6} md={3}>
        <Tile
          body={<Body mage={mage} />}
          bgColor={theme.colors.playerColors[`player${playerNumber}`].normal}
          fontColor={theme.colors.white}
          icon={theme.icons.mage}
          iconColor={theme.colors.cards.mage.color}
          showDetails={() => showMageDetails(mage.id, playerNumber)}
        />
      </Wrapper>
    )
  }
)

MageTile.displayName = 'MageTile'

export default withTheme(MageTile)
