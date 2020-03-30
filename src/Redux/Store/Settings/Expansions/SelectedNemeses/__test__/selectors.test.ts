import { SelectedNemesesStateSlice } from 'Redux/Store/Settings/Expansions/SelectedNemeses/types'

import { selectors } from 'Redux/Store/Settings/Expansions/SelectedNemeses/selectors'

const mockSelectedNemesesState: SelectedNemesesStateSlice = {
  Settings: {
    Expansions: {
      SelectedNemeses: {
        nemeses: {
          CarapaceQueen: {
            expansion: 'AE',
            name: 'Carapace Queen',
            id: 'CarapaceQueen',
            health: 60,
            difficulty: 3,
            expeditionRating: 1,
            additionalInfo: '',
            selected: true,
          },
          CrookedMask: {
            expansion: 'AE',
            name: 'Crooked Mask',
            id: 'CrookedMask',
            health: 70,
            difficulty: 5,
            expeditionRating: 2,
            additionalInfo: '',
            selected: false,
          },
          HordeCrone: {
            expansion: 'Depths',
            name: 'Horde-Crone',
            id: 'HordeCrone',
            health: 60,
            difficulty: 6,
            expeditionRating: 2,
            additionalInfo: '',
            selected: true,
          },
        },
        nemesisIds: ['CarapaceQueen', 'CrookedMask', 'HordeCrone'],
      },
    },
  },
}

describe('Settings | Expansions | SelectedNemeses | selectors', () => {
  test('getSelectedNemesesState()', () => {
    const expected = {
      nemeses: {
        CarapaceQueen: {
          expansion: 'AE',
          name: 'Carapace Queen',
          id: 'CarapaceQueen',
          health: 60,
          difficulty: 3,
          expeditionRating: 1,
          additionalInfo: '',
          selected: true,
        },
        CrookedMask: {
          expansion: 'AE',
          name: 'Crooked Mask',
          id: 'CrookedMask',
          health: 70,
          difficulty: 5,
          expeditionRating: 2,
          additionalInfo: '',
          selected: false,
        },
        HordeCrone: {
          expansion: 'Depths',
          name: 'Horde-Crone',
          id: 'HordeCrone',
          health: 60,
          difficulty: 6,
          expeditionRating: 2,
          additionalInfo: '',
          selected: true,
        },
      },
      nemesisIds: ['CarapaceQueen', 'CrookedMask', 'HordeCrone'],
    }

    const result = selectors.getSelectedNemesesState(mockSelectedNemesesState)

    expect(result).toEqual(expected)
  })

  test('getSelectedNemesesLookupObject()', () => {
    const expected = {
      CarapaceQueen: {
        expansion: 'AE',
        name: 'Carapace Queen',
        id: 'CarapaceQueen',
        health: 60,
        difficulty: 3,
        expeditionRating: 1,
        additionalInfo: '',
        selected: true,
      },
      CrookedMask: {
        expansion: 'AE',
        name: 'Crooked Mask',
        id: 'CrookedMask',
        health: 70,
        difficulty: 5,
        expeditionRating: 2,
        additionalInfo: '',
        selected: false,
      },
      HordeCrone: {
        expansion: 'Depths',
        name: 'Horde-Crone',
        id: 'HordeCrone',
        health: 60,
        difficulty: 6,
        expeditionRating: 2,
        additionalInfo: '',
        selected: true,
      },
    }

    const result = selectors.getSelectedNemesesLookupObject(
      mockSelectedNemesesState
    )

    expect(result).toEqual(expected)
  })

  test('getNemesisById()', () => {
    const expected = {
      expansion: 'AE',
      name: 'Carapace Queen',
      id: 'CarapaceQueen',
      health: 60,
      difficulty: 3,
      expeditionRating: 1,
      additionalInfo: '',
      selected: true,
    }

    const result = selectors.getNemesisById(mockSelectedNemesesState, {
      id: 'CarapaceQueen',
    })

    expect(result).toEqual(expected)
  })

  test('getNemesesByExpansionId()', () => {
    const expected = [
      {
        expansion: 'Depths',
        name: 'Horde-Crone',
        id: 'HordeCrone',
        health: 60,
        difficulty: 6,
        expeditionRating: 2,
        additionalInfo: '',
        selected: true,
      },
    ]

    const result = selectors.getNemesesByExpansionId(
      mockSelectedNemesesState,
      'Depths'
    )

    expect(result).toEqual(expected)
  })

  test('getSelectedNemeses()', () => {
    const expected = [
      {
        expansion: 'AE',
        name: 'Carapace Queen',
        id: 'CarapaceQueen',
        health: 60,
        difficulty: 3,
        expeditionRating: 1,
        additionalInfo: '',
        selected: true,
      },
      {
        expansion: 'Depths',
        name: 'Horde-Crone',
        id: 'HordeCrone',
        health: 60,
        difficulty: 6,
        expeditionRating: 2,
        additionalInfo: '',
        selected: true,
      },
    ]

    const result = selectors.getSelectedNemeses(mockSelectedNemesesState)

    expect(result).toEqual(expected)
  })
})
