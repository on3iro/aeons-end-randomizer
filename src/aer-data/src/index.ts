import ENG from './ENG'
import FR from './FR'
import PL from './PL'
import DE from './DE'

import { MARKETSETUPS } from './marketSetups'
import { TURNORDERSETUPS, TURNORDERCARDS } from './turnOrderSetups'

import { createNormalizedData } from './createNormalizedData'

const DEFAULTSUPPLYCOUNT = 9

const aerData = {
  normalizedData: {
    ENG: createNormalizedData(ENG),
    FR: createNormalizedData(FR),
    PL: createNormalizedData(PL),
    DE: createNormalizedData(DE),
  },
  defaultSupplyCount: DEFAULTSUPPLYCOUNT,
  marketsetups: MARKETSETUPS,
  turnordersetups: TURNORDERSETUPS,
  turnordercards: TURNORDERCARDS,
}

export default aerData
