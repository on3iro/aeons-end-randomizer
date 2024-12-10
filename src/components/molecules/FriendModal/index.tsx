import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import { RenderModalType } from 'hooks/useModal'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'

import FriendInformation from '../FriendInformation'

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
  friend: ownProps.id
    ? selectors.Settings.Expansions.Friends.content.getById(state, ownProps)
    : undefined,
})

type Props = ReturnType<typeof mapStateToProps> & OwnProps

const FriendModal = ({ theme, RenderModal, friend }: Props) => {
  if (!friend) {
    return null
  }

  const titleColor = theme.colors.cards.friend.color
  const titleLabel = friend ? friend.name : ''

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <ModalBodyWrapper>
        <FriendInformation friend={friend} theme={theme} />
      </ModalBodyWrapper>
    </RenderModal>
  )
}

export default withTheme(
  connect(mapStateToProps, null)(React.memo(FriendModal))
)
