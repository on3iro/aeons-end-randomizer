import { ICard, IBluePrint, CardType } from '../../../../types'
import {
  getListOfAvailableEntity,
  getRandomEntity,
  isCardArray,
} from '../../../helpers'

type CardListReduceResult = {
  availableCards: ICard[]
  result: ICard[]
}

/**
 * Given a card object and a setupBlueprint this returns either
 * true or false, depending on the cost of the card and the expectation set by
 * the blueprints operation and cost.
 */
const filterByCost = (card: ICard, setupBlueprint: IBluePrint) => {
  switch (setupBlueprint.operation) {
    case '<': {
      if (!setupBlueprint.threshold) return true
      return card.cost < setupBlueprint.threshold
    }
    case '>': {
      if (!setupBlueprint.threshold) return true
      return card.cost > setupBlueprint.threshold
    }
    case '<=': {
      if (!setupBlueprint.threshold) return true
      return card.cost <= setupBlueprint.threshold
    }
    case '>=': {
      if (!setupBlueprint.threshold) return true
      return card.cost >= setupBlueprint.threshold
    }
    case '=': {
      if (!setupBlueprint.threshold) return true
      return card.cost === setupBlueprint.threshold
    }
    case 'OR': {
      if (!setupBlueprint.values) return true
      return setupBlueprint.values.indexOf(card.cost) !== -1
    }
    default: {
      return true
    }
  }
}

const createCardList = (
  availableCards: ICard[],
  blueprints: Array<IBluePrint>,
  getEntity: <T>(list: Array<T>) => T
): CardListReduceResult => {
  const result = blueprints.reduce(
    (acc: CardListReduceResult, blueprint: IBluePrint, i: number) => {
      const filteredByCost = acc.availableCards.filter(card =>
        filterByCost(card, blueprint)
      )

      // If no entity is left, simply return the actual empty slot
      const card = getEntity(filteredByCost) || blueprint

      // Make sure each entity will only be added to the result list once
      const remainingCards = acc.availableCards.filter(
        entity => entity.id !== card.id
      )

      return {
        availableCards: remainingCards,
        result: [...acc.result, card],
      }
    },
    { availableCards, result: [] }
  )

  return result
}

/**
 * Creates a list of randomly selected cards from a given pool of cards by a specific type.
 * The amount of cards generated is determined by the amount of tileSetups matching
 * the given cardType. E.g. if 2 out of 9 tileSetups have the type="Gem" and the
 * specified type is "Gem" as well, a list of two cards will be created.
 *
 * return List<Card>
 */
const getRandomCardsByType = (
  availableCards: ReadonlyArray<ICard>,
  tileSetups: ReadonlyArray<IBluePrint>,
  cardType: CardType
) => {
  const cardSlots = tileSetups.filter(({ type }) => type === cardType)
  const availableCardsOfType = availableCards.filter(
    ({ type }) => type === cardType
  )
  return createCardList(availableCardsOfType, cardSlots, getRandomEntity)
}

/**
 * Creates a supply object, containing gems, relics and spells with meta information.
 * The pool of available cards will be determined by the sets the user has selected
 * inside the application settings. The supply will be created via the blueprint
 * of the given tileSetups.
 *
 * return { gems, relics, spells }
 */
export const createSupply = (
  selectedExpansions: ReadonlyArray<string>,
  tileSetups: ReadonlyArray<IBluePrint>
) => {
  const availableCards = getListOfAvailableEntity(selectedExpansions, 'cards')

  if (!isCardArray(availableCards)) {
    return {
      gems: { result: [] },
      relics: { result: [] },
      spells: { result: [] },
    }
  }

  const gems = getRandomCardsByType(availableCards, tileSetups, 'Gem')
  const relics = getRandomCardsByType(availableCards, tileSetups, 'Relic')
  const spells = getRandomCardsByType(availableCards, tileSetups, 'Spell')

  return { gems, relics, spells }
}
