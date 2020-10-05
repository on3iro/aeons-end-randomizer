import { IExpansionData } from '../../../aer-types/types'
import { aeonsEndData } from './aeonsEnd'
import { outerDarkData } from './outerDark'
import { promosData } from './promos'
import { theDepthsData } from './theDepths'
import { theNamelessData } from './theNameless'
import { theVoidData } from './theVoid'
import { warEternalData } from './warEternal'

const PL: IExpansionData = {
  AE: aeonsEndData,
  Depths: theDepthsData,
  Nameless: theNamelessData,
  OD: outerDarkData,
  TV: theVoidData,
  WE: warEternalData,
  promos: promosData,
}

export default PL
