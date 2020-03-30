import { SelectedMagesStateSlice } from 'Redux/Store/Settings/Expansions/SelectedMages/types'

import { selectors } from 'Redux/Store/Settings/Expansions/SelectedMages/selectors'

const mockSelectedMagesState: SelectedMagesStateSlice = {
  Settings: {
    Expansions: {
      SelectedMages: {
        mages: {
          Adelheim: {
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
          Brama: {
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
          Nym: {
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
        },
        mageIds: ['Adelheim', 'Brama', 'Nym'],
      },
    },
  },
}

describe('Settings | Expansions | SelectedMages | selectors', () => {
  test('getSelectedMagesLookupObject()', () => {
    const expected = {
      Adelheim: {
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
      Brama: {
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
      Nym: {
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
    }

    const result = selectors.getSelectedMagesLookupObject(
      mockSelectedMagesState
    )

    expect(result).toEqual(expected)
  })

  test('getMageById()', () => {
    const expected = {
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
    }

    const result = selectors.getMageById(mockSelectedMagesState, {
      id: 'Adelheim',
    })

    expect(result).toEqual(expected)
  })

  test('getMagesByExpansionId()', () => {
    const expected = [
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

    const result = selectors.getMagesByExpansionId(
      mockSelectedMagesState,
      'Depths'
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedMagesIds()', () => {
    const expected = ['Adelheim', 'Nym']

    const result = selectors.getSelectedMagesIds(mockSelectedMagesState)

    expect(result).toEqual(expected)
  })

  test('getSelectedMages()', () => {
    const expected = [
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

    const result = selectors.getSelectedMages(mockSelectedMagesState)

    expect(result).toEqual(expected)
  })
})
