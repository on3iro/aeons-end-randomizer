import { useState } from 'react'

import useSelectedExpansions from '../../../hooks/useSelectedSets'

import config from '../../../config'
import {
  ICard,
  Slot
} from '../../../config/types'

import { createSlotList } from '../helpers'


const DEFAULTSUPPLYCOUNT = 9

export const useMarketSetup = (
  setExpanded: (expanded: boolean) => void,
  setCards: (slots: Array<ICard | Slot>) => void
) => {
  const [ marketSetup, setMarketSetup ] = useState(config.MARKETSETUPS['market1Inc'])
  const handleMarketSetup = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarketSetup(config.MARKETSETUPS[event.target.value])
    setExpanded(false)
    setCards(createSlotList(DEFAULTSUPPLYCOUNT))
  }

  return { marketSetup, handleMarketSetup }
}

export const useSetHandling = () => {
  const { selectedSets, NoSelectedExpansionsComponent } = useSelectedExpansions()
  const emptySlotList = createSlotList(DEFAULTSUPPLYCOUNT)
  const [cards, setCards] = useState<Array<Slot | ICard>>(emptySlotList)

  return { selectedSets, NoSelectedExpansionsComponent, cards, setCards }
}
