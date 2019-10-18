import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../Redux/Store'

import { RenderModalType } from '../../../hooks/useModal'

import Body from '../SupplyCardInformation'

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
  RenderModal: RenderModalType
}

const SupplyModal = React.memo(
  ({ card, selectedExpansions, theme, RenderModal }: Props) => {
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
  )(SupplyModal)
)
