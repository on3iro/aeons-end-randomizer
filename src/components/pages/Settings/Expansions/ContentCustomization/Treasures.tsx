import React from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

import TreasureListItem from './TreasureListItem'

const mapStateToProps = (state: RootState, props: { expansionId: string }) => ({
  selectedTreasures: selectors.Settings.Expansions.Treasures.getTreasuresByExpansionId(
    state,
    props.expansionId
  ),
})

const mapDispatchToProps = {
  handleTreasureChange: actions.Settings.Expansions.Treasures.toggleCard,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expansionId: string
  }

const Treasures = ({ selectedTreasures, handleTreasureChange }: Props) => (
  <React.Fragment>
    {selectedTreasures.length > 0 && (
      <TreasureListItem
        entities={selectedTreasures}
        handleCheckboxChange={handleTreasureChange}
        label="Treasures"
      />
    )}
  </React.Fragment>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(React.memo(Treasures))
