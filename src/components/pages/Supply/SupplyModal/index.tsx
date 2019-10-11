import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

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
  theme: any
  renderModal: Function
}

const SupplyModal = React.memo(
  ({ card, selectedExpansions, theme, renderModal }: Props) => {
    const { expansions } = selectedExpansions

    const titleColor = card
      ? theme.colors.cards[card.type.toLowerCase()].color
      : theme.colors.text
    const titleLabel = card ? card.name : ''
    const body = card ? (
      <Body card={card} expansionName={expansions[card.expansion].name || ''} />
    ) : (
      'No content'
    )

    return renderModal(titleColor, titleLabel, body)
  }
)

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(SupplyModal)
)
