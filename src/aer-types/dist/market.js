export const THRESHOLD_OPERATIONS = ['<', '>', '=', '<=', '>='] // Note: should not be a const, because we want to treat it as regular list
export const SUPPLY_OPERATIONS = [...THRESHOLD_OPERATIONS, 'ANY', 'OR', 'NoOp']
export const isCard = (card) => {
  if (!card) return false
  return card.name !== undefined
}
