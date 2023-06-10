import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const theAncientsData: IExpansion = {
  id: 'TA',
  name: 'The Ancients',
  wave: 'W4 - The New Age',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  upgradedBasicNemesisCards,
}
