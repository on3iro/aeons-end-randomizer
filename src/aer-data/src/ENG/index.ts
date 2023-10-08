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
import { outcastsData } from './outcasts'
import { returnToGraveholdData } from './returnToGravehold'
import { southernVillageData } from './southernVillage'
import { theRuinsData } from './theRuins'
import { legacyOfGraveholdData } from './legacyOfGravehold'
import { communityData } from './community'
import { pastAndFutureData } from './pastAndFuture'
import { pastAndFuturePromosData } from './PFPromos'
import { evolutionsData } from './evolutions'
import { originsData } from './origins'

const ENG: IExpansionData = {
  AE: aeonsEndData,
  BS: buriedSecretsData,
  Depths: theDepthsData,
  EVO: evolutionsData,
  IW: intoTheWildData,
  Legacy: legacyData,
  NA: newAgeData,
  Nameless: theNamelessData,
  OD: outerDarkData,
  PAF: pastAndFutureData,
  SD: shatteredDreamsData,
  TA: theAncientsData,
  TV: theVoidData,
  WE: warEternalData,
  O: outcastsData,
  ORI: originsData,
  RTG: returnToGraveholdData,
  SV: southernVillageData,
  RU: theRuinsData,
  LOG: legacyOfGraveholdData,
  promos: promosData,
  PFPromo: pastAndFuturePromosData,
  community: communityData,
}

export default ENG
