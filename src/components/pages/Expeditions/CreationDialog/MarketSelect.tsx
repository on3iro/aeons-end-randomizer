import React from 'react'

import * as types from 'aer-types/types'

import FormControl from '../FormControl'
import FormLabel from './FormLabel'

import MoleculeMarketSelect from 'components/molecules/MarketSelect'

type Props = {
  clickHandler: (id: string) => void
  selectedMarketId: string
  additionalSetups?: types.IMarketSetup[]
}

const MarketSelect = ({
  additionalSetups,
  selectedMarketId,
  clickHandler,
}: Props) => {
  return (
    <FormControl component={'fieldset' as 'div'}>
      <FormLabel>Market</FormLabel>
      <MoleculeMarketSelect
        selectedMarketId={selectedMarketId}
        clickHandler={clickHandler}
        additionalSetups={additionalSetups}
      />
    </FormControl>
  )
}

export default React.memo(MarketSelect)
