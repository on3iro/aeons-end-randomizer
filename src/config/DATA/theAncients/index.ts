import { IExpansion } from 'aer-types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const theAncientsData: IExpansion = {
  id: 'TA',
  name: 'The Ancients',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  upgradedBasicNemesisCards,
}
