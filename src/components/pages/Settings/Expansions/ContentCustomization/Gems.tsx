import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../Redux/Store'

import CardListItem from './CardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedGems: selectors.Settings.Expansions.SelectedCards.getGemsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleGemChange: actions.Settings.Expansions.SelectedCards.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Gems = React.memo(({ selectedGems, handleGemChange }: Props) => (
  <CardListItem
    entities={selectedGems}
    handleCheckboxChange={handleGemChange}
    label="Gems"
  />
))

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Gems)
