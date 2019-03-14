import { DATA } from './aeonsData'
import { MARKETSETUPS } from './marketSetups'
import { TURNORDERSETUPS, TURNORDERCARDS } from './turnOrderSetups'

const EXPANSIONS = Object.keys(DATA)
const DEFAULTSUPPLYCOUNT = 9

export default {
  DATA,
  DEFAULTSUPPLYCOUNT,
  EXPANSIONS,
  MARKETSETUPS,
  TURNORDERSETUPS,
  TURNORDERCARDS,
}
