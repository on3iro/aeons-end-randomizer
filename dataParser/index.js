const ObjectsToCsv = require('objects-to-csv')

const aeonsEndData = require('./aeonsEnd.js')
const buriedSecretsData = require('./buriedSecrets.js')
const intoTheWild = require('./intoTheWild.js')
const legacy = require('./legacy.js')
const outerDark = require('./outerDark.js')
const promos = require('./promos.js')
const shatteredDreams = require('./shatteredDreams.js')
const theAncientsData = require('./theAncients.js')
const theDepths = require('./theDepths.js')
const theNameless = require('./theNameless.js')
const theNewAge = require('./theNewAge.js')
const theVoid = require('./theVoid.js')
const warEternal = require('./warEternal.js')

new ObjectsToCsv([
  ...aeonsEndData.cards,
  ...buriedSecretsData.cards,
  ...intoTheWild.cards,
  ...legacy.cards,
  ...outerDark.cards,
  ...promos.cards,
  ...shatteredDreams.cards,
  ...theAncientsData.cards,
  ...theDepths.cards,
  ...theNameless.cards,
  ...theNewAge.cards,
  ...theVoid.cards,
  ...warEternal.cards,
]).toDisk('./data.csv')
