import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import Modal from '../../../Modal'

import Body from './Body'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  card: selectors.Settings.Expansions.SelectedCards.getCardById(state, props),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  visible: boolean
  closeModal: any
  theme: any
}

const SupplyModal = React.memo(
  ({ visible, closeModal, card, selectedExpansions, theme }: Props) => {
    const { expansions } = selectedExpansions

    return (
      <Modal
        visible={visible}
        titleColor={
          card
            ? theme.colors.cards[card.type.toLowerCase()].color
            : theme.colors.text
        }
        titleLabel={card ? card.name : ''}
        body={
          card ? (
            <Body
              card={card}
              expansionName={expansions[card.expansion].name || ''}
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
  )(SupplyModal)
)
