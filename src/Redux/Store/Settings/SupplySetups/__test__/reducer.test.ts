import { Cmd, getCmd, getModel } from 'redux-loop'
import { get as getFromDb } from 'idb-keyval'

import * as types from 'aer-types/types'

import { State } from 'Redux/Store/Settings/SupplySetups/types'
import { SUPPLY_DB_KEY } from 'Redux/Store/Settings/SupplySetups/constants'
import { actions } from 'Redux/Store/Settings/SupplySetups/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/SupplySetups/reducer'

const mockSupplySetupsState: State = {
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

describe('Settings | SupplySetups | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle TOGGLE_ALL', () => {
    const expected = {
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
            active: true,
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
            active: true,
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

    const result = Reducer(mockSupplySetupsState, actions.toggleAll())

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle TOGGLE_SETUP for Predefined setups', () => {
    const expected = {
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
            active: true,
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

    const result = Reducer(
      mockSupplySetupsState,
      actions.toggleSetup('market1', 'Predefined')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle TOGGLE_SETUP for Custom setups', () => {
    const expected = {
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
            active: true,
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

    const result = Reducer(
      mockSupplySetupsState,
      actions.toggleSetup('3YYb0BxO8', 'Custom')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SAVE_CUSTOM_SETUP with new setup', () => {
    const customSetupToSave = {
      id: 'I123abcde',
      name: 'Some Setup',
      type: 'custom',
      active: true,
      tiles: [
        {
          id: 'testId121',
          type: 'Gem',
          operation: 'ANY',
        },
        {
          id: 'testId123',
          type: 'Relic',
          operation: 'ANY',
        },
        {
          id: 'testId122',
          type: 'Gem',
          operation: 'ANY',
        },
      ],
      isDirty: false,
      isNew: true,
    } as types.IMarketSetup

    const expected = {
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
          I123abcde: {
            id: 'I123abcde',
            name: 'Some Setup',
            type: 'custom',
            active: true,
            tiles: [
              {
                id: 'testId122',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'testId121',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'testId123',
                type: 'Relic',
                operation: 'ANY',
              },
            ],
            isDirty: false,
            isNew: false,
          },
        },
        ids: ['I123abcde', '3YYb0BxO8', 'P7nf7za5i'],
      },
    }

    const result = Reducer(
      mockSupplySetupsState,
      actions.saveCustomSetup(customSetupToSave)
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle SAVE_CUSTOM_SETUP with existing setup', () => {
    const customSetupToSave = {
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
      isDirty: true,
      isNew: false,
    } as types.IMarketSetup

    const expected = {
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
                id: '9PEZogMKA',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'rHJ3aCthB',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'z1vHiKJb0',
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

    const result = Reducer(
      mockSupplySetupsState,
      actions.saveCustomSetup(customSetupToSave)
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle EDIT_CUSTOM_SETUP', () => {
    const expected = {
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
            isDirty: true,
            isNew: false,
          },
        },
        ids: ['3YYb0BxO8', 'P7nf7za5i'],
      },
    }

    const result = Reducer(
      mockSupplySetupsState,
      actions.editCustomSetup('P7nf7za5i')
    )

    expect(result).toEqual(expected)
  })

  it('should handle CANCEL_EDIT_SETUP for existing setup', () => {
    const result = Reducer(
      mockSupplySetupsState,
      actions.cancelEdit('P7nf7za5i')
    )

    expect(result).toEqual(mockSupplySetupsState)
  })

  it('should handle CANCEL_EDIT_SETUP for new setup', () => {
    const mockWithNewSetup: State = {
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
          I123abcde: {
            id: 'I123abcde',
            name: 'Some Setup',
            type: 'custom',
            active: true,
            tiles: [
              {
                id: 'testId122',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'testId121',
                type: 'Gem',
                operation: 'ANY',
              },
              {
                id: 'testId123',
                type: 'Relic',
                operation: 'ANY',
              },
            ],
            isDirty: true,
            isNew: true,
          },
        },
        ids: ['3YYb0BxO8', 'P7nf7za5i'],
      },
    }

    const result = Reducer(mockWithNewSetup, actions.cancelEdit('I123abcde'))

    expect(result).toEqual(mockSupplySetupsState)
  })

  it('should handle DELETE_CUSTOM_SETUP', () => {
    const expected = {
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
        ids: ['P7nf7za5i'],
      },
    }

    const result = Reducer(
      mockSupplySetupsState,
      actions.deleteCustomSetup('3YYb0BxO8')
    )

    expect(getModel(result)).toEqual(expected)
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [SUPPLY_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSupplySetupsState,
      actions.fetchFromDBSuccessful(mockSupplySetupsState)
    )

    expect(getModel(result)).toEqual(mockSupplySetupsState)
  })

  it('should handle FETCH_FROM_DB_SUCCESS for undefined state', () => {
    const result = Reducer(
      initialState,
      // @ts-ignore
      actions.fetchFromDBSuccessful(undefined)
    )

    expect(getModel(result)).toEqual(initialState)
  })

  it.todo('should handle FETCH_FROM_DB_FAILURE')
  it.todo('should handle SET_TO_DB')
  it.todo('should handle SET_TO_DB_SUCCESS')
  it.todo('should handle SET_TO_DB_FAILURE')
})
