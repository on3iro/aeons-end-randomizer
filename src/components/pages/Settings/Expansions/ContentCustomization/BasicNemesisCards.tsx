import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import NemesisCardListItem from './NemesisCardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedBasicNemesisCards: selectors.Settings.Expansions.BasicNemesisCards.getBasicNemesisCardsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleBasicNemesisCardChange:
    actions.Settings.Expansions.BasicNemesisCards.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const BasicNemesisCards = ({
  selectedBasicNemesisCards,
  handleBasicNemesisCardChange,
}: Props) => (
  <React.Fragment>
    {selectedBasicNemesisCards.length > 0 && (
      <NemesisCardListItem
        entities={selectedBasicNemesisCards}
        handleCheckboxChange={handleBasicNemesisCardChange}
        label="Basic Nemesis Cards"
      />
    )}
  </React.Fragment>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(BasicNemesisCards))
