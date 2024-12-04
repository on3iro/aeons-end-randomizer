import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { basicNemesisCards } from './basicNemesisCards'
import { upgradedBasicNemesisCards } from './upgradedBasicNemesisCards'
import { friends } from './friends'
import { foes } from './foes'
import { banners } from './banners'

export const theDescentData: IExpansion = {
  id: 'ATD',
  name: 'The Descent',
  wave: 'W8 - The Descent',
  type: 'standalone',
  nemeses,
  mages,
  cards,
  treasures,
  friends,
  foes,
  banners,
  basicNemesisCards,
  upgradedBasicNemesisCards,
}
