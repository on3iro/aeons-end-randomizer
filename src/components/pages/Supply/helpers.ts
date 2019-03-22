import { Operation } from '../../../types'

export const getOperationString = (
  operation: Operation,
  values?: number[],
  threshold?: number
) => {
  if (operation === 'OR' && values) {
    return values.join('/')
  }

  const thresholdValue = threshold ? threshold : ''

  return `${operation} ${thresholdValue}`
}
