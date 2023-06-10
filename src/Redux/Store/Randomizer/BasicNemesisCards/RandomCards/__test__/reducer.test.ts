import * as types from 'aer-types/types'

import { State } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/types'
import { actions } from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/actions'

import {
  initialState,
  Reducer,
} from 'Redux/Store/Randomizer/BasicNemesisCards/RandomCards/reducer'

const availableBasicNemesisCards = [
  { id: 'minion1', type: 'Minion', tier: 1 },
  { id: 'minion2', type: 'Minion', tier: 1 },
  { id: 'minion3', type: 'Minion', tier: 1 },
  { id: 'minion4', type: 'Minion', tier: 2 },
  { id: 'minion5', type: 'Minion', tier: 2 },
  { id: 'minion6', type: 'Minion', tier: 2 },
  { id: 'minion7', type: 'Minion', tier: 3 },
  { id: 'minion8', type: 'Minion', tier: 3 },
  { id: 'minion9', type: 'Minion', tier: 3 },
  { id: 'power1', type: 'Power', tier: 1 },
  { id: 'power2', type: 'Power', tier: 1 },
  { id: 'power3', type: 'Power', tier: 1 },
  { id: 'power4', type: 'Power', tier: 2 },
  { id: 'power5', type: 'Power', tier: 2 },
  { id: 'power6', type: 'Power', tier: 2 },
  { id: 'power7', type: 'Power', tier: 3 },
  { id: 'power8', type: 'Power', tier: 3 },
  { id: 'power9', type: 'Power', tier: 3 },
  { id: 'attack1', type: 'Attack', tier: 1 },
  { id: 'attack2', type: 'Attack', tier: 1 },
  { id: 'attack3', type: 'Attack', tier: 1 },
  { id: 'attack4', type: 'Attack', tier: 2 },
  { id: 'attack5', type: 'Attack', tier: 2 },
  { id: 'attack6', type: 'Attack', tier: 2 },
  { id: 'attack7', type: 'Attack', tier: 3 },
  { id: 'attack8', type: 'Attack', tier: 3 },
  { id: 'attack9', type: 'Attack', tier: 3 },
] as types.BasicNemesisCard[]

const mockBasicNemesisCards: State = {
  Tier1: [
    { id: 'minion1' },
    { id: 'minion2' },
    { id: 'minion3' },
    { id: 'power1' },
    { id: 'power2' },
    { id: 'power3' },
    { id: 'attack1' },
    { id: 'attack2' },
    { id: 'attack3' },
  ],
  Tier2: [
    { id: 'minion4' },
    { id: 'minion5' },
    { id: 'minion6' },
    { id: 'power4' },
    { id: 'power5' },
    { id: 'power6' },
    { id: 'attack4' },
    { id: 'attack5' },
    { id: 'attack6' },
  ],
  Tier3: [
    { id: 'minion7' },
    { id: 'minion8' },
    { id: 'minion9' },
    { id: 'power7' },
    { id: 'power8' },
    { id: 'power9' },
    { id: 'attack7' },
    { id: 'attack8' },
    { id: 'attack9' },
  ],
}

describe('Randomizer | BasicNemesisCards | RandomCards | reducer', () => {
  it('should return the initial state', () => {
    // @ts-ignore
    const result = Reducer(undefined, {})

    expect(result).toEqual(initialState)
  })

  it.todo('should handle @@REDUX_LOOP/ENFORCE_DEFAULT_HANDLING')

  it('should handle CREATE for 1 player', () => {
    const expected = {
      Tier1: [{ id: 'minion3' }],
      Tier2: [{ id: 'minion6' }, { id: 'minion4' }, { id: 'attack6' }],
      Tier3: [
        { id: 'minion9' },
        { id: 'minion7' },
        { id: 'attack9' },
        { id: 'power7' },
        { id: 'power9' },
        { id: 'power8' },
        { id: 'attack7' },
      ],
    }

    const result = Reducer(
      mockBasicNemesisCards,
      actions.createBasicNemesisCardDeck(availableBasicNemesisCards, 1, {
        seed: 'Test',
      })
    )

    expect(result).toEqual(expected)
  })
})
