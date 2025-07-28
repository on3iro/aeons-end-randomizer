import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'

export const outcastsData: IExpansion = {
  id: 'O',
  name: 'Outcasts',
  wave: 'W5 - Outcasts',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
  basicNemesisCards,
  upgradedBasicNemesisCards,
}
