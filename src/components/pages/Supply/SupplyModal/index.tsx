import React from 'react'

import { connect } from 'react-redux'

import { RootState, selectors } from '../../../../Redux/Store'

import { ICard } from '../../../../types'

import Modal from '../../../Modal'

import Title from './Title'
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
  visible: boolean | string
  closeModal: any
  selectedExpansions: any
}

const SupplyModal = React.memo(
  ({ visible, closeModal, card, selectedExpansions }: Props) => {
    const { expansions } = selectedExpansions

    const renderKeywords = (keywords: string[], type: string) =>
      keywords.map(keyword => (
        <Keyword key={keyword} type={type.toLowerCase()}>
          {keyword}
        </Keyword>
      ))

    const renderSupplyModalTitle = (card: ICard) => (
      <Title variant="h1" type={card.type.toLowerCase()}>
        {card.name}
      </Title>
    )

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
        title={card ? renderSupplyModalTitle(card) : 'No title'}
        body={card ? renderSupplyModalBody(card) : 'No content'}
        closeModal={closeModal}
      />
    )
  }
)

export default connect(
  mapStateToProps,
  null
)(SupplyModal)
