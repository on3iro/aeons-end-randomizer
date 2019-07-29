import React from 'react'

import { getOperationString } from '../../Redux/helpers'
import { IMarketSetup } from '../../types'

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

type Props = {
  clickHandler: (event: any) => void
  setup: IMarketSetup
  selected?: boolean
  showName?: boolean
}

const SupplyPreview = React.memo(
  ({ clickHandler, setup, selected = false, showName = true }: Props) => {
    if (!setup.tiles || setup.tiles.length < 1) {
      return null
    }

    return (
      <Wrapper
        key={setup.id}
        onClick={clickHandler}
        data-value={setup.id}
        selected={selected}
      >
        <TileList>{renderMarketSetupItems(setup.tiles)}</TileList>
        {showName ? (
          <SupplyName variant="caption" selected={selected}>
            {setup.name}
          </SupplyName>
        ) : null}
      </Wrapper>
    )
  }
)

SupplyPreview.displayName = 'SupplyPreview'

export default SupplyPreview
