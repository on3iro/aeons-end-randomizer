import React, { useCallback } from 'react'

import { withTheme } from 'styled-components/macro'

import { Mage } from '../../../../types'
import { useModal } from '../../../../hooks/useModal'

import Tile from '../../Tile'
import MageModal from '../../MageModal'

import Wrapper from './Wrapper'
import Body from './Body'

type Props = {
  mage: Mage
  playerNumber: number
  theme: any
}

type Player = 'player1' | 'player2' | 'player3' | 'player4'

const MageTile = React.memo(({ mage, playerNumber, theme }: Props) => {
  const { show, RenderModal } = useModal()

  const player =
    playerNumber >= 1 && playerNumber <= 4
      ? (`player${playerNumber}` as Player)
      : 'default'

  const bgColor = theme.colors.playerColors[player].normal

  const handleMageDetails = useCallback(() => {
    show()
  }, [show])

  return (
    <Wrapper item xs={6} md={3}>
      <Tile
        body={<Body mage={mage} />}
        bgColor={bgColor}
        fontColor={theme.colors.white}
        icon={theme.icons.mage}
        iconColor={theme.colors.cards.mage.color}
        showDetails={handleMageDetails}
      />
      <MageModal mage={mage} RenderModal={RenderModal} player={player} />
    </Wrapper>
  )
})

MageTile.displayName = 'MageTile'

export default withTheme(MageTile)
