import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import CardListItem from './CardListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedGems: selectors.Settings.Expansions.Cards.getGemsByExpansionId(
    state,
    props
  ),
})

const mapDispatchToProps = {
  handleGemChange: actions.Settings.Expansions.Cards.selected.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Gems = ({ selectedGems, handleGemChange }: Props) => (
  <React.Fragment>
    {selectedGems.length > 0 && (
      <CardListItem
        entities={selectedGems}
        handleCheckboxChange={handleGemChange}
        label="Gems"
      />
    )}
  </React.Fragment>
)

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Gems))
