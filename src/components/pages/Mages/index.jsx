import React, { useState } from 'react'

import useSelectedSets from 'hooks/useSelectedSets'

import ShuffleButton from 'components/ShuffleButton'
import {
  createSlotList,
  getListOfAvailableEntity,
  createEntityList
} from 'components/pages/helpers.js'

import MageCountPicker from './MageCountPicker'
import MageList from './MageList'
import EmptyMageListHint from './EmptyMageListHint'


const Mages = () => {
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const [mages, setMages] = useState([])
  const [amount, setAmount] = useState(1)
  const handleAmountChange = (e) => {
    setAmount(parseInt(e.target.value))
  }

  if (noSelectedSetsComponent) {
    return noSelectedSetsComponent
  }

  const availableMages = getListOfAvailableEntity(selectedSets, "mages")
  const handleShuffle = () => {
    const slotList = createSlotList(amount)
    const mages = createEntityList(availableMages, slotList)
    setMages(mages)
  }

  const hasEmptySlots = mages.indexOf("EMPTY") > -1 || mages.length === 0

  return (
    <React.Fragment>
      <MageCountPicker
        selectedValue={amount.toString()}
        handleAmountChange={handleAmountChange}
      />
      {
        hasEmptySlots
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
}

export default Mages
