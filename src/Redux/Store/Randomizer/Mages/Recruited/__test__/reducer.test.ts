import * as types from 'aer-types/types'

import {
  State,
  initialState,
  Reducer,
  actions,
} from 'Redux/Store/Randomizer/Mages/Recruited'

const availableMages: ReadonlyArray<types.Mage & { selected: boolean }> = [
  {
    expansion: 'AE',
    name: 'Adelheim',
    id: 'Adelheim',
    mageTitle: 'Breach Mage Weaponsmith',
    ability:
      '\n        <h2>Aethereal Ward</h2>\n        <p class="ability-activation">Activate during the nemesis draw phase:</p>\n        <p>When a nemesis attack or power card is drawn but before it is resolved, \n        you may discard it. It has no effect.\n        <span class="hint">(The nemesis does not draw a replacement card)</span></p>\n      ',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Gem',
        name: 'Amethyst Shard',
        expansion: 'AE',
        id: 'AmethystShard',
        cost: 0,
        effect:
          '\n            <p>\n              Gain 1 <span class="aether">&AElig;</span>.<br/>\n              Any ally may draw a card and then discard a card in hand.\n            </p>\n          ',
        keywords: [],
      },
    ],
    selected: true,
  },
  {
    expansion: 'AE',
    name: 'Brama',
    id: 'Brama',
    mageTitle: 'Breach Mage Elder',
    ability:
      '\n        <h2>Brink Siphon</h2>\n        <p class="ability-activation">Activate during your main phase:</p>\n        <p>Any player gains 4 life.</p>\n      ',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Buried Light',
        expansion: 'AE',
        id: 'BuriedLight',
        cost: 0,
        effect:
          '\n            <p>\n              <b>Cast:</b> Deal 1 damage.<br/>\n              Gain 1 <span class="aether">&AElig;</span>.\n            </p>\n          ',
        keywords: [],
      },
    ],
    selected: false,
  },
  {
    expansion: 'Depths',
    name: 'Nym',
    id: 'Nym',
    mageTitle: 'Breach Mage Apprentice',
    ability:
      '\n        <h2>Terminus Barrier</h2>\n        <p class="ability-activation">Activate during your main phase:</p>\n        <p>Discard the top card of the nemesis deck.</p>\n        <p>If you discarded an attack card, discard an additional card.</p>\n      ',
    numberOfCharges: 5,
    uniqueStarters: [
      {
        type: 'Spell',
        name: 'Cinder',
        expansion: 'Depths',
        id: 'Cinder',
        cost: 0,
        effect:
          '\n            <p>\n              <b>Cast:</b> Deal 1 damage.\n              <span class="or">OR</span>\n              <b>Cast:</b> Gain 2 <span class="aether">&AElig;</span>.\n            </p>\n          ',
        keywords: [],
      },
    ],
    selected: true,
  },
]

const mockMagesRecruitedState: State = [
  { id: 'Adleheim' },
  { id: 'YanMagda' },
  { id: 'Zhana' },
]

describe('Randomizer | Mages | Recruited | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle SET_RANDOM', () => {
    const expected = [{ id: 'Nym' }, { id: 'Adelheim' }]

    const result = Reducer(
      mockMagesRecruitedState,
      actions.setRandomMages(availableMages, 2, { seed: 'Test' })
    )

    expect(result).toEqual(expected)
  })
})
