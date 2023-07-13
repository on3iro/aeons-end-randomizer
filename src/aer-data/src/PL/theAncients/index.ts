import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const theAncientsData: IExpansion = {
  id: 'TA',
  name: 'Starożytni',
  wave: 'W4 - Nowy Początek',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  upgradedBasicNemesisCards,
}
