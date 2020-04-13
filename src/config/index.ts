import { DATA } from './aeonsData'
import { MARKETSETUPS } from './marketSetups'
import { TURNORDERSETUPS, TURNORDERCARDS } from './turnOrderSetups'
import * as types from 'aer-types'

const EXPANSIONS = Object.keys(DATA)
const DEFAULTSUPPLYCOUNT = 9

const normalize = (array: Array<any>) =>
  array.reduce(
    (acc, entity) => ({
      entities: {
        ...acc.entities,
        [entity.id]: entity,
      },
      ids: [...acc.ids, entity.id],
    }),
    {
      entities: {},
      ids: [],
    } as {
      entities: { [key: string]: Object }
      ids: string[]
    }
  )

const NORMALIZEDDATA = EXPANSIONS.reduce(
  (acc: types.NormalizedData, id: string) => {
    const expansion = DATA[id]
    const nemeses = normalize(expansion.nemeses)
    const mages = normalize(expansion.mages)
    const cards = normalize(expansion.cards)
    const treasures = normalize(expansion.treasures || [])
    const basicNemesisCards = normalize(expansion.basicNemesisCards || [])
    const upgradedBasicNemesisCards = normalize(
      expansion.upgradedBasicNemesisCards || []
    )

    return {
      expansions: {
        ...acc.expansions,
        [id]: {
          id,
          name: expansion.name,
          type: expansion.type,
        },
      },
      nemeses: {
        ...acc.nemeses,
        ...nemeses.entities,
      },
      mages: {
        ...acc.mages,
        ...mages.entities,
      },
      cards: {
        ...acc.cards,
        ...cards.entities,
      },
      treasures: {
        ...acc.treasures,
        ...treasures.entities,
      },
      basicNemesisCards: {
        ...acc.basicNemesisCards,
        ...basicNemesisCards.entities,
      },
      upgradedBasicNemesisCards: {
        ...acc.upgradedBasicNemesisCards,
        ...upgradedBasicNemesisCards.entities,
      },
      expansionIds: [...acc.expansionIds, id],
      nemesisIds: [...acc.nemesisIds, ...nemeses.ids],
      mageIds: [...acc.mageIds, ...mages.ids],
      cardIds: [...acc.cardIds, ...cards.ids],
      treasureIds: [...acc.treasureIds, ...treasures.ids],
      basicNemesisCardIds: [
        ...acc.basicNemesisCardIds,
        ...basicNemesisCards.ids,
      ],
      upgradedBasicNemesisCardIds: [
        ...acc.upgradedBasicNemesisCardIds,
        ...upgradedBasicNemesisCards.ids,
      ],
    }
  },
  {
    expansions: {},
    nemeses: {},
    mages: {},
    cards: {},
    treasures: {},
    basicNemesisCards: {},
    upgradedBasicNemesisCards: {},
    expansionIds: [],
    nemesisIds: [],
    mageIds: [],
    cardIds: [],
    treasureIds: [],
    basicNemesisCardIds: [],
    upgradedBasicNemesisCardIds: [],
  } as types.NormalizedData
)

export default {
  DATA,
  NORMALIZEDDATA,
  DEFAULTSUPPLYCOUNT,
  MARKETSETUPS,
  TURNORDERSETUPS,
  TURNORDERCARDS,
}
