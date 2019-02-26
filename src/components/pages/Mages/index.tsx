import React, { useState } from 'react'

import useSelectedExpansions from '../../../hooks/useSelectedSets'

import ShuffleButton from '../../ShuffleButton'
import {
  createSlotList,
  getListOfAvailableEntity,
  getRandomEntity
} from '../helpers'

import MageCountPicker from './MageCountPicker'
import MageList from './MageList'
import EmptyMageListHint from './EmptyMageListHint'
import { createMageList } from './helpers'
import { ICreature } from '../../../config/types'


const Mages = React.memo(() => {
  const { selectedSets, NoSelectedExpansionsComponent } = useSelectedExpansions()
  const [mages, setMages] = useState<Array<ICreature>>([])
  const [amount, setAmount] = useState(1)
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseInt(e.currentTarget.value))
  }

  if (NoSelectedExpansionsComponent) {
    return <NoSelectedExpansionsComponent />
  }

  const availableMages = getListOfAvailableEntity(selectedSets, "mages")
  const handleShuffle = () => {
    const slotList = createSlotList(amount)
    const { result } = createMageList(availableMages, slotList, getRandomEntity)
    setMages(result)
  }

  const noMagesGeneratedYet = mages.length === 0

  return (
    <React.Fragment>
      <MageCountPicker
        selectedValue={amount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {
        noMagesGeneratedYet
          ? <EmptyMageListHint>Tap button to recruit mages</EmptyMageListHint>
          : <MageList mages={mages} />
      }
      <ShuffleButton
        onClick={handleShuffle}
        color="primary" 
        variant="extended"
      >
        Recruit Mages
      </ShuffleButton>
    </React.Fragment>
  )
})

export default Mages
