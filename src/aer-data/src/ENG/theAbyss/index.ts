import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { friends } from './friends'
import { foes } from './foes'
import { banners } from './banners'

export const theAbyssData: IExpansion = {
  id: 'AB',
  name: 'The Abyss',
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