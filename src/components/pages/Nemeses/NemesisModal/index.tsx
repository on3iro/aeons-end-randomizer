import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { RenderModalType } from '../../../../hooks/useModal'

import NemesisInformation from '../../../molecules/NemesisInformation'

type OwnProps = {
  id: string
  theme: any
  RenderModal: RenderModalType
}

// FIXME
// unfortunately ownProps has to have any type currently.
// This is probably due to a typscript shortcoming, which is unable to
// unwrap withTheme() and connect() at once.
const mapStateToProps = (state: RootState, ownProps: any) => ({
  nemesis: selectors.Settings.Expansions.SelectedNemeses.getNemesisById(
    state,
    ownProps
  ),
})

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const NemesisModal = React.memo(({ theme, RenderModal, nemesis }: Props) => {
  const titleColor = theme.colors.turnOrderCards.nemesis.normal
  const titleLabel = nemesis ? nemesis.name : ''

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <NemesisInformation nemesis={nemesis} />
    </RenderModal>
  )
})

export default withTheme(
  connect(
    mapStateToProps,
    null
  )(NemesisModal)
)
