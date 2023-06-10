import * as types from 'aer-types/types'

import {
  State,
  initialState,
  Reducer,
  actions,
} from 'Redux/Store/Randomizer/Supply/RandomSetup'

const availableSupplyCards: ReadonlyArray<
  types.ICard & {
    selected: boolean
  }
> = [
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Diamond Cluster',
    id: 'DiamondCluster',
    cost: 4,
    effect:
      '\n        <p>\n          Gain 2 <span class="aether">&AElig;</span>.<br/>\n          If this is the second time you have played Diamond Cluster this turn \n          gain an additional 2 <span class="aether">&AElig;</span>.\n        </p>\n      ',
    keywords: [],
    selected: true,
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Chaos Arc',
    id: 'ChaosArc',
    cost: 6,
    effect:
      '\n      <p>\n      <b>Cast:</b> Deal 3 damage.<br/>\n      Deal 2 additional damage for each prepped spell in an adjacent breach.\n        </p>\n        ',
    keywords: [],
    selected: false,
  },
  {
    type: 'Relic',
    expansion: 'BS',
    name: 'Soul Cords',
    id: 'SoulCords',
    cost: 5,
    effect:
      '\n      <p>\n      Any player gains 1 pulse token.<br/>\n      Each player with 2 or more pulse tokens gains 1 charge.\n      </p>\n      ',
    keywords: ['pulse'],
    selected: true,
  },
  {
    type: 'Spell',
    expansion: 'AE',
    name: 'Ignite',
    id: 'Ignite',
    cost: 4,
    effect:
      '\n        <p>\n          <b>Cast:</b> Deal 2 damage.<br/>\n          Any ally gains 1 charge.\n        </p>\n          ',
    keywords: [],
    selected: true,
  },
  {
    type: 'Gem',
    expansion: 'AE',
    name: 'Searing Ruby',
    id: 'SearingRuby',
    cost: 4,
    effect:
      '\n      <p>\n      Gain 2 <span class="aether">&AElig;</span>.<br/>\n      Gain an additional 1 <span class="aether">&AElig;</span> that can only \n      be used to gain a spell.\n      </p>\n      ',
    keywords: [],
    selected: true,
  },
]

const mockSupply: State = {
  Tiles: [{ id: 'DiamondCluster' }, { id: 'ChaosArc' }, { id: 'SoulCords' }],
}

describe('Randomizer | Supply | RandomSetup | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle RESET', () => {
    const result = Reducer(mockSupply, actions.resetMarket())

    expect(result).toEqual(initialState)
  })

  it('should handle CREATE', () => {
    const expected = {
      Tiles: [
        { id: 'SearingRuby', type: 'Gem', blueprintId: 0 },
        { id: 'SoulCords', type: 'Relic', blueprintId: 1 },
        { id: 'ChaosArc', type: 'Spell', blueprintId: 2 },
      ],
    }
    const result = Reducer(
      mockSupply,
      actions.createMarket(
        availableSupplyCards,
        [
          // @ts-ignore
          { type: 'Gem', operation: 'ANY', id: 0 },
          // @ts-ignore
          { type: 'Relic', operation: 'ANY', id: 1 },
          // @ts-ignore
          { type: 'Spell', operation: 'ANY', id: 2 },
        ],
        [],
        { seed: 'Test' }
      )
    )

    expect(result).toEqual(expected)
  })

  it.todo('should hanlde locked cards')
})
