import { IExpansionData } from '../../../aer-types/types'

import { aeonsEndData } from './aeonsEnd'
import { buriedSecretsData } from './buriedSecrets'
import { legacyData } from './legacy'
import { outerDarkData } from './outerDark'
import { promosData } from './promos'
import { theDepthsData } from './theDepths'
import { theNamelessData } from './theNameless'
import { theVoidData } from './theVoid'
import { warEternalData } from './warEternal'

const DE: IExpansionData = {
  AE: aeonsEndData,
  BS: buriedSecretsData,
  Depths: theDepthsData,
  Legacy: legacyData,
  Nameless: theNamelessData,
  OD: outerDarkData,
  TV: theVoidData,
  WE: warEternalData,
  promos: promosData,
}

export default DE
