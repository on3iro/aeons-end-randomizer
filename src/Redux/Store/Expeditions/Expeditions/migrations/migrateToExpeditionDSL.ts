import * as types from 'types'
import { RootState } from 'Redux/Store'

export const migrateToExpeditionDSL = (
  _: RootState,
  expedition: types.OldStyleExpedition
) => {
  const { battles, ...expeditionProps } = expedition

  return {
    ...expeditionProps,
    sequence: {
      firstBattleId: battles[0].id,
      branches: battles.reduce((acc, battle, index) => {
        const { nemesisTier, treasure, ...battleProps } = battle

        return {
          ...acc,
          [battle.id]: {
            ...battleProps,
            nextBranchId: battles[index + 1]?.id,
            type: 'battle',
            config: {
              tier: nemesisTier.tier,
              newUBNCards: {
                ids: [],
                addRandom: nemesisTier.isNewTier,
              },
              treasure,
            },
          },
        }
      }, {}),
    },
  }
}
