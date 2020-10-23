import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import CardListItem from './CardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedRelics: selectors.Settings.Expansions.Cards.getRelicsByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleRelicChange: actions.Settings.Expansions.Cards.selected.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Relics = ({ selectedRelics, handleRelicChange }: Props) => (
  <React.Fragment>
    {selectedRelics.length > 0 && (
      <CardListItem
        entities={selectedRelics}
        handleCheckboxChange={handleRelicChange}
        label="Relics"
      />
    )}
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Relics))
