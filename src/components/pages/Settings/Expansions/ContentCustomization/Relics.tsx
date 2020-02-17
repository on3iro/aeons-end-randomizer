import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from '../../../../../Redux/Store'

import CardListItem from './CardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedRelics: selectors.Settings.Expansions.SelectedCards.getRelicsByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleRelicChange: actions.Settings.Expansions.SelectedCards.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Relics = ({ selectedRelics, handleRelicChange }: Props) => (
  <CardListItem
    entities={selectedRelics}
    handleCheckboxChange={handleRelicChange}
    label="Relics"
  />
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Relics))
