import React, { useCallback } from 'react'
import { connect } from 'react-redux'

import { withTheme } from 'styled-components/macro'

import { Mage } from 'aer-types/types'
import { useModal } from '../../../../hooks/useModal'

import Tile from '../../Tile'
import MageModal from '../../MageModal'

import Wrapper from './Wrapper'
import Body from './Body'
import { RootState, selectors } from 'Redux/Store'

type Player = 'player1' | 'player2' | 'player3' | 'player4'

type OwnProps = {
  mage: Mage
  playerNumber: number
  theme: any
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  return {
    expansion:
      selectors.Settings.Expansions.Expansions.content.getExpansionById(state, {
        expansionId: ownProps.mage.expansion,
      }),
  }
}

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const MageTile = ({ mage, playerNumber, theme, expansion }: Props) => {
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
    <Wrapper item xs={12} sm={6} md={3} data-test="mage-tile">
      <Tile
        body={<Body mage={mage} expansion={expansion} />}
        bgColor={bgColor}
        fontColor={theme.colors.white}
        icon={theme.icons.mage}
        iconColor={theme.colors.cards.mage.color}
        showDetails={handleMageDetails}
      />
      <MageModal mage={mage} RenderModal={RenderModal} player={player} />
    </Wrapper>
  )
}

export default withTheme(
  connect(mapStateToProps, mapDispatchToProps)(React.memo(MageTile))
)
