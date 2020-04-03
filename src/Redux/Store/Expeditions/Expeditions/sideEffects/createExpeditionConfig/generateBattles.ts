import shortid from 'shortid'
import * as types from 'types'

export const generateBattles = (
  variant: types.Variant,
  expeditionId: string
) => {
  const battles = variant.configList.map(
    (config, index): types.OldStyleBattle => {
      const isFirst = index === 0

      return {
        id: shortid.generate(),
        nemesisTier: config.tier,
        treasure: config.treasure,
        expeditionId,
        status: isFirst ? 'unlocked' : 'locked',
        tries: 0,
      }
    }
  )

  return battles
}
