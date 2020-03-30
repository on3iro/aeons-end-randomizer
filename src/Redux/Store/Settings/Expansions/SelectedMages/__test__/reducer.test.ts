import { Cmd, getCmd, getModel } from 'redux-loop'
import { set as setToDb, get as getFromDb } from 'idb-keyval'

import { State } from 'Redux/Store/Settings/Expansions/SelectedMages/types'
import { MAGES_DB_KEY } from 'Redux/Store/Settings/Expansions/SelectedMages/constants'
import { actions } from 'Redux/Store/Settings/Expansions/SelectedMages/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Settings/Expansions/SelectedMages/reducer'

const mockSelectedMagesState: State = {
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
}

describe('Settings | Expansions | SelectedMages | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it('should handle TOGGLE_MAGE', () => {
    const expected = {
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
          selected: false,
        },
      },
      mageIds: ['Adelheim', 'Brama', 'Nym'],
    }

    const selectedCardsToSave = ['Adelheim']

    const result = Reducer(mockSelectedMagesState, actions.toggleMage('Nym'))

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(expected)
    expect(cmd).toEqual(
      Cmd.run(setToDb, {
        args: [MAGES_DB_KEY, selectedCardsToSave],
        successActionCreator: actions.setToDBSuccessful,
        failActionCreator: actions.setToDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB', () => {
    const result = Reducer(initialState, actions.fetchFromDB())

    const model = getModel(result)
    const cmd = getCmd(result)

    expect(model).toEqual(initialState)

    expect(cmd).toEqual(
      Cmd.run(getFromDb, {
        args: [MAGES_DB_KEY],
        successActionCreator: actions.fetchFromDBSuccessful,
        failActionCreator: actions.fetchFromDBFailed,
      })
    )
  })

  it('should handle FETCH_FROM_DB_SUCCESS for defined state', () => {
    const result = Reducer(
      mockSelectedMagesState,
      actions.fetchFromDBSuccessful(['Adelheim', 'Nym'])
    )

    expect(getModel(result)).toEqual(mockSelectedMagesState)
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
