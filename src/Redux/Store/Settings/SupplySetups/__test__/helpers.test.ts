import { Cmd, getCmd } from 'redux-loop'
import { set as setToDb } from 'idb-keyval'

import * as types from 'aer-types/types'

import { State } from 'Redux/Store/Settings/SupplySetups/types'
import { SUPPLY_DB_KEY } from 'Redux/Store/Settings/SupplySetups/constants'
import { actions } from 'Redux/Store/Settings/SupplySetups/actions'
import { initialState } from 'Redux/Store/Settings/SupplySetups/reducer'

import { newStateWithDBWrite } from 'Redux/Store/Settings/SupplySetups/helpers'

const mockSupplySetupsState: State = {
  migrationVersion: 0,
  Predefined: {
    setups: {
      market1Inc: {
        id: 'market1Inc',
        name: 'Market Setup 1 (inclusive)',
        type: 'custom',
        active: true,
        tiles: [
          {
            type: 'Gem',
            operation: '<',
            threshold: 4,
          },
          {
            type: 'Gem',
            operation: '=',
            threshold: 4,
          },
          {
            type: 'Gem',
            operation: 'ANY',
          },
          {
            type: 'Relic',
            operation: 'ANY',
          },
          {
            type: 'Relic',
            operation: 'ANY',
          },
          {
            type: 'Spell',
            operation: '<=',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '<=',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '>=',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '>=',
            threshold: 5,
          },
        ],
      },
      market1: {
        id: 'market1',
        name: 'Market Setup 1',
        type: 'official',
        active: false,
        default: true,
        tiles: [
          {
            type: 'Gem',
            operation: '<',
            threshold: 4,
          },
          {
            type: 'Gem',
            operation: '=',
            threshold: 4,
          },
          {
            type: 'Gem',
            operation: 'ANY',
          },
          {
            type: 'Relic',
            operation: 'ANY',
          },
          {
            type: 'Relic',
            operation: 'ANY',
          },
          {
            type: 'Spell',
            operation: '<',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '<',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '>',
            threshold: 5,
          },
          {
            type: 'Spell',
            operation: '>',
            threshold: 5,
          },
        ],
      },
    },
    ids: ['market1Inc', 'market1'],
  },
  Custom: {
    setups: {
      '3YYb0BxO8': {
        id: '3YYb0BxO8',
        name: 'theos cooles setup',
        type: 'custom',
        active: false,
        tiles: [
          {
            id: 'hGrUDFjOM',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: 'RNKU4Qytx',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: 'VVfse7_LiQ',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: '8ftpu9JiH',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: '3bc1v0FTrL',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: 'ciMhrhkr8x',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: '77GfqCBP4',
            type: 'Relic',
            operation: '<=',
            threshold: 5,
          },
        ],
        isDirty: false,
        isNew: false,
      },
      P7nf7za5i: {
        id: 'P7nf7za5i',
        name: 'Test Setup',
        type: 'custom',
        active: true,
        tiles: [
          {
            id: 'z1vHiKJb0',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: 'rHJ3aCthB',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: '9PEZogMKA',
            type: 'Gem',
            operation: 'ANY',
          },
          {
            id: 'Ha5MepH2i',
            type: 'Relic',
            operation: 'ANY',
          },
        ],
        isDirty: false,
        isNew: false,
      },
    },
    ids: ['3YYb0BxO8', 'P7nf7za5i'],
  },
}

describe('Settings | SupplySetups | helpers', () => {
  test('newStateWithDBWrite()', () => {
    const result = newStateWithDBWrite(mockSupplySetupsState)

    const cmd = getCmd(result)

    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [SUPPLY_DB_KEY, mockSupplySetupsState],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })
})
