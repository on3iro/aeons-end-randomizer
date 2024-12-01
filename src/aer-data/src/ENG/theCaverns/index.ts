import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const theCavernsData: IExpansion = {
  id: 'TC',
  name: 'The Caverns',
  wave: 'W8 - The Descent',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  upgradedBasicNemesisCards,
}