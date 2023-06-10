import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import { RenderModalType } from 'hooks/useModal'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'

import NemesisInformation from '../NemesisInformation'

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
  nemesis: ownProps.id
    ? selectors.Settings.Expansions.Nemeses.content.getById(state, ownProps)
    : undefined,
})

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const NemesisModal = ({ theme, RenderModal, nemesis }: Props) => {
  if (!nemesis) {
    return null
  }

  const titleColor = theme.colors.turnOrderCards.nemesis.normal
  const titleLabel = nemesis ? nemesis.name : ''

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <ModalBodyWrapper>
        <NemesisInformation nemesis={nemesis} />
      </ModalBodyWrapper>
    </RenderModal>
  )
}

export default withTheme(
  connect(mapStateToProps, null)(React.memo(NemesisModal))
)
