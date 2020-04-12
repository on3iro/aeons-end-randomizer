import { NemesisStateSlice, selectors } from '..'

const mockNemesis: NemesisStateSlice = {
  Randomizer: {
    Nemesis: {
      id: 'TheWailing',
    },
  },
}

describe('Randomizer | Nemesis | selectors', () => {
  test('getNemesis()', () => {
    const expected = {
      id: 'TheWailing',
    }

    const result = selectors.getNemesis(mockNemesis)

    expect(result).toEqual(expected)
  })
})
