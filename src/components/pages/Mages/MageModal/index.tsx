import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { RenderModalType } from '../../../../hooks/useModal'

import Body from './Body'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  mage: selectors.Settings.Expansions.SelectedMages.getMageById(state, props),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  player: 'player1' | 'player2' | 'player3' | 'player4'
  theme: any
  RenderModal: RenderModalType
}

const MageModal = React.memo(
  ({ player, mage, selectedExpansions, theme, RenderModal }: Props) => {
    const { expansions } = selectedExpansions

    const titleColor = player
      ? theme.colors.playerColors[player].normal
      : theme.colors.playerColors['player1'].normal

    const titleLabel = mage ? mage.name : ''
    const body = mage ? (
      <Body
        mage={mage}
        player={player}
        expansionName={expansions[mage.expansion].name || ''}
      />
    ) : (
      'No content'
    )

    return (
      <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
        {body}
      </RenderModal>
    )
  }
)

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(MageModal)
)
