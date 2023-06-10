import shortid from 'shortid'
import * as types from 'aer-types/types'

export const generateBattles = (
  variant: types.Variant,
  expeditionId: string
) => {
  const battleIds = variant.configList.map((_) => shortid.generate())

  const battles = variant.configList.map(
    (config, index): types.Battle => {
      const isFirst = index === 0

      return {
        id: battleIds[index],
        type: 'battle',
        nextBranchId: battleIds[index + 1], // will be undefined for last battle (which is ok)
        config,
        expeditionId,
        status: isFirst ? 'unlocked' : 'locked',
        tries: 0,
      }
    }
  )

  return battles
}
