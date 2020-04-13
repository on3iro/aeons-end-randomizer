import { IExpansionData } from 'aer-types'

import { aeonsEndData } from './DATA/aeonsEnd'
import { buriedSecretsData } from './DATA/buriedSecrets'
import { intoTheWildData } from './DATA/intoTheWild'
import { legacyData } from './DATA/legacy'
import { newAgeData } from './DATA/theNewAge'
import { outerDarkData } from './DATA/outerDark'
import { promosData } from './DATA/promos'
import { shatteredDreamsData } from './DATA/shatteredDreams'
import { theAncientsData } from './DATA/theAncients'
import { theDepthsData } from './DATA/theDepths'
import { theNamelessData } from './DATA/theNameless'
import { theVoidData } from './DATA/theVoid'
import { warEternalData } from './DATA/warEternal'

export const DATA: IExpansionData = {
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
