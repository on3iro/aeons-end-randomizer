import { IExpansion } from 'types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const newAgeData: IExpansion = {
  id: 'NA',
  name: 'The New Age',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
  upgradedBasicNemesisCards,
}
