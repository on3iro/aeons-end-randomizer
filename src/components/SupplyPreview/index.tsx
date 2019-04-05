import React from 'react'
import { connect } from 'react-redux'

import Typography from '@material-ui/core/Typography'

import { getOperationString } from '../../Redux/helpers'
import { IMarketSetup, IMarketSetups } from '../../types'
import { RootState } from '../../Redux/Store'
import * as SupplySelection from '../../Redux/Store/Supply/Selection'
import * as SupplySetups from '../../Redux/Store/Settings/SupplySetups'

import Wrapper from './Wrapper'
import TileList from './TileList'
import TileListItem from './TileListItem'
import SupplyName from './SupplyName'

// FIXME tiles are untyped!!!
const renderMarketSetupItems = (tiles: any) =>
  tiles.map((tile: any, index: number) => (
    <TileListItem key={index} type={tile.type.toLowerCase()}>
      {getOperationString(tile.operation, tile.values, tile.threshold)}
    </TileListItem>
  ))

const makeMapStateToProps = () => {
  const getCustomAndPredefined = SupplySetups.selectors.makeGetCustomAndPredefined()
  const mapStateToProps = (state: RootState) => ({
    allMarketSetups: getCustomAndPredefined(state),
    selectedSetup: SupplySelection.selectors.getSelectedSetup(state),
  })

  return mapStateToProps
}

const mapDispatchToProps = {
  selectSetup: SupplySelection.actions.selectSetup,
}

type Props = ReturnType<ReturnType<typeof makeMapStateToProps>> &
  typeof mapDispatchToProps & {
    clickHandler: Function
    setup: IMarketSetup
  }

const SupplyPreview = React.memo(
  ({
    allMarketSetups,
    clickHandler,
    setup,
    selectSetup,
    selectedSetup,
  }: Props) => (
    <Wrapper
      key={setup.id}
      onClick={(event: any) => {
        clickHandler()
        selectSetup(allMarketSetups[event.currentTarget.dataset.value])
      }}
      data-value={setup.id}
      selected={selectedSetup.id === setup.id}
    >
      <TileList>{renderMarketSetupItems(setup.tiles)}</TileList>
      <SupplyName variant="caption" selected={selectedSetup.id === setup.id}>
        {setup.name}
      </SupplyName>
    </Wrapper>
  )
)

SupplyPreview.displayName = 'SupplyPreview'

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(SupplyPreview)
