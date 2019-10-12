import React from 'react'
import { connect } from 'react-redux'

import * as types from '../../../../types'
import { RootState, selectors } from '../../../../Redux/Store'

import SupplyList from '../../../SupplyList'
import MageList from '../../../MageList'

const mapStateToProps = (state: RootState) => ({
  cards: selectors.Settings.Expansions.SelectedCards.getSelectedCardsLookupObject(
    state
  ),
  mages: selectors.Settings.Expansions.SelectedMages.getSelectedMagesLookupObject(
    state
  ),
})

const mapDispatchToProps = {}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    expedition: types.Expedition
  }

const Barracks = React.memo(({ expedition, cards, mages }: Props) => {
  const supply = expedition.barracks.supplyIds.map(id => cards[id])
  const magelist = expedition.barracks.mageIds.map(id => mages[id])

  return (
    <div>
      <MageList
        mages={magelist}
        showMageDetails={() => console.log('TODO: Implement me')}
      />
      <SupplyList
        tiles={supply}
        showSupplyDetails={() => console.log('TODO: Implement me')}
      />
    </div>
  )
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barracks)
