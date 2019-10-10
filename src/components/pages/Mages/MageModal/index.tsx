import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import Modal from '../../../Modal'

import Body from './Body'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  mage: selectors.Settings.Expansions.SelectedMages.getMageById(state, props),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

// FIXME types
type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  player: 'player1' | 'player2' | 'player3' | 'player4'
  visible: boolean
  closeModal: any
  selectedExpansions: any
  theme: any
}

const MageModal = React.memo(
  ({ player, visible, closeModal, mage, selectedExpansions, theme }: Props) => {
    const { expansions } = selectedExpansions

    return (
      <Modal
        visible={visible}
        titleColor={
          player
            ? theme.colors.playerColors[player].normal
            : theme.colors.playerColors['player1'].normal
        }
        titleLabel={mage ? mage.name : ''}
        body={
          mage ? (
            <Body
              mage={mage}
              player={player}
              expansionName={expansions[mage.expansion].name || ''}
            />
          ) : (
            'No content'
          )
        }
        closeModal={closeModal}
      />
    )
  }
)

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(MageModal)
)
