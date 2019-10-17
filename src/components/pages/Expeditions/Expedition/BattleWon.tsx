import React, { useCallback, useState } from 'react'
import { connect } from 'react-redux'

import { RootState, actions, selectors } from '../../../../Redux/Store'
import * as types from '../../../../types'
import { byCost } from '../../../../helpers'

import TreasureList from '../../../molecules/TreasureList'
import SupplySelection from '../../../molecules/SupplySelection'
import SupplyList from '../../../molecules/SupplyList'

type OwnProps = {
  battle: types.Battle
  hide: () => void
  showNext?: () => void
}

const mapStateToProps = (state: RootState, ownProps: OwnProps) => {
  const treasures =
    ownProps.battle.rewards !== undefined
      ? selectors.Settings.Expansions.Treasures.getTreasureListFromIdList(
          state,
          { treasureIds: ownProps.battle.rewards.treasure }
        )
      : []

  const newSupplyCards = ownProps.battle.rewards
    ? selectors.Settings.Expansions.SelectedCards.getCardsByIdList(state, {
        cardIds: ownProps.battle.rewards.supplyIds,
      })
    : []

  const expeditionSupply = selectors.getExpeditionSupply(state, {
    expeditionId: ownProps.battle.expeditionId,
  })

  const expedition = selectors.Expeditions.Expeditions.getExpeditionById(
    state,
    { expeditionId: ownProps.battle.expeditionId }
  )

  return {
    treasures,
    newSupplyCards,
    expeditionSupply,
    expedition,
  }
}

const mapDispatchToProps = {
  finishBattle: actions.Expeditions.Expeditions.finishBattle,
}

type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps &
  OwnProps

const BattleWon = React.memo(
  ({
    battle,
    expeditionSupply,
    expedition,
    finishBattle,
    hide,
    newSupplyCards,
    showNext,
    treasures,
  }: Props) => {
    const amountOfCardsToSelect = newSupplyCards.length

    // TODO implement showSupplyDetails handler (useCallback and a single handler for both lists)
    const lists = [
      {
        id: 'newSupply',
        tiles: newSupplyCards.map(tile => ({
          ...tile,
          visualSelection: false,
        })),
        title: 'New cards',
        showSupplyDetails: (event: Event) => {
          event.stopPropagation()
          console.log('details | TODO')
        },
      },
      {
        id: 'expedition',
        tiles: expeditionSupply.map(tile => ({
          ...tile,
          visualSelection: false,
        })),
        showSupplyDetails: () => console.log('TODO'),
      },
    ]
    const [listsWithSelection, updateLists] = useState(lists)
    const [selectedCardsCount, updateSelectedCardsCount] = useState(0)
    const enoughCardsSelected = selectedCardsCount === amountOfCardsToSelect
    const finishingIsPossible =
      expedition.bigPocketVariant || enoughCardsSelected

    const handleSelection = useCallback(
      (val: { supplyCardId: string; listId: string }) => {
        const affectedListIndex = listsWithSelection.findIndex(
          list => list.id === val.listId
        )
        const affectedList = listsWithSelection[affectedListIndex]

        if (affectedList) {
          const elementIndex = affectedList.tiles.findIndex(
            card => card.id === val.supplyCardId
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

          const updatedLists = Object.assign([...listsWithSelection], {
            [affectedListIndex]: {
              ...affectedList,
              tiles: updatedListTiles,
            },
          })

          const numberOfSelectedCards = updatedLists.reduce((acc, list) => {
            const selectedList = list.tiles.filter(tile => tile.visualSelection)
            return selectedList.length + acc
          }, 0)

          updateSelectedCardsCount(numberOfSelectedCards)

          updateLists(updatedLists)
        }
      },
      [
        listsWithSelection,
        updateLists,
        updateSelectedCardsCount,
        finishingIsPossible,
      ]
    )

    const handleFinish = useCallback(() => {
      // FIXME fix typing (inference not working correctly)
      const flattenedList = listsWithSelection.reduce((acc: any, list) => {
        return [...acc, ...list.tiles]
      }, [])

      const newSupplyList = flattenedList.filter(
        (tile: { id: string; visualSelection: boolean }) =>
          !tile.visualSelection
      )

      const banished = flattenedList
        .filter(
          (tile: { id: string; visualSelection: boolean }) =>
            tile.visualSelection
        )
        .map((tile: { id: string }) => tile.id)

      const gems = newSupplyList
        .filter((el: { type: types.CardType }) => el.type === 'Gem')
        .sort(byCost)
        .map((tile: { id: string }) => tile.id)
      const relics = newSupplyList
        .filter((el: { type: types.CardType }) => el.type === 'Relic')
        .sort(byCost)
        .map((tile: { id: string }) => tile.id)
      const spells = newSupplyList
        .filter((el: { type: types.CardType }) => el.type === 'Spell')
        .sort(byCost)
        .map((tile: { id: string }) => tile.id)

      const newSupplyIds = [...gems, ...relics, ...spells]

      finishBattle(battle, newSupplyIds, banished)
      hide()

      if (showNext) {
        showNext()
      }
    }, [battle, hide, finishBattle, showNext, listsWithSelection])

    return (
      <div>
        {expedition.bigPocketVariant ? (
          <SupplyList
            tiles={newSupplyCards}
            showSupplyDetails={() => console.log('TODO use handler above')}
          />
        ) : (
          <SupplySelection
            lists={listsWithSelection}
            handleSelection={handleSelection}
            amountOfCardsToSelect={amountOfCardsToSelect}
            selectedCardsCount={selectedCardsCount}
          />
        )}
        <TreasureList treasures={treasures} />
        <button onClick={handleFinish} disabled={!finishingIsPossible}>
          Unlock next battle
        </button>
      </div>
    )
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BattleWon)
