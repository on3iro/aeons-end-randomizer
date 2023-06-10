import React from 'react'
import { IMarketSetup } from 'aer-types/types'

import { getOperationString } from '../../../Redux/helpers'

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
  className?: string
}

const SupplyPreview = ({
  clickHandler,
  setup,
  selected = false,
  showName = true,
  className,
}: Props) => {
  if (!setup.tiles || setup.tiles.length < 1) {
    return null
  }

  return (
    <Wrapper
      className={className}
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

export default React.memo(SupplyPreview)
