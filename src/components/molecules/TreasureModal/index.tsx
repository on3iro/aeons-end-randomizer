import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import * as types from 'types'

import { RenderModalType } from 'hooks/useModal'

import Body from 'components/molecules/TreasureInformation'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import P from 'components/atoms/P'

// FIXME refine type (Bug due to withTheme)
const mapStateToProps = (state: RootState, props: any) => ({
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  card: types.Treasure
  theme: any
  RenderModal: RenderModalType
}

const TreasureModal = React.memo(
  ({ card, selectedExpansions, theme, RenderModal }: Props) => {
    const { expansions } = selectedExpansions

    const titleColor = theme.colors.text.primary
    const titleLabel = card ? card.name : ''

    return (
      <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
        <ModalBodyWrapper>
          {card ? (
            <Body
              card={card}
              expansionName={expansions[card.expansion].name || ''}
            />
          ) : (
            <P>No content</P>
          )}
        </ModalBodyWrapper>
      </RenderModal>
    )
  }
)

export default withTheme(connect(mapStateToProps, null)(TreasureModal))
