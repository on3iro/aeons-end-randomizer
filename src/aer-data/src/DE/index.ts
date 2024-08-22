import { IExpansionData } from '../../../aer-types/types'

import { aeonsEndData } from './aeonsEnd'
import { buriedSecretsData } from './buriedSecrets'
import { intoTheWildData } from './intoTheWild'
import { legacyData } from './legacy'
import { newAgeData } from './theNewAge'
import { outerDarkData } from './outerDark'
import { promosData } from './promos'
import { shatteredDreamsData } from './shatteredDreams'
import { theAncientsData } from './theAncients'
import { theDepthsData } from './theDepths'
import { theNamelessData } from './theNameless'
import { theVoidData } from './theVoid'
import { warEternalData } from './warEternal'

const DE: IExpansionData = {
  AE: aeonsEndData,
  BS: buriedSecretsData,
  Depths: theDepthsData,
  IW: intoTheWildData,
  Legacy: legacyData,
  NA: newAgeData,
  Nameless: theNamelessData,
  OD: outerDarkData,
  SD: shatteredDreamsData,
  TA: theAncientsData,
  TV: theVoidData,
  WE: warEternalData,
  promos: promosData,
}

export default DE
