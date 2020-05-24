import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import NemesisCardListItem from './NemesisCardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedUpgradedBasicNemesisCards: selectors.Settings.Expansions.UpgradedBasicNemesisCards.getUpgradedBasicNemesisCardsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleUpgradedBasicNemesisCardChange:
    actions.Settings.Expansions.UpgradedBasicNemesisCards.selected.toggle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const UpgradedBasicNemesisCards = ({
  selectedUpgradedBasicNemesisCards,
  handleUpgradedBasicNemesisCardChange,
}: Props) => (
  <React.Fragment>
    {selectedUpgradedBasicNemesisCards.length > 0 && (
      <NemesisCardListItem
        entities={selectedUpgradedBasicNemesisCards}
        handleCheckboxChange={handleUpgradedBasicNemesisCardChange}
        label="Upgraded Basic Nemesis Cards"
      />
    )}
  </React.Fragment>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(UpgradedBasicNemesisCards))
