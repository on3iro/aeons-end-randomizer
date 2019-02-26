import { ICreature, Slot } from '../../../config/types'

type MageListReductionResult = {
  availableMages: ICreature[],
  result: ICreature[]
}

export const createMageList = (
  availableMages: ICreature[],
  slots: Array<Slot>,
  getEntity: <T>(list: Array<T>) => T
): MageListReductionResult => {
  const result = slots.reduce(
    (
      acc: MageListReductionResult,
      slot: Slot,
      i: number
    ) => {
      // If no entity is left, simply return the actual empty slot
      const mage = getEntity(acc.availableMages) || slot

      // Make sure each entity will only be added to the result list once
      const remainingMages = acc.availableMages.filter(
        entity => entity.id !== mage.id
      )

      return {
        availableMages: remainingMages,
        result: [ ...acc.result, mage ]
      }
  }, { availableMages, result: [] })

  return result
}
