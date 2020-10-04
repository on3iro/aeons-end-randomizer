import * as types from 'aer-types/types'
import { byCost } from 'helpers'

type Tile = {
  id: string
  type: types.CardType
  cost: number
  visualSelection: boolean
}

export type ListWithSelection = {
  id: string
  tiles: Array<Tile>
}

type SelectedValue = { supplyCardId: string; listId: string }

export const getAffectedList = (
  listsWithSelectionState: ListWithSelection[],
  selectedValue: SelectedValue
) => {
  const affectedListIndex = listsWithSelectionState.findIndex(
    (list) => list.id === selectedValue.listId
  )
  return {
    affectedList: listsWithSelectionState[affectedListIndex],
    affectedListIndex,
  }
}

export const createUpdatedLists = (
  affectedList: ListWithSelection,
  affectedListIndex: number,
  selectedValue: SelectedValue,
  finishingIsPossible: boolean,
  listsWithSelectionState: ListWithSelection[]
) => {
  const elementIndex = affectedList.tiles.findIndex(
    (card) => card.id === selectedValue.supplyCardId
  )
  const affectedElement = affectedList.tiles[elementIndex]

  const updatedListTiles = Object.assign([...affectedList.tiles], {
    [elementIndex]: {
      ...affectedElement,
      visualSelection:
        finishingIsPossible || affectedElement.visualSelection
          ? false
          : !affectedElement.visualSelection,
    },
  })

  return Object.assign([...listsWithSelectionState], {
    [affectedListIndex]: {
      ...affectedList,
      tiles: updatedListTiles,
    },
  })
}

export const calculateNumberOfSelectedCards = (lists: ListWithSelection[]) =>
  lists.reduce((acc, list) => {
    const selectedList = list.tiles.filter((tile) => tile.visualSelection)
    return selectedList.length + acc
  }, 0)

const tilesToCardId = (
  list: Array<{ type: types.CardType; cost: number; id?: string }>,
  type: types.CardType
) =>
  list
    .filter((el: { type: types.CardType }) => el.type === type)
    .sort(byCost) // !! mutation !! but irrelevant, because of the filter() beforehand!
    .reduce((acc: string[], tile: { id?: string }) => {
      if (!tile.id) {
        return acc
      }

      return [...acc, tile.id]
    }, [])

export const createBanishedAndSupplyFromList = (list: Tile[]) => {
  const banished = list
    .filter((tile) => tile.visualSelection)
    .reduce((acc: string[], tile) => {
      if (!tile.id) {
        return acc
      }

      return [...acc, tile.id]
    }, [])

  const newSupplyList = list.filter((tile) => !tile.visualSelection)

  const gems = tilesToCardId(newSupplyList, 'Gem')
  const relics = tilesToCardId(newSupplyList, 'Relic')
  const spells = tilesToCardId(newSupplyList, 'Spell')

  const newSupplyIds = [...gems, ...relics, ...spells]

  return {
    banished,
    newSupplyIds,
  }
}
