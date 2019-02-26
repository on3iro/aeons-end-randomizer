import { useState } from 'react'

import useSelectedSets from 'hooks/useSelectedSets'

import config from 'config'

import { createSlotList } from '../helpers'


const DEFAULTSUPPLYCOUNT = 9

export const useMarketSetup = (setExpanded, setCards) => {
  const [ marketSetup, setMarketSetup ] = useState(config.MARKETSETUPS['market1Inc'])
  const handleMarketSetup = (event) => {
    setMarketSetup(config.MARKETSETUPS[event.target.value])
    setExpanded(false)
    setCards(createSlotList(DEFAULTSUPPLYCOUNT))
  }

  return { marketSetup, handleMarketSetup }
}

export const useSetHandling = () => {
  const { selectedSets, noSelectedSetsComponent } = useSelectedSets()
  const emptySlotList = () => createSlotList(DEFAULTSUPPLYCOUNT)
  const [cards, setCards] = useState(emptySlotList)

  return { selectedSets, noSelectedSetsComponent, cards, setCards }
}
