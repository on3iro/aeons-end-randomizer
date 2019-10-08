import React from 'react'
import { connect } from 'react-redux'

import * as types from '../../../../types'
import { RootState, selectors } from '../../../../Redux/Store'

import useExpansionHandling from '../../../../hooks/useExpansionHandling'
import ExpansionPanel from '../../../ExpansionPanel'
import SupplyList from '../../../SupplyList'
import MageList from '../../../MageList'
import TreasureList from '../../../TreasureList'

const mapStateToProps = (state: RootState) => ({
  cards: selectors.Settings.Expansions.SelectedCards.getSelectedCardsLookupObject(
    state
  ),
  mages: selectors.Settings.Expansions.SelectedMages.getSelectedMagesLookupObject(
    state
  ),
  treasures: selectors.Settings.Expansions.Treasures.getTreasures(state),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expedition: types.Expedition
  }

const Barracks = React.memo(
  ({ expedition, cards, mages, treasures }: Props) => {
    const { expanded, createExpansionHandler } = useExpansionHandling()
    const expansionKey = 'barracks'
    const expansionHandler = createExpansionHandler(expansionKey)

    const supply = expedition.barracks.supplyIds.map(id => cards[id])
    const magelist = expedition.barracks.mageIds.map(id => mages[id])
    const treasureList = expedition.barracks.treasureIds.map(
      id => treasures[id]
    )

    return (
      <ExpansionPanel
        expanded={expanded}
        expansionHandler={expansionHandler}
        expansionKey={expansionKey}
        summary="Barracks"
      >
        <MageList
          mages={magelist}
          showMageDetails={() => console.log('TODO')}
        />
        <SupplyList
          tiles={supply}
          showSupplyDetails={() => console.log('TODO')}
        />
        <TreasureList treasures={treasureList} />
      </ExpansionPanel>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barracks)
