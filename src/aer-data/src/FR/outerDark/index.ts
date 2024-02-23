import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { basicNemesisCards } from './basicNemesisCards'

export const outerDarkData: IExpansion = {
  id: 'OD',
  name: 'Ténèbres d\'Ailleurs',
  wave: 'W2 - Guerre éternelle',
  type: 'mini',
  nemeses,
  mages,
  cards,
  basicNemesisCards,
}
