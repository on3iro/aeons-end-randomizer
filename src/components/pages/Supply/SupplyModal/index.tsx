import React from 'react'
import { withTheme } from 'styled-components/macro'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { ICard } from '../../../../types'

import Modal from '../../../Modal'

import ExpansionInfo from './ExpansionInfo'
import TypeInfo from './TypeInfo'
import CostInfo from './CostInfo'
import SectionHeadline from './SectionHeadline'
import Description from './Description'
import Keywords from './Keywords'
import Keyword from './Keyword'

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
  selectedExpansions: any
  theme: any
}

const SupplyModal = React.memo(
  ({ visible, closeModal, card, selectedExpansions, theme }: Props) => {
    const { expansions } = selectedExpansions

    const renderKeywords = (keywords: string[], type: string) =>
      keywords.map(keyword => (
        <Keyword key={keyword} type={type.toLowerCase()}>
          {keyword}
        </Keyword>
      ))

    const renderSupplyModalBody = (card: ICard) => (
      <React.Fragment>
        <ExpansionInfo
          expansion={card.expansion ? expansions[card.expansion].name : ''}
        />
        <TypeInfo type={card.type} />
        <CostInfo cost={card.cost} />
        <SectionHeadline type={card.type.toLowerCase()}>Effect</SectionHeadline>
        <Description
          dangerouslySetInnerHTML={{
            __html: card.effect || '',
          }}
        />
        {card.keywords ? (
          <Keywords>
            {renderKeywords(card.keywords, card.type.toLowerCase())}
          </Keywords>
        ) : null}
      </React.Fragment>
    )

    return (
      <Modal
        visible={visible}
        titleColor={theme.colors.cards[card.type.toLowerCase()].color}
        titleLabel={card.name}
        body={card ? renderSupplyModalBody(card) : 'No content'}
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
