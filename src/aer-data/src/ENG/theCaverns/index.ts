import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { friends } from './friends'
import { foes } from './foes'
import { banners } from './banners'

export const theCavernsData: IExpansion = {
  id: 'TC',
  name: 'The Caverns',
  wave: 'W8 - The Descent',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  friends,
  foes,
  banners,
}
