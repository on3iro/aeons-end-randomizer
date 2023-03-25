import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from 'Redux/Store'

import * as types from 'aer-types/types'

import { RenderModalType } from 'hooks/useModal'

import Body from 'components/molecules/BasicNemesisCardInformation'

import ModalBodyWrapper from 'components/atoms/ModalBodyWrapper'
import P from 'components/atoms/P'

const mapStateToProps = (state: RootState, _: any) => ({
  expansions:
    selectors.Settings.Expansions.Expansions.content.getExpansionsWithLanguageFallback(
      state
    ),
})

type Props = ReturnType<typeof mapStateToProps> & {
  card: types.BasicNemesisCard | types.UpgradedBasicNemesisCard
  theme: any
  RenderModal: RenderModalType
}

const BasicNemesisCardModal = ({
  card,
  expansions,
  theme,
  RenderModal,
}: Props) => {
  const titleColor = card
    ? theme.colors.turnOrderCards['nemesis'].normal
    : theme.colors.text.primary
  const titleLabel = card ? card.name : ''

  return (
    <RenderModal titleColor={titleColor} titleLabel={titleLabel}>
      <ModalBodyWrapper>
        {card ? (
          <Body card={card} expansion={expansions[card.expansion]} />
        ) : (
          <P>No content</P>
        )}
      </ModalBodyWrapper>
    </RenderModal>
  )
}

export default withTheme(
  connect(mapStateToProps, null)(React.memo(BasicNemesisCardModal))
)
