import { ICard } from '../../../../../../aer-types/types'

export const allKeywords = (cards: ICard[]) => {
  const result = new Set<string>()
  cards.forEach((card) => card.keywords.forEach((keyword) => result.add(keyword)));
  return result
}
