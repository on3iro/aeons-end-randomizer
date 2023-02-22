import { IExpansion } from '../../../../aer-types/types'

import { nemeses } from './nemeses'
import { mages } from './mages'
import { cards } from './cards'

export const theNamelessData: IExpansion = {
  id: 'Nameless',
  name: 'The Nameless',
  wave: 'W1-Core',
  type: 'mini',
  nemeses,
  mages,
  cards,
}
