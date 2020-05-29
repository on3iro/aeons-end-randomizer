import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import NemesisCardListItem from './NemesisCardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  basicNemesisCards: selectors.Settings.Expansions.BasicNemesisCards.getContentByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleBasicNemesisCardChange:
    actions.Settings.Expansions.BasicNemesisCards.selected.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const BasicNemesisCards = ({
  basicNemesisCards,
  handleBasicNemesisCardChange,
}: Props) => (
  <React.Fragment>
    {basicNemesisCards.length > 0 && (
      <NemesisCardListItem
        entities={basicNemesisCards}
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
