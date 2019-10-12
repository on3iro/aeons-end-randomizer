import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { RenderModalType } from '../../../../hooks/useModal'

import Body from './Body'

// FIXME refine type
const mapStateToProps = (state: RootState, props: any) => ({
  nemesis: selectors.Settings.Expansions.SelectedNemeses.getNemesisById(
    state,
    props
  ),
  selectedExpansions: selectors.Settings.Expansions.SelectedExpansions.getSelectedExpansionsState(
    state
  ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  id: string
  theme: any
  RenderModal: RenderModalType
}

const NemesisModal = React.memo(
  ({ nemesis, selectedExpansions, theme, RenderModal }: Props) => {
    const { expansions } = selectedExpansions

    const titleColor = theme.colors.turnOrderCards.nemesis.normal
    const titleLabel = nemesis ? nemesis.name : ''
    const body = nemesis ? (
      <Body
        nemesis={nemesis}
        expansionName={expansions[nemesis.expansion].name || ''}
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
  )(NemesisModal)
)
