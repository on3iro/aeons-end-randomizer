import AERData from 'aer-data/src/index'

const INITIAL_MODE = 'Default'
const INITIAL_PLAYER_SETUP = AERData.turnordersetups['onePlayer']
const INITIAL_VARIATION = INITIAL_PLAYER_SETUP.variations['default']

const TURNORDER_CONFIG_DB_KEY = '2-4-turnOrderConfiguration'

export {
  INITIAL_MODE,
  INITIAL_PLAYER_SETUP,
  INITIAL_VARIATION,
  TURNORDER_CONFIG_DB_KEY,
}
