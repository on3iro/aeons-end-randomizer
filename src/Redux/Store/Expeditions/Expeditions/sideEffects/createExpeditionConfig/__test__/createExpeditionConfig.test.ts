import shortidMock from 'shortid'

jest.mock('shortid', () => {
  return {
    generate: () => 'TEST_EXPEDITION_ID',
  }
})

import { createExpedition } from '../index'

import * as helpersModule from 'Redux/helpers'
import * as createSupplyIdsModule from '../createSupplyIds'
import * as createTreasureIdsModule from '../createTreasureIds'
import { rootState } from '__fixtures__/rootState'

describe('createExpeditionConfig()', () => {
  const getState = () => rootState

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('should produce correct result', () => {
    const result = createExpedition(getState, {
      variantId: 'SHORT',
      name: 'Test expedition config',
      bigPocketVariant: true,
      uniqueMageNames: false,
      marketId: 'market1',
      seedValue: 'TEST',
    })

    expect(result).toMatchSnapshot()
  })

  it('should use provided seedValue', () => {
    const createIdListSpy = jest.spyOn(helpersModule, 'createIdList')

    createExpedition(getState, {
      variantId: 'SHORT',
      name: 'Test expedition config',
      bigPocketVariant: true,
      uniqueMageNames: false,
      marketId: 'market1',
      seedValue: 'TEST_SEED',
    })

    expect(createIdListSpy.mock.calls[0]).toEqual([
      expect.any(Array),
      expect.any(Array),
      expect.any(Function),
      {
        seed: 'TEST_SEED',
      },
    ])

    createIdListSpy.mockRestore()
  })

  it('should fallback to expeditionId as seed value', () => {
    const createIdListSpy = jest.spyOn(helpersModule, 'createIdList')

    createExpedition(getState, {
      variantId: 'SHORT',
      name: 'Test expedition config',
      bigPocketVariant: true,
      uniqueMageNames: false,
      marketId: 'market1',
    })

    expect(createIdListSpy.mock.calls[0]).toEqual([
      expect.any(Array),
      expect.any(Array),
      expect.any(Function),
      {
        seed: 'TEST_EXPEDITION_ID',
      },
    ])

    createIdListSpy.mockRestore()
  })

  it('should use intermediate seed states', () => {
    const createIdListSpy = jest.spyOn(helpersModule, 'createIdList')
    const createSupplyIdsSpy = jest.spyOn(
      createSupplyIdsModule,
      'createSupplyIds'
    )
    const createTreasureIdsSpy = jest.spyOn(
      createTreasureIdsModule,
      'createTreasureIds'
    )

    const result = createExpedition(getState, {
      variantId: 'SHORT',
      name: 'Test expedition config',
      bigPocketVariant: true,
      marketId: 'market1',
    })

    expect(createIdListSpy.mock.calls[0]).toEqual([
      expect.any(Array),
      expect.any(Array),
      expect.any(Function),
      {
        seed: 'TEST_EXPEDITION_ID',
      },
    ])

    expect(createSupplyIdsSpy.mock.calls[0]).toEqual([
      expect.any(Array),
      expect.any(Object),
      createIdListSpy.mock.results[0].value.seed,
    ])

    expect(createTreasureIdsSpy.mock.calls[0]).toEqual([
      expect.any(Object),
      expect.any(Array),
      createSupplyIdsSpy.mock.results[0].value.seed,
    ])

    expect(result.seed).toEqual({
      seed: createTreasureIdsSpy.mock.results[0].value.seed.seed,
      supplyState: createTreasureIdsSpy.mock.results[0].value.seed.state,
      nemesisState: true,
    })

    createIdListSpy.mockRestore()
    createSupplyIdsSpy.mockRestore()
    createTreasureIdsSpy.mockRestore()
  })
})
