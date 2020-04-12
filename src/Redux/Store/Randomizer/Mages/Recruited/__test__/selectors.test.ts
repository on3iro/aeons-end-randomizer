import { MagesRecruitedStateSlice, selectors } from '..'

const mockMagesRecruited: MagesRecruitedStateSlice = {
  Randomizer: {
    Mages: {
      Recruited: [{ id: 'Adleheim' }, { id: 'YanMagda' }, { id: 'Zhana' }],
    },
  },
}

describe('Randomizer | Mages | Recruited | selectors', () => {
  test('getMages()', () => {
    const expected = [{ id: 'Adleheim' }, { id: 'YanMagda' }, { id: 'Zhana' }]

    const result = selectors.getMages(mockMagesRecruited)

    expect(result).toEqual(expected)
  })
})
