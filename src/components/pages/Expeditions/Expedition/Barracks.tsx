import React from 'react'
import { connect } from 'react-redux'

import * as types from '../../../../types'
import { RootState, selectors } from '../../../../Redux/Store'

import { useModal } from '../../../../hooks/useModal'
import SupplyList from '../../../SupplyList'
import MageList from '../../../MageList'
import TreasureList from '../../../TreasureList'
import ShuffleButton from '../../../ShuffleButton'

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
    const { show, RenderModal } = useModal()

    const supply = expedition.barracks.supplyIds.map(id => cards[id])
    const magelist = expedition.barracks.mageIds.map(id => mages[id])
    const treasureList = expedition.barracks.treasureIds.map(
      id => treasures[id]
    )

    return (
      <React.Fragment>
        <RenderModal titleColor="#333" titleLabel="Barracks">
          <React.Fragment>
            <MageList
              mages={magelist}
              showMageDetails={() => console.log('TODO')}
            />
            <SupplyList
              tiles={supply}
              showSupplyDetails={() => console.log('TODO')}
            />
            <TreasureList treasures={treasureList} />
            <p>TODO: show upgraded basic nemesis cards</p>
          </React.Fragment>
        </RenderModal>
        <ShuffleButton onClick={show} color="primary" variant="extended">
          Show Barracks
        </ShuffleButton>
      </React.Fragment>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Barracks)
