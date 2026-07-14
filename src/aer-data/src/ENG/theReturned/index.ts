import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'
import { treasures } from './treasures'
import { friends } from './friends'
import { foes } from './foes'

export const theReturnedData: IExpansion = {
  id: 'TR',
  name: 'The Returned',
  wave: 'W9 - Beyond the Breach',
  type: 'mini',
  nemeses,
  mages,
  cards,
  treasures,
  friends,
  foes,
}
