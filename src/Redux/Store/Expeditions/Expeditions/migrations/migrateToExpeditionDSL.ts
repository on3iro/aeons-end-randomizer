import * as types from 'aer-types/types'
import { RootState } from 'Redux/Store'

export const migrateToExpeditionDSL = (
  _: RootState,
  expedition: types.OldStyleExpedition
) => {
  const { battles, ...expeditionProps } = expedition
  const { variantId, ...actualProps } = expeditionProps

  return {
    ...actualProps,
    sequence: {
      firstBranchId: battles[0].id,
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
                type: 'regular',
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
