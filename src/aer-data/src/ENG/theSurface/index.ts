import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { friends } from './friends'
import { foes } from './foes'

export const theSurfaceData: IExpansion = {
  id: 'TS',
  name: 'The Surface',
  wave: 'W9 - Beyond the Breach',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  friends,
  foes,
}
