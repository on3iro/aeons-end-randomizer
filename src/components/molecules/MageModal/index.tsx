import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'
import * as types from 'aer-types/types'

import { RootState, selectors } from '../../../Redux/Store'

import { RenderModalType } from '../../../hooks/useModal'

import ModalBodyWrapper from '../../atoms/ModalBodyWrapper'

import MageInformation from '../MageInformation'

const mapStateToProps = (state: RootState, _: any) => ({
  expansions:
    selectors.Settings.Expansions.Expansions.content.getExpansionsWithLanguageFallback(
      state
    ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  mage: types.Mage
  player: 'player1' | 'player2' | 'player3' | 'player4'
  theme: any
  RenderModal: RenderModalType
}

const MageModal = ({ player, mage, expansions, theme, RenderModal }: Props) => {
  const titleColor = player
    ? theme.colors.playerColors[player].normal
    : theme.colors.playerColors['player1'].normal

  const titleLabel = mage ? mage.name : ''
  const body = mage ? (
    <MageInformation
      mage={mage}
      player={player}
      expansion={expansions[mage.expansion]}
    />
  ) : (
    'No content'
  )

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <ModalBodyWrapper>{body}</ModalBodyWrapper>
    </RenderModal>
  )
}

export default withTheme(connect(mapStateToProps, null)(React.memo(MageModal)))
