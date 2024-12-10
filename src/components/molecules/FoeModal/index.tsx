import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import { RenderModalType } from 'hooks/useModal'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'

import FoeInformation from '../FoeInformation'

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
  foe: ownProps.id
    ? selectors.Settings.Expansions.Foes.content.getById(state, ownProps)
    : undefined,
})

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const FoeModal = ({ theme, RenderModal, foe }: Props) => {
  if (!foe) {
    return null
  }

  const titleColor = theme.colors.cards.foe.color
  const titleLabel = foe ? foe.name : ''

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <ModalBodyWrapper>
        <FoeInformation foe={foe} theme={theme} />
      </ModalBodyWrapper>
    </RenderModal>
  )
}

export default withTheme(
  connect(mapStateToProps, null)(React.memo(FoeModal))
)
