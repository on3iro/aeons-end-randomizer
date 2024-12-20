import * as types from '../../aer-types/types'

export const createNormalizedData = (
  data: types.IExpansionData
): types.NormalizedData => {
  const expansions = Object.keys(data)

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

  return expansions.reduce(
    (acc: types.NormalizedData, id: string) => {
      const expansion = data[id]
      const nemeses = normalize(expansion.nemeses)
      const mages = normalize(expansion.mages)
      const cards = normalize(expansion.cards)
      const treasures = normalize(expansion.treasures || [])
      const basicNemesisCards = normalize(expansion.basicNemesisCards || [])
      const upgradedBasicNemesisCards = normalize(
        expansion.upgradedBasicNemesisCards || []
      )
      const friends = normalize(expansion.friends || [])
      const foes = normalize(expansion.foes || [])
      const banners = normalize(expansion.banners || [])

      return {
        expansions: {
          ...acc.expansions,
          [id]: {
            id,
            name: expansion.name,
            wave: expansion.wave,
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
        friends: {
          ...acc.friends,
          ...friends.entities,
        },
        foes: {
          ...acc.foes,
          ...foes.entities,
        },
        banners: {
          ...acc.banners,
          ...banners.entities,
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
        friendIds: [...acc.friendIds, ...friends.ids],
        foeIds: [...acc.foeIds, ...foes.ids],
        bannerIds: [...acc.bannerIds, ...banners.ids],
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
      friends: {},
      foes: {},
      banners: {},
      expansionIds: [],
      nemesisIds: [],
      mageIds: [],
      cardIds: [],
      treasureIds: [],
      basicNemesisCardIds: [],
      upgradedBasicNemesisCardIds: [],
      friendIds: [],
      foeIds: [],
      bannerIds: [],
    }
  )
}
