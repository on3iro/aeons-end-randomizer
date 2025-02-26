import { IExpansionData } from '../../../aer-types/types'

import { aeData } from './aeonsEnd'
import { depthsData } from './theDepths'
import { namelessData } from './theNameless'
import { theVoidData } from './theVoid'
import { outerDarkData } from './outerDark'
import { weData } from './warEternal'
import { legacyData } from './legacy'
import { buriedSecretsData } from './buriedSecrets'
import { shatteredDreamsData } from './shatteredDreams'
import { outcastsData } from './outcasts'

const FR: IExpansionData = {
  AE: aeData,
  Depths: depthsData,
  Nameless: namelessData,
  OD: outerDarkData,
  TV: theVoidData,  
  WE: weData,
  Legacy: legacyData,
  BS: buriedSecretsData,
  SD: shatteredDreamsData,
  O: outcastsData,
}

export default FR
